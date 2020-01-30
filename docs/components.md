# Components

Implementation-specific details of the major components are documented here.

**Table of Contents**

* Frontend (User Interface)
  * Handles all user interactions
  * Routes requests to appropraite microservice
* Backend Master (Server)
  * Handles all requests from Frontend
  * Assigns tasks to appropriate Worker Services
* Storage
  * Handles all database requests
* Worker Services (dynamically provisioned workers; process light-weight tasks)
  * Identity Manager
    * Handles user auth and user management
  * Presentation Manager
    * Handles configuration of Presentations
  * Study Manager
    * Handles configuration of study design
  * Live Presentation Service
    * Handles connections for live presentation sessions
    * Generates URL for live presentation
  * Audience Manager
    * Handles all audience interactions
      * Respond, Upvote, React
  * Research Explorer
    * Handles accessing data for research interests
* Session Store
  * Persists session state externaly to microservices and main storage

## Frontend

**Networking**

Listens on http/https ports (80/443)

## Backend

**Networking**

Listens on port range 30100 - 30199

## Storage

**Networking**

Listens on port range 30300 - 30399

## Worker Services

**Networking**

Listens on port range 30200 - 30299

## Session Store