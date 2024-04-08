package com.ashishtomar.resultpedia.controllers;

import com.ashishtomar.resultpedia.dto.ResultDTO;
import com.ashishtomar.resultpedia.models.Result;
import com.ashishtomar.resultpedia.models.Student;
import com.ashishtomar.resultpedia.services.ResultService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class ResultController {

    @Autowired
    private ResultService resultService;


    @PostMapping("/result/add")
    public ResponseEntity<String> createResult(@Valid @RequestBody ResultDTO resultDTO) {

        resultService.createResult(resultDTO);

        return new ResponseEntity<>("Result was added successfully!", HttpStatus.OK);
    }



    @PutMapping("/result/{id}")
    public ResponseEntity<String> updateResult(@PathVariable("id") String id, @Valid @RequestBody ResultDTO resultDTO) {

        resultService.updateResult(id, resultDTO);

        return new ResponseEntity<>("Result was updated successfully!", HttpStatus.OK);
    }



    @DeleteMapping("/result/{id}")
    public ResponseEntity<String> deleteResult(@PathVariable("id") String id){

        resultService.deleteResult(id);

        return new ResponseEntity<>("Result was deleted successfully!", HttpStatus.OK);
    }




    @GetMapping("/result/{id}")
    public ResponseEntity<Result> getOneResult(@PathVariable("id") String id){

        Result result = resultService.getResultById(id);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }



    @GetMapping("/results")
    public ResponseEntity<List<Result>> getAllResults(){

        List<Result> results = resultService.getAllResults();

        return new ResponseEntity<>(results, HttpStatus.OK);
    }


}
