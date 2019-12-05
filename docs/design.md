## PeerPresents 2019 Design Document ##
A Web-Based System for In-Class Peer Feedback during Student Presentations


### Context

Peer feedback systems enable students to get feedback without substantially burdening the instructor. However, current systems typically ask students to provide feedback after class; this introduces challenges for ensuring relevant, timely, diverse, and sufficient amounts of feedback, and reduces the time available for student reflection. PeerPresents is a novel system for in-class peer review where students can quickly exchange feedback on projects without being burdened by additional work outside of class. We found students can receive immediate, copious, and diverse peer feedback through a structured in-class activity. Students also described the feedback they received as helpful and reported that they gave more feedback than without using the system. These early results demonstrate the potential
benefits of in-class peer feedback systems.


### Overview
![architecture overview](res/architecture_overview.png)


### Stakeholders

* Students presenting their work
* Students giving feedback to peers
* Course Staff or Instructors
* Researchers using data


### Goals

#### Overall Goals

* Support stakeholder goals
* Scale horizontally to support user growth
  * I.e. microservice architecture
* Target platforms
  * (Server): Flexible deployment (compatible with cloud platforms and on-premise machines)
  * (App): Desktop and mobile web-browsers

#### Stakeholders

* Students presenting their work
* Students giving feedback to peers
* Course staff / Instructors
* Researchers using generated data

#### Scope

For scope and stakeholder goals, see the Project Plan document.

### Proposed Solution

**Architecture:**

Follows a microservice architecture. The user interacts exclusively through the Frontend. The Frontend sends all requests to the Backend Master (1 or more servers). If using more than 1 Backend Master, a simple load balancer can be used. The Backend Master recieves all incoming Frontend requests and assigns tasks to the appropriate Worker Service. Worker Services process light-weight tasks and can be provisioned on-the-fly by the Backend Master.

**Components:**

* Frontend (User Interface)
  * Handles all user interactions
  * Routes requests to appropraite microservice
* Backend Master (Server)
  * Handles all requests from Frontend
  * Assigns tasks to appropriate Worker Services
* Storage
  * Handles all database requests
* Session Store
  * Persists session state externaly to microservices and main storage
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

**Implementation**

PeerPresents is a Node.js application. The Koa framework is used for the backend components and API consumption. The frontend uses the React framework to build declaritive UIs and the Bootstrap framework for dynamic css/layouts.

### Testability, Monitoring, and Alerting

**Unit Tests**

Unit tests will be written for all components continuously during development. A component must pass all unit tests before being accepted into the master branch.

**Functional Tests**

Functional tests will be written for all components continuously during development. A component must pass all functional tests before being accepted into the master branch.

**Monitoring**

Any system/component actively running on non-development resources must be monitored with periodic health checks. The monitoring results must be stored in an aduitable format in a secure location. 

### Open Questions




