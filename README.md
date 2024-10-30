# Natours

## An Awesome Tour Booking Site Built on Top of NodeJS

<!-- ### Key Features

- Authentication and Authorization
- Sign up with Email Verification
- Login and Logout
- Forget Password and Reset Password
- Tour Booking Management
- Interactive Tour Map with User Reviews and Ratings
- User Profile Customization
- Secure Credit Card Payment
- Dark Mode for Enhanced User Experience -->

### Overview

This repository contains the source code for a booking application built using Express.js and MongoDB. The app allows users to manage tours, make bookings, and leave reviews while providing an admin interface for managing users and tours.

### Features

- User authentication using JWT tokens.
- Ability to create, update, and delete bookings.
- Review management for tours.
- Admin functionality to manage users and tours.
  S- ecure token-based authentication for API endpoints.
- MongoDB for storing user data, tours, bookings, and reviews.

<!-- ### Prerequisites

Before you begin, ensure you have the following dependencies installed:

- Node.js
- npm
- MongoDB
!-->

### Installation

```
git clone https://github.com/antedotee/Natours
npm i
```

<!-- Create a .env file and set the following environment variables:
env
Copy code
MONGO_URL=your_mongodb_connection_string
PORT=5000 -->

### Entry Point

The entry point for the backend application is backend/server.js.

### Running the Application

`npm run start`

<!-- This application uses MongoDB to store data, including models for users, tours, bookings, and reviews. -->

### API Endpoints

#### User Authentication

- POST /api/auth/signup: Sign up a new user.
- POST /api/auth/login: Log in as a user and generate a JWT token.
- GET /api/user/me: Get current user's details.
- PATCH /api/user/updateMe: Update current user's data.
- DELETE /api/user/deleteMe: Delete current user's account.

#### Booking Management

- GET /api/bookings: Get all bookings (Admin only).
- POST /api/bookings: Create a new booking.
- GET /api/bookings/:id: Get details of a specific booking.
- PATCH /api/bookings/:id: Update a specific booking (Admin only).
- DELETE /api/bookings/:id: Delete a specific booking (Admin only).

#### Tour Management

- GET /api/tours: Get a list of all tours.
- POST /api/tours: Create a new tour (Admin only).
- GET /api/tours/:id: Get details of a specific tour.
- PATCH /api/tours/:id: Update a specific tour (Admin only).
- DELETE /api/tours/:id: Delete a specific tour (Admin only).

#### Review Management

- GET /api/tours/:tourId/reviews: Get all reviews for a specific tour.
- POST /api/tours/:tourId/reviews: Create a review for a specific tour (User only).
- PATCH /api/reviews/:id: Update a specific review (Admin/User).
- DELETE /api/reviews/:id: Delete a specific review (Admin/User).

### Technologies Used

- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing application data.
- Mongoose: An ODM library for MongoDB and Node.js.
- JWT: For user authentication and secure API access.
- Resend : For sending emails
- Stripe : For payment of tours

### Deployment

The website is deployed with Git into render:
(https://natours-fonh.onrender.com/)

### License

This project is licensed under the MIT License.
