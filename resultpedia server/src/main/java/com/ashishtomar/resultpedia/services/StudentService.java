package com.ashishtomar.resultpedia.services;


import com.ashishtomar.resultpedia.exceptions.StudentNotFoundException;
import com.ashishtomar.resultpedia.models.Result;
import com.ashishtomar.resultpedia.models.Student;
import com.ashishtomar.resultpedia.repositories.ResultRepository;
import com.ashishtomar.resultpedia.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService implements IStudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private ResultRepository resultRepository;

    @Override
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(String id){
        Optional<Student> studentData = studentRepository.findById(id);
        if (!studentData.isPresent()){
            throw new StudentNotFoundException("No Student found with the given ID: " + id);
        }
        return studentData.get();
    }

    @Override
    public Student createStudent(Student student){
        if (studentRepository.existsByStudentNumber(student.getStudentNumber())){
            throw new RuntimeException("Student Number already exists: " + student.getStudentNumber());
        }
        return studentRepository.save(student);
    }


    @Override
    public Student updateStudent(String id, Student student){
        student.setId(id);
        return studentRepository.save(student);
    }

    @Override
    public void deleteStudent(String id){
        List<Result> resultsToBeDeleted = resultRepository.findByStudent(getStudentById(id));
        resultRepository.deleteAll(resultsToBeDeleted);
        studentRepository.deleteById(id);
    }

}
