# Saddleback Church Website - API Integration Guide

This application is a frontend replica of the Saddleback Church website that integrates with an external API for all data needs.

## API Documentation

### Overview

All data for this application comes from the Saddleback Church API, which is hosted at:
```
https://api.saddleback-church.com/v1
```

This API uses the following authentication scheme:
* Bearer token authentication for protected endpoints
* No authentication required for public endpoints (locations, events, messages)

### API Documentation Formats

The API is documented in two formats:

1. **OpenAPI/Swagger** - Located at `saddleback-api.yaml`
2. **Detailed JSON** - Located at `api-endpoints.json`

### Importing to Tools

#### Importing to Swagger UI

1. Visit [Swagger Editor](https://editor.swagger.io/)
2. Click File > Import File
3. Upload the `saddleback-api.yaml` file
4. The documentation will render in the UI

#### Importing to Postman

1. Open Postman
2. Click Import > File
3. Upload either the `saddleback-api.yaml` or `api-endpoints.json` file
4. Postman will create a collection with all endpoints

### Available Endpoints

The API provides the following key endpoints:

#### Public Endpoints (No Auth Required)

* `GET /locations` - List all church locations
* `GET /locations/{id_or_slug}` - Get details for a specific location
* `GET /messages` - List all messages/sermons
* `GET /messages/latest` - Get the latest message
* `GET /messages/{id_or_slug}` - Get details for a specific message
* `GET /events` - List all upcoming events
* `GET /events/{id_or_slug}` - Get details for a specific event
* `POST /subscribe` - Subscribe to newsletter
* `POST /contact` - Send a contact form message

#### Protected Endpoints (Auth Required)

* `POST /auth/login` - Authenticate and get a token
* `GET /users/{id}` - Get user details
* `PATCH /users/{id}` - Update user details
* `POST /users` - Create a new user
* `POST /event-registrations` - Register for an event
* `GET /event-registrations/user/{user_id}` - Get all registrations for a user

## Frontend Integration

The frontend integrates with the API using the following approach:

1. All API calls are made through the `queryClient.ts` utility
2. Frontend paths are mapped to API endpoints automatically
3. API responses are parsed and transformed for the UI

### Example API Usage

Check the `api-examples.js` file for detailed examples of how to interact with each endpoint.

## Development Notes

### Running the Application

1. Start the application with:
```
npm run dev
```

2. The app will load data from the external API

### Local Testing

Since the app relies on an external API, you'll need:

* Internet connection to reach the API server
* Mock service worker (MSW) for local development testing without the API
* API key for authenticated endpoints (when needed)

### Adding New API Features

To integrate with a new API endpoint:

1. Add the endpoint to the `ENDPOINT_MAP` in `queryClient.ts`
2. Create interfaces for the API response data
3. Use `useQuery` or `useMutation` from React Query to connect to the endpoint
4. Handle loading, error, and success states

### API Error Handling

The application handles API errors by:

1. Displaying loading states while requests are in progress
2. Showing appropriate error messages when API calls fail
3. Falling back to static data when needed for development