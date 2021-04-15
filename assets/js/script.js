// WHEN the user selects a checkbox
// THEN the score of that checkbox is logged
// WHEN the user submits the questionnaire
// THEN the scores from each answer are added together
// WHEN the final score is counted
// THEN the user is given a page related to their final score

// function showResultsPage

// function getResult

// let score = 0;

function getScoreForEachQuestion() {
    if('#' === 1) {
        score = 1;
    } else if('#' === 2) {
        score = 2;
    } else if ('#' === 3) {
        score = 3;
    } else if ('#' === 4) {
        score = 4;
    } else if ('#' === 5) {
        score = 5;
    };
}

const checkboxes = {
    checkboxes: [
        {
            "type": "boolean",
            "name": "none",
            "label": "",
            "score": 1
        },
        {
            "type": "boolean",
            "name": "some",
            "label": "",
            "score": 2
        },
        {
            "type": "boolean",
            "name": "lots",
            "label": "",
            "score": 3
        },
        {
            "type": "boolean",
            "name": "most",
            "label": "",
            "score": 4
        },
        {
            "type": "boolean",
            "name": "all",
            "label": "",
            "score": 5
        },
    ]
}


json = { 
    questions: [
    {
        type: "radiogroup",
        name: "q1",
        title: "In the past four weeks, how often did you feel worn out for no real reason?",
        choices: [
            "None of the time", "A little of the time", "Some of the time", "Most of the time", "All of the time"
        ],
    },
    {
        type: "radiogroup",
        name: "q1",
        title: "In the past four weeks, how often did you feel worn out for no real reason?",
        choices: [
            "None of the time", "A little of the time", "Some of the time", "Most of the time", "All of the time"
        ],
    },
    {
        type: "radiogroup",
        name: "q1",
        title: "In the past four weeks, how often did you feel worn out for no real reason?",
        choices: [
            "None of the time", "A little of the time", "Some of the time", "Most of the time", "All of the time"
        ],
    },
    {
        type: "radiogroup",
        name: "q1",
        title: "In the past four weeks, how often did you feel worn out for no real reason?",
        choices: [
            "None of the time", "A little of the time", "Some of the time", "Most of the time", "All of the time"
        ],
    }
]
}

window.survey = new Survey.Model(json);
$("#surveyElement").Survey({model: survey});



$(document).ready(function(){
    $("button").click(function(){
      $.getJSON("assets\js\my_mind_matters_k10-2021-04-15.json", function(result){
        $.each(result, function(i, field){
          $("div").append(field + " ");
        });
      });
    });
  });