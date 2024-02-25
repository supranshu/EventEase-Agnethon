# EventEase

EventEase is a web application designed to manage events within a college setting. It provides a platform for different roles to collaborate in organizing and participating in events.

## Roles and Responsibilities

There are six roles within EventEase:

1. **Dean**
2. **Principal**
3. **Head of Department (HOD)**
4. **Mentor**
5. **Committee Member**
6. **Student**

### Responsibilities:

#### Dean, Principal, HOD, Mentor:
- Approve events uploaded by Committee Members.
- Ensure events meet the necessary criteria and standards.
- Provide final approval for events to be displayed on the platform.

#### Committee Member:
- Upload events to the platform.
- Monitor the status of uploaded events.
- Collaborate with other roles to ensure events meet the required standards.

#### Student:
- View and register for events approved by Dean, Principal, HOD, and Mentor.
- Participate in approved events and activities.

## Project Implementation

[Watch project implementation video](https://www.youtube.com/watch?v=aHJsCIMO8fg)

## Implementations Till Now

- **Total 8 Components 🔥**
- **Dashboard Customization**: Users are presented with a tailored dashboard based on their role.
- **Approval Workflow**: Streamlined event approval process involving Dean, Principal, HOD, and Mentor.
- **User Authentication**: Secure login and authentication system supporting different user roles.
- **Password Encryption**: All passwords are encrypted using SHA-256 for enhanced security.
- **Frontend Optimization**: Frontend enhancements implemented as per feedback.
- **Responsive Design**: Mobile-friendly interface ensuring accessibility across devices.

## Technologies Used

- **Frontend**: Angular
- **Backend**: Spring Boot
- **Database**: MySQL
- **Other Tools**: Material Design components, HttpClient for API communication

### Frontend

EventEase utilizes the Angular framework for frontend development.

### Backend

The backend is built on the Spring Boot framework.

### Database

MySQL is used as the database management system to store event data, including tables for events, users, and roles.

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. **Set up the backend:**
   - Navigate to the `EventEase` directory.
   - Configure your MySQL database settings in the `application.properties` file.
   - Run the Spring Boot application.
3. **Set up the frontend:**
   - Navigate to the `EventEaseFront` directory.
   - Install dependencies using `npm install`.
   - Start the Angular development server using `ng serve`.
4. Access the application in your web browser at `http://localhost:4200`.
