import React, { useEffect } from 'react'
import "./Courses.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from '../loader/Loader';
import toast from 'react-hot-toast';
import { clearErrors, getCourses } from '../../actions/courseAction';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle';


const Courses = () => {

    const dispatch = useDispatch();
    const { loading, courses, error } = useSelector(state => state.courses);

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }
        dispatch(getCourses());
    }, [dispatch, error])


    return (
        <div>
            {loading ? <Loader /> : (
                <div>
                    <PageTitle title="Courses" />
                    <div className='table-container'>
                        <Link className='add-link' to="/course/add">Add Course</Link >
                        <table>
                            <thead>
                                <tr id="header">
                                    <th>Course Name</th>
                                    <th>Course Code</th>
                                    <th>Course Average</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses?.map(course => (
                                    <tr key={course.id}>
                                        <td>{course.courseName}</td>
                                        <td>{course.courseCode}</td>
                                        <td>{course.courseAverage === 0 ? "Not Available Yet" : course.courseAverage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Courses