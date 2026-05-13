# Railway Management System

A MERN stack based Railway Management System where users can log in, view trains, and book tickets.

## Features

- User registration and login.
- View available trains.
- Book tickets for a selected train.
- Select passenger details, age, journey date, and class.
- Booking confirmation flow.
- Redux-based state management.
- React Router based navigation.

## Tech Stack

### Frontend
- React
- React Router DOM
- Redux
- Redux Thunk
- HTML
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```text
client/
  src/
    components/
      User/
        Login.js
        Signup.js
      Trains/
        Trains.js
        Booking.js
    actions/
    reducers/
    App.js
    index.js

server/
  models/
  routes/
  controllers/
  server.js


  Setup Instructions
1. Clone the repository
git clone <your-repo-link>
cd Railway-Management-MERN
2. Install backend dependencies
cd server
npm install
3. Install frontend dependencies
cd ../client
npm install
4. Configure environment variables
Create a .env file inside the server folder and add your MongoDB connection string.
MONGO_URI=your_mongodb_connection_string
PORT=5000
5. Start the backend
cd server
npm start
6. Start the frontend
cd ../client
npm start
Routes
/ or /login - Login page
/signup - Signup page
/trains - Train list page
/home - Train list page
/booking/:id - Booking page
Login Flow
After successful login, the app redirects to /trains.
Notes
The app does not include a landing page.
React Router should be wrapped only once in index.js.
App.js should contain only route definitions.
Common Issues
Module not found error
Make sure component paths are exact and match file names.
Router inside another Router
Do not wrap BrowserRouter inside App.js if it already exists in index.js.
React 17 vs React 18
Use ReactDOM.render for React 17, and createRoot only for React 18.
Future Improvements
Add seat selection.
Add payment integration.
Add booking history.
Add admin panel for train management.