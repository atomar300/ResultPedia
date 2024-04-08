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



    @GetMapping("/results")
    public ResponseEntity<List<Result>> getAllResults(){

        List<Result> results = resultService.getAllResults();

        return new ResponseEntity<>(results, HttpStatus.OK);
    }


}
