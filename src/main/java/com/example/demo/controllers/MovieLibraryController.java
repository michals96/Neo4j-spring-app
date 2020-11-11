package com.example.demo.controllers;

import org.neo4j.driver.Driver;
import org.neo4j.driver.Session;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MovieLibraryController {
    private final Driver driver;

    public MovieLibraryController(Driver driver){
        this.driver = driver;
    }

    @GetMapping(value = "/movieLibrary", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<String> getActors() throws Exception {
        try (Session session = driver.session()){
            return session.run("MATCH (n:Actor) RETURN n LIMIT 25").list(r -> r.get("n").asNode().get("name").asString());
        }
    }
}
