import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { newStudentReducer, studentReducer } from './reducers/studentReducer';
import { courseReducer, newCourseReducer } from './reducers/courseReducer';
import { resultReducer, newResultReducer } from './reducers/resultReducer';
import { userReducer } from './reducers/userReducer';


const reducer = combineReducers({
  students: studentReducer,
  newStudent: newStudentReducer,

  courses: courseReducer,
  newCourse: newCourseReducer,

  results: resultReducer,
  newResult: newResultReducer,

  user: userReducer,
});


let preloadedState = {
  
};


const store = configureStore({
  reducer, preloadedState,
});

export default store;