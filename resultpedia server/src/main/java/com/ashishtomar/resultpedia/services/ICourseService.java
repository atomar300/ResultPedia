package com.ashishtomar.resultpedia.services;

import com.ashishtomar.resultpedia.models.Course;

import java.util.List;


public interface ICourseService {

    List<Course> getAllCourses();
    Course getCourseById(String id);
    Course createCourse(Course course);
    Course updateCourse(String id, Course course);
    void deleteCourse(String id);

}
