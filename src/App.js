import Navbar2 from './Navbar2';
import Navbar from './Navbar';
import Home from './Home';
import SignIn from './SignIn';
import Footer from "./Footer";
import FilterSideBar from "./FilterSideBar";
import AdminNav from "./AdminNav";

function App() {
  return (
      <div className="App">
        <Navbar2 />
          <FilterSideBar />
          <Footer />
      </div>
  );
}

export default App;