package com.ashishtomar.resultpedia.services;

import com.ashishtomar.resultpedia.exceptions.CourseNotFoundException;
import com.ashishtomar.resultpedia.models.Course;
import com.ashishtomar.resultpedia.models.Result;
import com.ashishtomar.resultpedia.models.Student;
import com.ashishtomar.resultpedia.repositories.CourseRepository;
import com.ashishtomar.resultpedia.repositories.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService implements ICourseService{

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private ResultRepository resultRepository;


    @Override
    public List<Course> getAllCourses(){
        return courseRepository.findAll();
    }



    @Override
    public Course createCourse(Course course){
        return courseRepository.save(course);
    }


}
