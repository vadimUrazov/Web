package com.example.lab21;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GameController {

    @GetMapping(value = "/game")
    public String game() {
        return "game";
    }

    @GetMapping(value = "/rules")
    public String rule() {
        return "rules";
    }

    @GetMapping(value = "/index")
    public String index() {
        return "index";
    }

}