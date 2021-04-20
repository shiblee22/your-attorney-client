import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookAppointment from './components/UserDashboard/BookAppointment/BookAppointment';
import AddReview from './components/UserDashboard/AddReview/AddReview';
import UsersAppointment from './components/UserDashboard/UsersAppointment/UsersAppointment';
import AddService from './components/AdminDashboard/AddService/AddService';
import AppointmentList from './components/AdminDashboard/AppointmentList/AppointmentList';
import ManageAppontment from './components/AdminDashboard/ManageService/ManageService';
import ManageService from './components/AdminDashboard/ManageService/ManageService';
import AddAdmin from './components/AdminDashboard/AddAdmin/AddAdmin';
import Booking from './components/UserDashboard/Booking/Booking';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/bookAppointment/:id">
            <BookAppointment></BookAppointment>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/appointments">
            <UsersAppointment></UsersAppointment>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/appointmentList">
            <AppointmentList></AppointmentList>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/booking">
            <Booking></Booking>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
