package com.ashishtomar.resultpedia.services;

import com.ashishtomar.resultpedia.models.Student;

import java.util.List;

public interface IStudentService {

    List<Student> getAllStudents();
    Student createStudent(Student student);

}
