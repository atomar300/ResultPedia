package com.ashishtomar.resultpedia.services;

import com.ashishtomar.resultpedia.dto.ResultDTO;
import com.ashishtomar.resultpedia.exceptions.CourseNotFoundException;
import com.ashishtomar.resultpedia.exceptions.ResultNotFoundException;
import com.ashishtomar.resultpedia.exceptions.StudentNotFoundException;
import com.ashishtomar.resultpedia.models.Course;
import com.ashishtomar.resultpedia.models.Result;
import com.ashishtomar.resultpedia.models.Student;
import com.ashishtomar.resultpedia.repositories.CourseRepository;
import com.ashishtomar.resultpedia.repositories.ResultRepository;
import com.ashishtomar.resultpedia.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResultService implements IResultService {

    @Autowired
    private ResultRepository resultRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;


    public void createResult(ResultDTO resultDTO) {

        // Retrieving student
        Optional<Student> studentData = studentRepository.findById(resultDTO.getStudentId());
        if (!studentData.isPresent()) {
            throw new StudentNotFoundException("No Student found with the given ID: " + resultDTO.getStudentId());
        }
        Student student = studentData.get();

        // Retrieving course
        Optional<Course> courseDate = courseRepository.findById(resultDTO.getCourseId());
        if (!courseDate.isPresent()) {
            throw new CourseNotFoundException("No Course found with the given ID: " + resultDTO.getCourseId());
        }
        Course course = courseDate.get();

        if (resultRepository.existsByStudentAndCourse(student, course)){
            Result result = resultRepository.findByStudentAndCourse(student, course);
            result.setGrade(resultDTO.getGrade());
            resultRepository.save(result);
        }

        else{
            // Creating Result Object
            Result result = new Result(student, course, resultDTO.getGrade());

            // Saving the result to database
            resultRepository.save(result);
        }

        // Calculating the 'Course Average' of the Course
        List<Result> results = resultRepository.findByCourse(course);
        int count = 0;
        double totalPercentage = 0;
        double courseAverage = 0;

        for (Result r : results) {
            String grade = r.getGrade();
            if (grade.equals("A")) {
                totalPercentage += 100;
            } else if (grade.equals("B")) {
                totalPercentage += 90;
            } else if (grade.equals("C")) {
                totalPercentage += 80;
            } else if (grade.equals("D")) {
                totalPercentage += 70;
            } else {
                totalPercentage += 60;
            }
            count++;
        }

        courseAverage = totalPercentage / count;

        // Setting the calculated course average
        course.setCourseAverage(courseAverage);

        // Saving the course
        courseRepository.save(course);
    }


    public void updateResult(String id, ResultDTO resultDTO) {

        // Retrieving result
        Result _result = getResultById(id);

        // Retrieving student
        Optional<Student> studentData = studentRepository.findById(resultDTO.getStudentId());
        if (!studentData.isPresent()) {
            throw new StudentNotFoundException("No Student found with the given ID: " + resultDTO.getStudentId());
        }
        Student student = studentData.get();

        // Retrieving course
        Optional<Course> courseDate = courseRepository.findById(resultDTO.getCourseId());
        if (!courseDate.isPresent()) {
            throw new CourseNotFoundException("No Course found with the given ID: " + resultDTO.getCourseId());
        }
        Course course = courseDate.get();

        // Creating Result Object
        Result result = new Result(student, course, resultDTO.getGrade());

        // setting the id so that course is only updated
        result.setId(id);

        // Saving the result to database
        resultRepository.save(result);

        // Checking if there was a change in the grades
        if (!resultDTO.getGrade().equals(_result.getGrade())) {
            // Calculating the 'Course Average' of the Course
            List<Result> results = resultRepository.findByCourse(course);
            int count = 0;
            double totalPercentage = 0;
            double courseAverage = 0;

            for (Result r : results) {
                String grade = r.getGrade();
                if (grade.equals("A")) {
                    totalPercentage += 100;
                } else if (grade.equals("B")) {
                    totalPercentage += 90;
                } else if (grade.equals("C")) {
                    totalPercentage += 80;
                } else if (grade.equals("D")) {
                    totalPercentage += 70;
                } else {
                    totalPercentage += 60;
                }
                count++;
            }

            courseAverage = totalPercentage / count;

            // Setting the calculated course average
            course.setCourseAverage(courseAverage);

            // Saving the course
            courseRepository.save(course);
        }
    }


    @Override
    public void deleteResult(String id) {

        Course course = getResultById(id).getCourse();

        resultRepository.deleteById(id);

        // Re-Calculating the 'Course Average' of the Course
        List<Result> results = resultRepository.findByCourse(course);
        int count = 0;
        double totalPercentage = 0;
        double courseAverage = 0;

        for (Result r : results) {
            String grade = r.getGrade();
            if (grade.equals("A")) {
                totalPercentage += 100;
            } else if (grade.equals("B")) {
                totalPercentage += 90;
            } else if (grade.equals("C")) {
                totalPercentage += 80;
            } else if (grade.equals("D")) {
                totalPercentage += 70;
            } else {
                totalPercentage += 60;
            }
            count++;
        }

        courseAverage = totalPercentage / count;

        // Setting the calculated course average
        course.setCourseAverage(courseAverage);

        // Saving the course
        courseRepository.save(course);
    }


    @Override
    public Result getResultById(String id) {
        Optional<Result> resultData = resultRepository.findById(id);
        if (!resultData.isPresent()) {
            throw new ResultNotFoundException("No Result found with the given ID: " + id);
        }
        return resultData.get();
    }


    @Override
    public List<Result> getAllResults() {
        return resultRepository.findAll();
    }

}
