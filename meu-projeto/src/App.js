import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './componets/pages/Home';
import Contact from './componets/pages/Contact';
import Company from './componets/pages/Company';
import NewProject from './componets/pages/NewProject';



function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/newproject">New Project</Link>
      </div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
    </Routes>
  </Router>
  );
}

export default App;
