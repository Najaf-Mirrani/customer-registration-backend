# Node.js Express App with MongoDB

This is a Node.js application using Express.js for API handling and MongoDB (via Mongoose) for data storage. The app allows you to manage users with basic CRUD functionality, including the ability to create, update, and retrieve users. The app also includes data validation and error handling.

## Features
- User management with fields such as `firstname`, `lastname`, `email`, `emiratesId`, `mobile`, and `cardnumber`.
- MongoDB database with Mongoose schema for user validation.
- POST route to create users.
- Basic error handling and validation responses.

## Technologies Used
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database to store user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB to work with data.
- **UUID**: For generating unique user IDs.
- **Axios**: For making HTTP requests to the backend.

## Prerequisites
- [Node.js](https://nodejs.org/) (version >= 14)
- [MongoDB](https://www.mongodb.com/try/download/community) or a MongoDB Atlas account for cloud-based DB

## Installation
### 1. Clone the repository:

```bash
git clone https://github.com/Najaf-Mirrani/customer-registration-backend.git
cd customer-registration-backend
