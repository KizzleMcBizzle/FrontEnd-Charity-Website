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
import Teaching from './Teaching';
import Blood from './Blood';
import MedCase from './MedCase';
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
import BookDonReqFetch from './BookDonReqFetch.js';
import ViewBookDetails from './ViewBookDetails.js';
import DonorDetails from './DonorDetails.js'
import ViewToyDetails from './ViewToyDetails.js';
import ViewFoodDetails from './ViewFoodDetails.js';
import ClothesDonationList from './ClothesDonationList.js';
import ClothesFetch from './ClothesFetch.js';
import ViewClothesDetails from './ViewClothesDetails.js'
import DonationDetailsForBloodDonation from './DonationDetailsForBloodDonation'
import DonationDetailsForClothes from './DonationDetailsForClothes'
import SchoolStationaryFetch from './SchoolStationaryFetch.js';
import SchoolStationaryList from './SchoolStationaryList'
import SchoolStationaryDetails from './SchoolStationaryDetails'
import VehicleBookingForm from './VehicleBookingForm.js'
import OrgProfileFetch from './OrgProfileFetch'
import OrgPassFetch from './OrgPassFetch';
import MedEquip from './MedEquip.js';
import MedEquipDetails from './MedEquipDetails.js';
import MedDevice from './MedDevice.js';
import MedDeviceDetails from './MedDeviceDetails.js';
import Notification from './Notification.js'
import BookingForm from './BookingForm'
import DeliveryApp from './DeliveryApp';
import DonorProfileFetch from './DonorProfileFetch.js'



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
                <Route path="donors/:id" element={<DonorDetails />} />
              </Routes>
            </>} />
          </Routes>
        </>} />
        </ Route>
            
        {/*<Route element={<DonorPrivateRoute />}>*/}
        <Route path="/donor/*" element={<>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="profile" element={<DonorProfileFetch />} />
              <Route path="donor" element={<Donor/>} />
              <Route path="blood" element={<Blood />} />
              <Route path="bloods/:id" element={<BloodDetails />} />
              <Route path="medEquip" element={<MedEquip />} />
              <Route path="medEquip/:id" element={<MedEquipDetails />} />
              <Route path="medDevice" element={<MedDevice />} />
              <Route path="medDevices/:id" element={<MedDeviceDetails />} />
              <Route path="medCase" element={<MedCase />} />
              <Route path="medCases/:id" element={<MedCaseDetails />} />
              <Route path="medication" element={<Medication />} />
              <Route path="medication/:id" element={<MedicationDetails />} />
              <Route path="teaching" element={<Teaching />} />
              <Route path="teaching/:id" element={<TeachingDetails />} />
              <Route path="books" element={ <BookDonReqFetch/>} />
              <Route path="books/:id" element={<ViewBookDetails/>} />
              <Route path="toys" element={<ToyDonReqFetch/>} />
              <Route path="toys/:id" element={<ViewToyDetails/>} />
              <Route path="food" element={<FoodDonReqFetch/>} />
              <Route path="food/:id" element={<ViewFoodDetails/>} />
              <Route path="clothes" element={<ClothesFetch/>} />
              <Route path="clothes/:id" element={<ViewClothesDetails />} />
              <Route path="schoolStationary" element={<SchoolStationaryFetch />} />
              <Route path="schoolStationary/:id" element={<SchoolStationaryDetails />} />

              <Route path="view/*" element={<>
                <Routes>
                  <Route path="orgs" element={<ViewOrgsFetch />} />
                  <Route path="orgs/:id" element={<OrgDetails flag={false} />} />
                </Routes>
              </>} />

            </Routes>
            </>} />
            
        {/*</Route>*/}

        <Route path="/org/*" element={<>
          
          <Routes>
          <Route path="/" element={<OrgProfileFetch />} />
          <Route path="changepass" element={<OrgPassFetch />} />
          
          </Routes>
          
        </>} />


            
        



      </Routes>
    </AuthProvider>
    </div>
  <Footer />
  </Router>

  );
}

export default App;