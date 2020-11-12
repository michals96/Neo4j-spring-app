package com.example.demo.controllers;

import org.neo4j.driver.Driver;
import org.neo4j.driver.Session;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
            model.addAttribute("studiosList",session.run("MATCH (n:Studio) RETURN n LIMIT 25").list(r -> r.get("n").asNode().get("name").asString()));
        }
        return "testpage";
    }

    @GetMapping("/")
    public String getAllMovies(Model model){
        try(Session session = driver.session()){
            model.addAttribute("moviesNames",   session.run("MATCH (n:Anime) RETURN n LIMIT 25").list(r -> r.get("n").asNode().get("title").asString()));
            model.addAttribute("moviesScores",  session.run("MATCH (n:Anime) RETURN n LIMIT 25").list(r -> r.get("n").asNode().get("score").asInt()));
            model.addAttribute("moviesRelease", session.run("MATCH (n:Anime) RETURN n LIMIT 25").list(r -> r.get("n").asNode().get("released").asInt()));
        }
        return "mainPage";
    }
}
