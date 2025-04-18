# Saddleback Church Website - External API Integration

This application is a frontend replica of the Saddleback Church website that integrates with an external API for all data needs. **No direct database connection is required** - all data is fetched from the documented API endpoints.

## Architecture Overview

This application follows a client-server architecture with a clear separation of concerns:

1. **Frontend**: React application that displays data and provides user interaction
2. **Backend Proxy**: Express server that proxies requests to the external API
3. **External API**: Third-party service that provides all data (not included in this repo)

## External API Documentation

### API Location

All data for this application comes from the Saddleback Church API, which is hosted at:
```
https://api.saddleback-church.com/v1
```

### Authentication Scheme

* Bearer token authentication for protected endpoints
* No authentication required for public endpoints (locations, events, messages)

### API Documentation Formats

We provide the API documentation in multiple formats for easy integration:

1. **OpenAPI/Swagger** - Located at `saddleback-api.yaml`
   * Complete API specification in YAML format
   * Includes detailed schemas, examples, and error responses
   
2. **Postman Collection** - Located at `saddleback-postman-collection.json`
   * Ready-to-import Postman collection with all endpoints
   * Includes request examples and response samples
   
3. **JSON Reference** - Located at `api-endpoints.json`
   * Detailed JSON documentation of all endpoints
   * Useful for code generation and reference

### Importing Documentation to Tools

#### Swagger UI

1. Visit [Swagger Editor](https://editor.swagger.io/)
2. Click File > Import File
3. Upload the `saddleback-api.yaml` file
4. The documentation will render in the UI with interactive testing

#### Postman

1. Open Postman
2. Click Import > File
3. Upload `saddleback-postman-collection.json`
4. Postman will create a collection with all endpoints ready to use

### Key API Endpoints

#### Public Endpoints

* `GET /locations` - List all church locations
* `GET /locations/{id_or_slug}` - Get details for a specific location
* `GET /messages` - List all messages/sermons
* `GET /messages/latest` - Get the latest message
* `GET /events` - List all upcoming events
* `POST /subscribe` - Subscribe to newsletter
* `POST /contact` - Send a contact form message

#### Protected Endpoints

* `POST /auth/login` - Authenticate and get a token
* `GET /users/{id}` - Get user details
* `POST /users` - Create a new user
* `POST /event-registrations` - Register for an event

## Implementation Details

### Server-Side Integration

The server uses a custom API client (`server/db.ts`) that:

1. Makes HTTP requests to the external API
2. Handles authentication and request formatting
3. Processes responses and error handling
4. Provides a clean interface for the rest of the application

The `ExternalApiStorage` class (`server/storage.ts`) implements the same interface as the original database storage but fetches data from the API instead.

### Frontend Integration

The frontend connects to the backend proxy, which forwards requests to the external API:

1. React components use `useQuery` hooks to fetch data
2. Loading states and error handling are implemented throughout
3. Data is processed and transformed for display

### JavaScript API Client Example

Check `api-examples.js` for detailed examples of how to interact with each endpoint using pure JavaScript.

## Development Guide

### Environment Variables

Configure these environment variables to connect to the external API:

* `EXTERNAL_API_URL` - Base URL of the external API (defaults to 'https://api.saddleback-church.com/v1')
* `EXTERNAL_API_KEY` - API key for authenticated endpoints (optional)

### Running the Application

1. Start the application with:
```
npm run dev
```

2. The application will automatically connect to the external API

### Local Development

For local development without API access:

1. Use the mock data in `client/src/lib/constants.ts` as fallback
2. Consider setting up a mock server using Mock Service Worker (MSW)
3. Run tests with mock API responses

### Error Handling

The application implements comprehensive error handling:

1. Loading states show during API requests
2. Error messages display when API calls fail
3. Fallback to static data when the API is unavailable
4. Detailed error logging for debugging

## Security Notes

* API keys should never be committed to the repository
* All authenticated requests use proper authorization headers
* HTTPS is used for all API communication
* Input validation is performed on both client and server