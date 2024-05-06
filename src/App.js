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

function App() {
  return (
    <Router>
      <div className="App">
        <AdminNav />
        <div className="content">
          <Switch>
            <Route exact path="/admin/changepass">
              <AdminPassFetch />
            </Route>
            <Route exact path ="/admin/profile">
              <AdminFetch />
            </Route>
            <Route exact path= "/admin/req/donors">
              <FilterSideBar title="Donors Requests" page = {<DonorReqFetch />}/>
            </Route>
            <Route exact path = "/admin/req/donors/:id">
              <PendingDonor />
            </Route>
            <Route exact path= "/admin/req/orgs">
              <FilterSideBar title="Organizations Requests" page = {<OrgReqFetch />}/>
            </Route>
            <Route exact path = "/admin/req/orgs/:id">
              <PendingOrg />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;