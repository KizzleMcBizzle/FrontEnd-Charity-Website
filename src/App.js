import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import Home from './Home';
import SignIn from './SignIn';
import Footer from "./Footer";
import AdminNav from "./AdminNav";

function App() {
  return (
      <div className="App">
        <AdminNav />
        <div className="content">
            <Home />
        </div>
          <Footer />
      </div>
  );
}

export default App;