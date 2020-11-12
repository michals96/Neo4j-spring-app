package com.example.demo.controllers;

import org.neo4j.driver.Driver;
import org.neo4j.driver.Session;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Arrays;
import java.util.List;

@Controller
public class MovieLibraryController {
    private final Driver driver;

    public MovieLibraryController(Driver driver){
        this.driver = driver;
    }

    @GetMapping(value = "/testpage")
    public String getStudios(Model model) throws Exception {
        try (Session session = driver.session()){
            model.addAttribute("testList",session.run("MATCH (n:Studio) RETURN n LIMIT 25").list(r -> r.get("n").asNode().get("name").asString()));
        }
        return "testpage";
    }

    @RequestMapping(value = "/", method = { RequestMethod.GET, RequestMethod.POST } )
    public String getAllMovies(@RequestParam(value = "participant", required = false) String participant, Model model){
        try(Session session = driver.session()){
            model.addAttribute("moviesNames",   session.run("MATCH (n:Anime) RETURN n LIMIT 25").list(r -> r.get("n").asNode().get("title").asString()));
            model.addAttribute("moviesScores",  session.run("MATCH (n:Anime) RETURN n LIMIT 25").list(r -> r.get("n").asNode().get("score").asInt()));
            model.addAttribute("moviesRelease", session.run("MATCH (n:Anime) RETURN n LIMIT 25").list(r -> r.get("n").asNode().get("released").asInt()));
        }
        System.out.println("KUPA");
        return "mainPage";
    }
}
