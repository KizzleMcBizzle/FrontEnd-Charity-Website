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
import OrgReq from './OrgReq.js';

function App() {
  return (
    <Router>
      <div className="App">
        <AdminNav />
        <div className="content">
          <Switch>
            <Route exact path = "/admin/orgReq">
              <OrgReq />
            </Route>
            <Route path="/admin/orgReq/:id">
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