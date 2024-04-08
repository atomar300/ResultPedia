package com.ashishtomar.resultpedia.services;

import com.ashishtomar.resultpedia.models.Student;

import java.util.List;

public interface IStudentService {

    List<Student> getAllStudents();
    Student getStudentById(String id);
    Student createStudent(Student student);
    Student updateStudent(String id, Student student);
    void deleteStudent(String id);

}
