## PeerPresents Project Plan

Team
====

Lead Project Manager: Jessica Hammer &lt;[*hammerj@andrew.cmu.edu*]&gt;

Project Manager: Amy Cook &lt;[*ascook@memphis.edu*]&gt;

Lead Developer: Bryan Learn &lt;[*blearn@andrew.cmu.edu*]&gt;

Developer: TBA (Feb?)

Introduction
============

PeerPresents is a web-based system for in-class peer feedback during student presentations.

Peer feedback systems enable students to get feedback without substantially burdening the instructor. However, current systems typically ask students to provide feedback after class; this introduces challenges for ensuring relevant, timely, diverse, and sufficient amounts of feedback, and reduces the time available for student reflection. PeerPresents is a novel system for in-class peer review where students can quickly exchange feedback on projects without being burdened by additional work outside of class. We found students can receive immediate, copious, and diverse peer feedback through a structured in-class activity. Students also described the feedback they received as helpful and reported that they gave more feedback than without using the system. These early results demonstrate the potential benefits of in-class peer feedback systems.

Stakeholders
============

-   Students presenting their work

-   Students giving feedback to peers

-   Course staff / Instructors

-   Researchers using generated data

Scope
=====

### Overall Goals

-   Support stakeholder goals

-   Scalable to support user growth

    -   Use microservice architecture to scale horizontally

-   Target deployment environment:

    -   (Server components): Flexible deployment (compatible with cloud platforms and on-premise machines)

    -   (Client components): Desktop and mobile web browsers

### Stakeholder Goals

-   Students presenting

    -   Share content with entire team

    -   Write questions to influence feedback they get

    -   Direct crowd to questions (ensure they receive feedback)

    -   View all feedback their team received

    -   Reflect on feedback individually and/or as a team (organization, sorting, visualizing)

-   Students giving feedback

    -   Give feedback to multiple teams in one session

        -   Switch between presentations

    -   Give feedback (answer presentor’s questions)

    -   View other students’ feedback

    -   Reaction to other students’ feedback (vote/emoji/etc)

    -   No threaded discussion

-   Course staff / Instructors

    -   How many students are online

    -   How many students are active (watching, commenting, reacting)

    -   Quality check on feedback students are giving

    -   May want to give feedback themselves

    -   Want to know something about the reflection process

    -   Want system to handle all the logistics

    -   Turn features on/off for presentations

    -   Presentation data remains accessible after presentation ends

-   Researchers

    -   Group presentations in a study or in a study condition

    -   All presentation and reaction data maintained after presentation/course/session ends

    -   Easily extract data by study

    -   Have system capture all relevant data

    -   Turn features on/off for particular groups of students

        -   A/B Testing

### Stretch Goals

-   QR code links for Presentation Sessions

Project Phases
==============

1)  Initiation

    a.  Requirements gathering

    b.  Become familiar with existing project

2)  Planning

    a.  Develop & document the Project Plan

    b.  Develop & document the Technical Design

    c.  Determine team members and roles

    d.  Manager approval of plan & design

3)  Development

    a.  Agile development cycle (until all milestones completed)

        i.  Plan next tasks in sprints (2 week)

        ii. Complete tasks

        iii. Evaluate product & feedback

            1.  Demo MVP

            2.  Test MVP

4)  Deployment / Release

    a.  Evaluate product (QA testing)

    b.  User documentation and training materials

    c.  Release final version into production

5)  Production

    a.  Ongoing support

Milestones
==========

We need something show-able in the Fall (even if it’s an alpha version) but we need to know when this will be ready by August 1st.

Milestone \#1 - Project Planning
-------------------------------

Target date: Nov. 25, 2019

Duration estimate: \~2 weeks

Functional Requirements:

1.  Gather project requirements

2.  Complete Project Plan documents

3.  Complete Technical Design documents

Resource Requirements:

1.  Development environment ready

    a.  Local machine

Milestone \#2 - API Design
--------------------------

Target date: Dec. 9th (near end of Fall semester)

Duration estimate: \~1.5 weeks

Functional Requirements:

1.  Determine communication needed between all microservices

2.  Create & document all API requirements

3.  Determine functional requirements for Alpha and Beta milestones

Resource Requirements:

1.  Development environment maintained

    a.  Local machine

Milestone \#3 - Core Components
-------------------------------

Target completion date: Feb.

Duration estimate: 6-8 weeks

-   \~2-3 weeks for each component

-   Must be in this phase by Feb 15 when 2nd programmer starts.

