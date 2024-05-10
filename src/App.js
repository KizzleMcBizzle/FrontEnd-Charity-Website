import React from 'react';
import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import Home from './Home';
import SignIn from './SignIn';
import Footer from "./Footer";
import FilterSideBar from "./FilterSideBar";
import AdminNav from "./AdminNav";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">
                <Navbar2 />
                <Home />
            </Route>
            <Route path="/signin">
                <Navbar2 />
                <SignIn />
            </Route>
            <Route path="/donor-register">
                <Navbar2 />
                <DonorReg />
            </Route>
            <Route path="/org-register">
                <Navbar2 />
                <OrgReg />
            </Route>
            <Route exact path="/admin/changepass">
                <AdminNav />
              <AdminPassFetch />
            </Route>
            <Route exact path ="/admin/">
              <AdminNav />
              <Home /> {/*will be changed*/}
            </Route>
            <Route exact path ="/admin/profile">
              <AdminNav />
              <AdminFetch />
            </Route>
            <Route exact path= "/admin/req/donors">
                <AdminNav />
              <DonorReqFetch/>
            </Route>
            <Route exact path = "/admin/req/donors/:id">
                <AdminNav />
              <PendingDonor />
            </Route>
            <Route exact path= "/admin/req/orgs">
              <AdminNav />
              <OrgReqFetch />
            </Route>
            <Route exact path= "/admin/view/orgs">
              <AdminNav />
              <ViewOrgsFetch />
            </Route>
            <Route exact path= "/admin/view/donors">
              <AdminNav />
              <ViewDonorsFetch />
            </Route>
            <Route exact path = "/admin/req/orgs/:id">
              <AdminNav />
              <PendingOrg />
            </Route>
            <Route exact path = "/admin/view/orgs/:id">
              <AdminNav />
              <OrgDetails flag={true}/>
            </Route>

            <Route exact path="/donor">
                <Navbar />
              <Donor></Donor>
          </Route>
            <Route path="/blood">
                <Navbar />
              <Blood></Blood>
          </Route>
          <Route path='/medSupp'>
              <Navbar />
            <MedSupp></MedSupp>
          </Route>
          <Route path='/medCase'>
              <Navbar />
            <MedCase></MedCase>
          </Route>
          <Route path='/medication'>
              <Navbar />
            <Medication></Medication>
          </Route>
          <Route path='/teaching'>
              <Navbar />
            <Teaching></Teaching>
          </Route>
          <Route path="/medSupps/:id">
              <Navbar />
              <MedSuppDetails />
            </Route>
           <Route path="/medCases/:id">
               <Navbar />
              <MedCaseDetails />
           </Route>
            <Route path="/bloods/:id">
                <Navbar />
              <BloodDetails></BloodDetails>
            </Route>
            <Route path="/medications/:id">
                <Navbar />
              <MedicationDetails></MedicationDetails>
            </Route>
            <Route path="/teachings/:id">
                <Navbar />
              <TeachingDetails></TeachingDetails>
            </Route>

            
          </Switch>
        </div>
        <Footer />
    </Router>
  );
}

export default App;