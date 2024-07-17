# Spring_crud_react_app Frontend

This is the frontend part of the `Spring_crud_react_app`, built using React.js. This application is designed to interact with a Spring Boot backend to perform CRUD operations.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm).
- You have a basic understanding of React.js and REST APIs.
- The backend part of the application (Spring Boot) is up and running.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/Spring_crud_react_app.git
    cd Spring_crud_react_app/frontend
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

## Running the Application

To run the application locally, execute the following command in the project directory:

```sh
npm start

This will start the development server and the application will be available at http://localhost:3000.


Project Structure

Here is a brief overview of the project's structure:

frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Component1.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md


Features

1. Create: Add new records to the database.
2. Read: Fetch and display records from the database.
3. Update: Modify existing records.
4. Delete: Remove records from the database.

Technologies Used

React.js: JavaScript library for building user interfaces.
Axios: Promise-based HTTP client for making API calls.
React Router: Library for handling routing in React applications.
CSS: Styling the application.




# Spring_crud_react_app Backend

This section provides an overview of the Spring CRUD (Create, Read, Update, Delete) functionality implemented in the backend of the `Spring_crud_react_app`.

## Table of Contents

- [Introduction](#introduction)
- [Architecture](#architecture)
- [Endpoints](#endpoints)
- [Technologies Used](#technologies-used)
- [Setup](#setup)

## Introduction

The backend of the `Spring_crud_react_app` is built using Spring Boot, a powerful framework for developing web applications in Java. The primary focus of this backend is to provide CRUD operations for managing data. CRUD stands for Create, Read, Update, and Delete, which are the four basic functions of persistent storage.

## Architecture

The backend architecture follows a layered approach with the following layers:

1. **Controller Layer**: Handles incoming HTTP requests and maps them to the appropriate service methods.
2. **Service Layer**: Contains the business logic of the application.
3. **Repository Layer**: Interacts with the database to perform CRUD operations.

### Flow of Data

1. **Create**: The client sends a POST request to the server to create a new resource. The server processes the request, saves the data to the database, and returns the created resource.
2. **Read**: The client sends a GET request to retrieve data. The server fetches the data from the database and returns it to the client.
3. **Update**: The client sends a PUT or PATCH request to update an existing resource. The server updates the resource in the database and returns the updated resource.
4. **Delete**: The client sends a DELETE request to remove a resource. The server deletes the resource from the database and returns a confirmation.

## Endpoints

The backend exposes the following RESTful endpoints for CRUD operations:

- **Create**:
  - `POST /api/resources`: Creates a new resource.
  
- **Read**:
  - `GET /api/resources`: Retrieves all resources.
  - `GET /api/resources/{id}`: Retrieves a resource by its ID.
  
- **Update**:
  - `PUT /api/resources/{id}`: Updates a resource by its ID.
  - `PATCH /api/resources/{id}`: Partially updates a resource by its ID.
  
- **Delete**:
  - `DELETE /api/resources/{id}`: Deletes a resource by its ID.

## Technologies Used

- **Spring Boot**: Framework for building Java-based web applications.
- **Spring Data JPA**: Abstraction over JPA (Java Persistence API) to interact with the database.
- **H2 Database**: In-memory database used for development and testing.
- **Lombok**: Library to reduce boilerplate code in Java.
- **Maven**: Build automation tool used to manage project dependencies.

## Setup

To set up and run the backend server locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/Spring_crud_react_app.git
    cd Spring_crud_react_app/backend
    ```

2. **Build the project**:
    ```sh
    mvn clean install
    ```

3. **Run the application**:
    ```sh
    mvn spring-boot:run
    ```

The application will start and be available at `http://localhost:8080`.