-   When we get here, start finalizing future milestone deadlines

Functional Requirements:

1.  Core components communicate via API

2.  Frontend

    a.  User can interact via web browser

    b.  Can send API messages to Backend

    c.  Can receive API messages from Backend

3.  Backend

    a.  Can receive API messages from Frontend

    b.  Can send API message to Frontend

    c.  Can send API messages to Storage

4.  Storage

    a.  Can manage and maintain main database

    b.  Can receive API messages from Backend

    c.  Can send API messages to Backend

Resource Requirements:

1.  Development environment maintained

    a.  Local machine

Milestone \#4 - Alpha
---------------------

Target date: TBD

Duration estimate: 8-10 weeks

-   Frontend: 4 weeks

-   Backend: 2 weeks

-   Worker Service: 1 week

-   Storage: 1 week

-   Integration: 1 week

Functional Requirements:

1.  Frontend

    a.  Supports minimum API methods

    b.  Basic UI requirements

2.  Backend

    a.  Supports minimum API methods

3.  Worker Service (Backend Worker)

    a.  Basic functionality

4.  Storage

    a.  Supports minimum API methods

5.  Run all components on Test environment

Resource Requirements:

1.  Development environment maintained

    a.  Local machine

2.  Test environment ready

    a.  Must be similar to Production environment

    b.  Run testing

Milestone \#5 - Beta
--------------------

Target date: TBD

Duration estimate: 10-15 weeks

-   Frontend: 4-8 weeks

-   Backend: 1 week

-   Worker Service: 4 weeks

-   Storage: 3 days

-   Session Store: 3 days

-   User guides: 1 week

Functional Requirements:

1.  Create user guide documents

    a.  Admin & End-User

2.  Frontend

    a.  Supports most API methods

    b.  Meets most UI requirements

3.  Backend

    a.  Supports most API methods

4.  Worker Service (Backend Worker)

    a.  Minimum functionality for each service

5.  Storage

    a.  Supports most API methods

6.  Auxiliary Services

    a.  Basic functionality

Resource Requirements:

1.  Development environment maintained

    a.  Local machine

    b.  Test environment resources as needed

2.  Test environment maintained

    a.  Run testing

Milestone \#6 - Pre-Production (Pilot)
--------------------------------------

Target date: TBD

Duration estimate: 4-8 weeks

-   Components hardening: 2-3 weeks

-   Components testing: 1-2 weeks

-   User testing & Feedback evaluation: 1-2 week

Functional Requirements:

1.  All components meet all requirements

2.  All components pass QA testing

3.  User testing and feedback evaluation

    a.  Update user guide documents

Resource Requirements:

1.  Development environment maintained

2.  Test environment maintained

    a.  Run testing

    b.  Staging production environments

3.  Production environment ready

Milestone \#7 - Production
--------------------------

Target date: TBD

Duration estimate: 2-4 weeks

Functional Requirements:

1)  Polish user guide documents

2)  Document ongoing support tasks

3)  Deploy final version

Resource Requirements:

1.  Test environment maintained

    a.  Staging production environments

2.  Production environment maintained

Project Management Plans
========================

Communication Plan
------------------

Project managers and developers will communicate via email for asynchronous communication and schedule in-person or video call meetings for real-time communication. All project management and communication documents will be stored on a Google Drive folder shared with all managers and developers.

Software Management Plan
------------------------

All software and technical design documents will be stored on a Github repository accessible to the project managers and developers. The Project Management feature of Github will be used to create, manage, and track development tasks and goals.

Resources
=========

#### Management Documents

[*Drive Folder*]

-   Meeting Agendas

-   Open Questions Doc

-   Design Slides

#### Code Management

[*PeerPresents Github Repository*]

[*PeerPresents Github Project*]

[*Twerp Repository*]

  [*hammerj@andrew.cmu.edu*]: mailto:hammerj@andrew.cmu.edu
  [*ascook@memphis.edu*]: mailto:ascook@memphis.edu
  [*blearn@andrew.cmu.edu*]: mailto:blearn@andrew.cmu.edu
  [*Drive Folder*]: https://drive.google.com/drive/folders/1hQJEi4TPYUIwRaUkKU7oiezEdbcghkbC?usp=sharing
  [*PeerPresents Github Repository*]: https://github.com/blearn-cmu/PeerPresents_2019
  [*PeerPresents Github Project*]: https://github.com/blearn-cmu/PeerPresents_2019/projects/1
  [*Twerp Repository*]: https://github.com/creativecolab/twerp
