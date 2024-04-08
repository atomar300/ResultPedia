package com.ashishtomar.resultpedia.services;

import com.ashishtomar.resultpedia.models.Course;

import java.util.List;


public interface ICourseService {

    List<Course> getAllCourses();
    Course createCourse(Course course);

}
