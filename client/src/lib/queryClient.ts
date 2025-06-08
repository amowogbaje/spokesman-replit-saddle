import { QueryClient, QueryFunction } from "@tanstack/react-query";

/**
 * External API Configuration
 * This service is completely separate from our application
 * and managed by a different team.
 */
const API_CONFIG = {
  // In a real app, this would come from environment variables
  BASE_URL: 'https://spokesman-admin-third.test/api',
  DEFAULT_HEADERS: {
    'Accept': 'application/json',
  },
  // Map frontend paths to API endpoints
  ENDPOINT_MAP: {
    '/api/locations': '/locations',
    '/api/events': '/events',
    '/api/latest-message': '/messages/latest',
    '/api/messages': '/messages',
  }
};

/**
 * Transforms internal app paths to external API paths
 */
function getExternalApiPath(internalPath: string): string {
  // Check if we need to transform this path
  for (const [appPath, apiPath] of Object.entries(API_CONFIG.ENDPOINT_MAP)) {
    if (internalPath.startsWith(appPath)) {
      return `${API_CONFIG.BASE_URL}${apiPath}${internalPath.slice(appPath.length)}`;
    }
  }
  
  // If no transformation needed, return original with API base URL
  return `${API_CONFIG.BASE_URL}${internalPath.startsWith('/api') ? internalPath.replace('/api', '') : internalPath}`;
}

/**
 * Error handler for the external API responses
 */
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    let errorDetails = '';
    try {
      // Try to parse JSON error response
      const errorJson = await res.json();
      errorDetails = JSON.stringify(errorJson);
    } catch (e) {
      // Fallback to text if not JSON
      errorDetails = (await res.text()) || res.statusText;
    }
    throw new Error(`${res.status}: ${errorDetails}`);
  }
}

/**
 * Makes requests to the external Saddleback Church API
 */
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Transform internal app paths to external API paths
  const externalUrl = url.startsWith('/api') ? getExternalApiPath(url) : url;
  
  // Determine if we need authorization (public vs. private endpoints)
  const isPublicEndpoint = 
    url.includes('/locations') || 
    url.includes('/messages') || 
    url.includes('/events') ||
    url.includes('/subscribe') ||
    url.includes('/contact');
  
  // Add authentication for non-public endpoints
  const headers = {
    ...API_CONFIG.DEFAULT_HEADERS,
    ...(data ? { "Content-Type": "application/json" } : {}),
    ...(!isPublicEndpoint && localStorage.getItem('auth_token') ? 
      { "Authorization": `Bearer ${localStorage.getItem('auth_token')}` } : {})
  };
  
  console.log(`Fetching from external API: ${externalUrl}`);
  
  const res = await fetch(externalUrl, {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
    // No credentials for external API
  });

  await throwIfResNotOk(res);
  return res;
}

/**
 * The behavior to take when an unauthorized (401) error occurs
 */
type UnauthorizedBehavior = "returnNull" | "throw";

/**
 * Creates a query function for TanStack Query that works with our external API
 */
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const internalPath = queryKey[0] as string;
    
    // Transform internal app paths to external API paths
    const externalUrl = getExternalApiPath(internalPath);
    
    // Determine if we need authorization (public vs. private endpoints)
    const isPublicEndpoint = 
      internalPath.includes('/locations') || 
      internalPath.includes('/messages') || 
      internalPath.includes('/events') ||
      internalPath.includes('/subscribe') ||
      internalPath.includes('/contact');
    
    // Add authentication for non-public endpoints
    const headers = {
      ...API_CONFIG.DEFAULT_HEADERS,
      ...(!isPublicEndpoint && localStorage.getItem('auth_token') ? 
        { "Authorization": `Bearer ${localStorage.getItem('auth_token')}` } : {})
    };
    
    // For debugging in development
    console.log(`Fetching from external API: ${externalUrl}`);
    
    const res = await fetch(externalUrl, { headers });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

/**
 * The configured QueryClient for connecting to the external Saddleback Church API
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: 60000, // 1 minute
      retry: 1,
    },
    mutations: {
      retry: 1,
    },
  },
});
