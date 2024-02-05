import { Route, Routes } from 'react-router-dom';
import './App.css'
import Progress from "./main-pages/Progress";
import JobsAndInternships from "./main-pages/jobs-internships";
import AnalyticsAndReporting from "./main-pages/analytics-reporting";
import AlumniNetwork from "./main-pages/alumni-network";
import ResourceLibrary from "./main-pages/resource-library";
import Profile from "./main-pages/Profile";
import Home from './pages/home';
import LogIn from './pages/logIn';

function App() {
  
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<LogIn/>}></Route>
        <Route path='/home/*' element={<Home/>}></Route>
        <Route path='/profile/*' element={<Profile/>} className=""></Route>
        <Route path='/progress/*' element={<Progress/>} className=""></Route>
        <Route path='/jobs/*' element={<JobsAndInternships/>} className=""></Route>
        <Route path='/analytics/*' element={<AnalyticsAndReporting/>} className=""></Route>
        <Route path='/alumni-network/*' element={<AlumniNetwork/>} className=""></Route>
        <Route path='/resource-library/*' element={<ResourceLibrary/>} className=""></Route>
      </Routes>
    </div>
  );
}

export default App
