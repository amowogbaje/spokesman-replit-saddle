import fetch from 'node-fetch';

/**
 * External API Client
 * This module provides functions to interact with the external SSOH Church API
 * No database connections are used - all data is retrieved from the external API
 */

// Configure API connection
const API_CONFIG = {
  // Base URL for the external API
  BASE_URL: process.env.EXTERNAL_API_URL || 'https://spokesman-admin-third.test/api',
  
  // Optional API key for authenticated requests
  API_KEY: process.env.EXTERNAL_API_KEY || '',
  
  // Default headers for all requests
  DEFAULT_HEADERS: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
};

/**
 * Generic API request function
 * @param path - API endpoint path
 * @param method - HTTP method
 * @param body - Optional request body
 * @param requiresAuth - Whether this request requires authentication
 * @returns {Promise<any>} - API response
 */
export async function apiRequest(
  path: string,
  method: string = 'GET',
  body?: any,
  requiresAuth: boolean = false
): Promise<any> {
  // Construct full URL
  const url = `${API_CONFIG.BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  
  // Set up headers
  const headers: Record<string, string> = {
    ...API_CONFIG.DEFAULT_HEADERS,
  };
  
  // Add auth token if required and available
  if (requiresAuth && API_CONFIG.API_KEY) {
    headers['Authorization'] = `Bearer ${API_CONFIG.API_KEY}`;
  }
  
  try {
    // Make the request
    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
    
    // Check if the response is OK
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API Error (${response.status}): ${error}`);
    }
    
    // Parse and return JSON response
    return await response.json();
  } catch (error) {
    console.error(`API request failed: ${error}`);
    throw error;
  }
}

/**
 * API namespace exports specific functions for each endpoint
 */
export const api = {
  // Locations
  locations: {
    getAll: () => apiRequest('/locations'),
    getById: (id: string) => apiRequest(`/locations/${id}`),
    getBySlug: (slug: string) => apiRequest(`/locations/${slug}`),
    create: (data: any) => apiRequest('/locations', 'POST', data, true),
    update: (id: string, data: any) => apiRequest(`/locations/${id}`, 'PATCH', data, true),
  },
  
  // Messages
  messages: {
    getAll: () => apiRequest('/messages'),
    getById: (id: string) => apiRequest(`/messages/${id}`),
    getBySlug: (slug: string) => apiRequest(`/messages/${slug}`),
    getLatest: () => apiRequest('/messages/latest'),
    create: (data: any) => apiRequest('/messages', 'POST', data, true),
    update: (id: string, data: any) => apiRequest(`/messages/${id}`, 'PATCH', data, true),
  },
  
  // Events
  events: {
    getAll: () => apiRequest('/events'),
    getById: (id: string) => apiRequest(`/events/${id}`),
    getBySlug: (slug: string) => apiRequest(`/events/${slug}`),
    create: (data: any) => apiRequest('/events', 'POST', data, true),
    update: (id: string, data: any) => apiRequest(`/events/${id}`, 'PATCH', data, true),
  },
  
  // Event Registrations
  eventRegistrations: {
    getAll: () => apiRequest('/event-registrations', 'GET', null, true),
    getByEventId: (eventId: string) => apiRequest(`/event-registrations/event/${eventId}`, 'GET', null, true),
    getByUserId: (userId: string) => apiRequest(`/event-registrations/user/${userId}`, 'GET', null, true),
    register: (data: any) => apiRequest('/event-registrations', 'POST', data, true),
  },
  
  // Users
  users: {
    getAll: () => apiRequest('/users', 'GET', null, true),
    getById: (id: string) => apiRequest(`/users/${id}`, 'GET', null, true),
    getByUsername: (username: string) => apiRequest(`/users?username=${username}`, 'GET', null, true),
    create: (data: any) => apiRequest('/users', 'POST', data),
    update: (id: string, data: any) => apiRequest(`/users/${id}`, 'PATCH', data, true),
  },
  
  // Authentication
  auth: {
    login: (username: string, password: string) => 
      apiRequest('/login', 'POST', { username, password }),
  },
  
  // Utilities
  utilities: {
    subscribe: (data: any) => apiRequest('/subscribe', 'POST', data),
    contact: (data: any) => apiRequest('/contact', 'POST', data),
  }
};
