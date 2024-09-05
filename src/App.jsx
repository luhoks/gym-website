// App.jsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ClassDetail from "./pages/Classes/ClassDetail.jsx";
import Classes from './pages/Classes/Classes.jsx';
import Coaches from './pages/CoachesProfile/Coaches.jsx';
import CoachProfile from './pages/CoachesProfile/Coaches_Profile.jsx';
import Facilities from "./pages/Facilities/Facilities.jsx";
import Home from './pages/Home.jsx';
import Login from './pages/Login/LoginModal.jsx';
import Membership from './pages/Membership/Membership.jsx';
import ActivePlan from './pages/Profile/Active_Plan.jsx';
import Bookings from './pages/Profile/Bookings.jsx';
import CoachesHistory from './pages/Profile/CoachesHistory.jsx';
import ServicesHistory from './pages/Profile/ServicesHistory.jsx';
import Register from './pages/Registration/Registration.jsx';
import ServicesPage from './pages/Services/Services.jsx';
import ServicesPage1 from './pages/Services/ServicesPage1.jsx';
import ServicesPage2 from './pages/Services/ServicesPage2.jsx';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/class/:classId" element={<ClassDetail />} />
          <Route path="/services" element={<ServicesPage />} /> 
          <Route path="/services-page-1" element={<ServicesPage1 />} />
          <Route path="/services-page-2" element={<ServicesPage2 />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/coach/:id" element={<CoachProfile />} /> 
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/active-plan" element={<ActivePlan />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/coaches-history" element={<CoachesHistory/>}/>
          <Route path="/services-history" element={<ServicesHistory/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
