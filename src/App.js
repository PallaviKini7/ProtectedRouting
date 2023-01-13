import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/aboutus/AboutUs';
import Contact from './components/contact/Contact';
import Protected from './components/Protected';
import HomeSub from './components/contact/homesub/HomeSub';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome/>
      <Routes>
        {/* <Route path='/' element={<Protected Component={Home} />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/abt' element={<Protected Component={AboutUs} />} />
        <Route path='/cntct' element={<Contact />}>
          <Route path='/cntct/homesub' element={<HomeSub />} />
        </Route>



      </Routes>
    </div>
  );
}

export default App;
