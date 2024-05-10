import React from 'react';
import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import Home from './Home';
import SignIn from './SignIn';
import Footer from "./Footer";
import FilterSideBar from "./FilterSideBar";
import AdminNav from "./AdminNav";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import OrgReqFetch from './OrgReqFetch';
import PendingOrg from './PendingOrg';
import PendingDonor from './PendingDonor';
import DonorReqFetch from './DonorReqFetch.js';
import AdminProfile from './AdminProfile.js';
import AdminFetch from './AdminFetch.js';
import ChangePassword from './ChangePassword.js';
import AdminPassFetch from './AdminPassFetch.js'
import DonorReg from './DonorReg';
import OrgReg from './OrgReg';
import ViewOrgsFetch from './ViewOrgsFetch.js';
import ViewDonorsFetch from './ViewDonorsFetch.js';
import OrgDetails from './OrgDetails.js';
import Medication from './Medication';
import MedSupp from './MedSupp';
import Teaching from './Teaching';
import Blood from './Blood';
import MedCase from './MedCase';
import MedSuppDetails from './MedSuppDetails';
import BloodDetails from './BloodDetails';
import MedicationDetails from './MedicationDetails';
import TeachingDetails from './TeachingDetails';
import MedCaseDetails from './MedCaseDetails';
import Donor from './Donor';
import ToyDonReqFetch from './ToyDonReqFetch.js'
import FoodDonReqFetch from './FoodDonReqFetch.js';
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute.js";
import DonorPrivateRoute from './DonorPrivateRoute.js'


function App() {
  return (
  <Router>
    <div className="App">
    <AuthProvider>
    <Routes>
        <Route path="/" element={<>
          <Navbar2 />
          <Home />
        </>} />
        <Route path="/signin" element={<>
          <Navbar2 />
          <SignIn />
        </>} />
        <Route path="/donor-register" element={<>
          <Navbar2 />
          <DonorReg />
        </>} />
        <Route path="/org-register" element={<>
          <Navbar2 />
          <OrgReg />
        </>} />

        
        <Route element={<PrivateRoute />}>
          <Route path="/admin/*" element={<>
            <AdminNav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="changepass" element={<AdminPassFetch />} />
              <Route path="profile" element={<AdminFetch />} />
              <Route path="req/*" element={<>
                <Routes>
                  <Route path="donors" element={<DonorReqFetch />} />
                  <Route path="donors/:id" element={<PendingDonor />} />
                  <Route path="orgs" element={<OrgReqFetch />} />
                  <Route path="orgs/:id" element={<PendingOrg />} />
                </Routes>
              </>} />
            <Route path="view/*" element={<>
              <Routes>
                <Route path="orgs" element={<ViewOrgsFetch />} />
                <Route path="donors" element={<ViewDonorsFetch />} />
                <Route path="orgs/:id" element={<OrgDetails flag={true} />} />
              </Routes>
            </>} />
          </Routes>
        </>} />
        </ Route>
        <Route path="/donor" element={<>
          <Navbar />
          <Donor />
        </>} />
        <Route path="/blood" element={<>
          <Navbar />
          <Blood />
        </>} />
        <Route path="/medSupp" element={<>
          <Navbar />
          <MedSupp />
        </>} />
        <Route path="/medCase" element={<>
          <Navbar />
          <MedCase />
        </>} />
        <Route path="/medication" element={<>
          <Navbar />
          <Medication />
        </>} />
        <Route path="/teaching" element={<>
          <Navbar />
          <Teaching />
        </>} />
        <Route path="/medSupps/:id" element={<MedSuppDetails />} />
        <Route path="/medCases/:id" element={<MedCaseDetails />} />
        <Route path="/bloods/:id" element={<BloodDetails />} />
        <Route path="/medications/:id" element={<MedicationDetails />} />
        <Route path="/teachings/:id" element={<TeachingDetails />} />
        <Route path="/toys" element={<ToyDonReqFetch />} />
        <Route path="/food" element={<FoodDonReqFetch />} />



        <Route element={<DonorPrivateRoute />}>
          <Route path="/donor" element={<>
            <Navbar />
            <Donor />
          </>} />
          <Route path="/blood" element={<>
            <Navbar />
            <Blood />
          </>} />
          <Route path="/medSupp" element={<>
            <Navbar />
            <MedSupp />
          </>} />
          <Route path="/medCase" element={<>
            <Navbar />
            <MedCase />
          </>} />
          <Route path="/medication" element={<>
            <Navbar />
            <Medication />
          </>} />
          <Route path="/teaching" element={<>
            <Navbar />
            <Teaching />
          </>} />
          <Route path="/medSupps/:id" element={<MedSuppDetails />} />
          <Route path="/medCases/:id" element={<MedCaseDetails />} />
          <Route path="/bloods/:id" element={<BloodDetails />} />
          <Route path="/medications/:id" element={<MedicationDetails />} />
          <Route path="/teachings/:id" element={<TeachingDetails />} />
          <Route path="/toys" element={<ToyDonReqFetch />} />
        </Route>



      </Routes>
    </AuthProvider>
    </div>
  <Footer />
  </Router>

  );
}

export default App;