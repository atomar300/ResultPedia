package com.ashishtomar.resultpedia.services;

import com.ashishtomar.resultpedia.dto.ResultDTO;
import com.ashishtomar.resultpedia.models.Result;

import java.util.List;

public interface IResultService {

    void createResult(ResultDTO resultDTO);
    List<Result> getAllResults();
}
