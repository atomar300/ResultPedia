package com.ashishtomar.resultpedia.controllers;


import com.ashishtomar.resultpedia.models.Student;
import com.ashishtomar.resultpedia.services.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService studentService;



    @PostMapping("/student/add")
    public ResponseEntity<String> createStudent(@Valid @RequestBody Student student) {

        studentService.createStudent(student);

        return new ResponseEntity<>("Student was added successfully!", HttpStatus.OK);
    }



    @GetMapping("/students")
    public ResponseEntity<List<Student>> getAllStudents(){

        List<Student> students = studentService.getAllStudents();

        return new ResponseEntity<>(students, HttpStatus.OK);
    }

}
