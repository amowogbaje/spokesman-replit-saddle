// Example code demonstrating how to interact with the Saddleback Church API

// --------------------------------------------------------
// AUTHENTICATION EXAMPLES
// --------------------------------------------------------

/**
 * Log in a user with username and password
 */
async function loginUser(username, password) {
  try {
    const response = await fetch('https://api.saddleback-church.com/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    
    if (!response.ok) {
      throw new Error(`Authentication failed: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Store the token for later use
    localStorage.setItem('auth_token', data.token);
    
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

/**
 * Register a new user
 */
async function registerUser(username, password, email, name) {
  try {
    const response = await fetch('https://api.saddleback-church.com/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, email, name })
    });
    
    if (!response.ok) {
      throw new Error(`Registration failed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
}

// --------------------------------------------------------
// PUBLIC ENDPOINTS (NO AUTHENTICATION REQUIRED)
// --------------------------------------------------------

/**
 * Get all church locations
 */
async function getLocations() {
  try {
    const response = await fetch('https://api.saddleback-church.com/v1/locations');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch locations: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
}

/**
 * Get location details by slug
 */
async function getLocationBySlug(slug) {
  try {
    const response = await fetch(`https://api.saddleback-church.com/v1/locations/${slug}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch location: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching location details:', error);
    throw error;
  }
}

/**
 * Get the latest message/sermon
 */
async function getLatestMessage() {
  try {
    const response = await fetch('https://api.saddleback-church.com/v1/messages/latest');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch latest message: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching latest message:', error);
    throw error;
  }
}

/**
 * Get all messages/sermons with optional filtering
 */
async function getMessages({ speaker, limit = 10, offset = 0, sort = 'date_desc' } = {}) {
  try {
    const params = new URLSearchParams();
    if (speaker) params.append('speaker', speaker);
    params.append('limit', limit.toString());
    params.append('offset', offset.toString());
    params.append('sort', sort);
    
    const response = await fetch(`https://api.saddleback-church.com/v1/messages?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch messages: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
}

/**
 * Get all upcoming events with optional filtering
 */
async function getEvents({ date_from, date_to, location, limit = 10, offset = 0 } = {}) {
  try {
    const params = new URLSearchParams();
    if (date_from) params.append('date_from', date_from);
    if (date_to) params.append('date_to', date_to);
    if (location) params.append('location', location);
    params.append('limit', limit.toString());
    params.append('offset', offset.toString());
    
    const response = await fetch(`https://api.saddleback-church.com/v1/events?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
}

/**
 * Get event details by slug
 */
async function getEventBySlug(slug) {
  try {
    const response = await fetch(`https://api.saddleback-church.com/v1/events/${slug}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch event: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching event details:', error);
    throw error;
  }
}

/**
 * Subscribe to newsletter
 */
async function subscribeToNewsletter(email, firstName, lastName, interests = ['general']) {
  try {
    const response = await fetch('https://api.saddleback-church.com/v1/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        first_name: firstName,
        last_name: lastName,
        interests
      })
    });
    
    if (!response.ok) {
      throw new Error(`Subscription failed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
}

/**
 * Send contact form
 */
async function sendContactForm(name, email, subject, message, phone, department) {
  try {
    const response = await fetch('https://api.saddleback-church.com/v1/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        phone,
        department
      })
    });
    
    if (!response.ok) {
      throw new Error(`Failed to send contact form: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error sending contact form:', error);
    throw error;
  }
}

// --------------------------------------------------------
// AUTHENTICATED ENDPOINTS (REQUIRES LOGIN)
// --------------------------------------------------------

/**
 * Register for an event (requires authentication)
 */
async function registerForEvent(eventId, firstName, lastName, email, phone, numberOfGuests = 1, specialRequests = '') {
  try {
    // Get token from localStorage
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      throw new Error('Authentication required. Please log in first.');
    }
    
    const response = await fetch('https://api.saddleback-church.com/v1/event-registrations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        event_id: eventId,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        number_of_guests: numberOfGuests,
        special_requests: specialRequests
      })
    });
    
    if (!response.ok) {
      throw new Error(`Event registration failed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error registering for event:', error);
    throw error;
  }
}

/**
 * Get user profile (requires authentication)
 */
async function getUserProfile(userId) {
  try {
    // Get token from localStorage
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      throw new Error('Authentication required. Please log in first.');
    }
    
    const response = await fetch(`https://api.saddleback-church.com/v1/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch user profile: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}

/**
 * Get user's event registrations (requires authentication)
 */
async function getUserRegistrations(userId) {
  try {
    // Get token from localStorage
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      throw new Error('Authentication required. Please log in first.');
    }
    
    const response = await fetch(`https://api.saddleback-church.com/v1/event-registrations/user/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch user registrations: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching user registrations:', error);
    throw error;
  }
}

// --------------------------------------------------------
// USAGE EXAMPLES WITH ASYNC/AWAIT
// --------------------------------------------------------

// Example usage with async/await
async function examples() {
  try {
    // 1. Get all locations
    const locations = await getLocations();
    console.log('All locations:', locations);
    
    // 2. Get location by slug
    const lakeForest = await getLocationBySlug('lake-forest');
    console.log('Lake Forest campus:', lakeForest);
    
    // 3. Get latest message
    const latestMessage = await getLatestMessage();
    console.log('Latest message:', latestMessage);
    
    // 4. Get upcoming events
    const events = await getEvents({ date_from: '2025-04-01' });
    console.log('Upcoming events:', events);
    
    // 5. Login (uncomment to test)
    /*
    const loginResult = await loginUser('username', 'password');
    console.log('Login result:', loginResult);
    
    // 6. Register for an event (requires login)
    const registration = await registerForEvent(
      events[0].id,
      'John',
      'Doe',
      'john@example.com',
      '555-123-4567',
      2,
      'Need accessible seating'
    );
    console.log('Registration result:', registration);
    */
    
    // 7. Subscribe to newsletter
    const subscription = await subscribeToNewsletter(
      'john@example.com',
      'John',
      'Doe',
      ['general', 'events']
    );
    console.log('Subscription result:', subscription);
  } catch (error) {
    console.error('Example error:', error);
  }
}

// Uncomment to run the examples
// examples();