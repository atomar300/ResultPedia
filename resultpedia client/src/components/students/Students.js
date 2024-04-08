import React, { useEffect } from 'react'
import "./Students.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getStudents } from '../../actions/studentAction';
import Loader from '../loader/Loader';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle';


const Students = () => {

    const dispatch = useDispatch();
    const { loading, students, error } = useSelector(state => state.students);


    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }
        dispatch(getStudents());
    }, [dispatch, error])


    return (
        <div>
            {loading ? <Loader /> : (
                <div>
                    <PageTitle title="Students" />
                    <div className='table-container'>
                        <Link className='add-link' to="/student/add">Add Student</Link>
                        <table>
                            <thead>
                                <tr id="header">
                                    <th>First name</th>
                                    <th>Family name</th>
                                    <th>Student Number</th>
                                    <th>Date of Birth</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students?.map(student => (
                                    <tr key={student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.familyName}</td>
                                        <td>{student.studentNumber}</td>
                                        <td>{student.birthDate}</td>
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

export default Students