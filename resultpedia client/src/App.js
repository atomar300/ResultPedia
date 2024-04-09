import './App.css';
import Header from './components/header/Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home.js';
import Students from './components/students/Students.js';
import Courses from './components/courses/Courses.js';
import Results from './components/results/Results.js';
import Footer from './components/footer/Footer.js';
import AddStudent from './components/students/AddStudent.js';
import AddCourse from './components/courses/AddCourse.js';
import AddResult from './components/results/AddResult.js';
import { loadUser } from './actions/userAction.js';
import PrivateRoute from './components/PrivateRoute.js';
import Login from './components/user/Login.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/students" element={<Students />} />
            <Route path="/student/add" element={<AddStudent />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/add" element={<AddCourse />} />
            <Route path="/results" element={<Results />} />
            <Route path="/result/add" element={<AddResult />} />
          </Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;