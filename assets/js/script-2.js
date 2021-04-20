// WHEN the user selects a checkbox
// THEN the score of that checkbox is logged
// WHEN the user submits the questionnaire
// THEN the scores from each answer are added together
// WHEN the final score is counted
// THEN the user is given a page related to their final score

// function showResultsPage

// function getResult

// let score = 0;

// function getScoreForEachQuestion() {
//     if('#' === 1) {
//         score = 1;
//     } else if('#' === 2) {
//         score = 2;
//     } else if ('#' === 3) {
//         score = 3;
//     } else if ('#' === 4) {
//         score = 4;
//     } else if ('#' === 5) {
//         score = 5;
//     };
// }

// const checkboxes = {
//     checkboxes: [
//         {
//             "type": "boolean",
//             "name": "none",
//             "label": "",
//             "score": 1
//         },
//         {
//             "type": "boolean",
//             "name": "some",
//             "label": "",
//             "score": 2
//         },
//         {
//             "type": "boolean",
//             "name": "lots",
//             "label": "",
//             "score": 3
//         },
//         {
//             "type": "boolean",
//             "name": "most",
//             "label": "",
//             "score": 4
//         },
//         {
//             "type": "boolean",
//             "name": "all",
//             "label": "",
//             "score": 5
//         },
//     ]
// }


// json = { 
//     questions: [
//     {
//         type: "radiogroup",
//         name: "q1",
//         title: "In the past four weeks, how often did you feel worn out for no real reason?",
//         choices: [
//             "None of the time", "A little of the time", "Some of the time", "Most of the time", "All of the time"
//         ],
//     },
//     {
//         type: "radiogroup",
//         name: "q1",
//         title: "In the past four weeks, how often did you feel worn out for no real reason?",
//         choices: [
//             "None of the time", "A little of the time", "Some of the time", "Most of the time", "All of the time"
//         ],
//     },
//     {
//         type: "radiogroup",
//         name: "q1",
//         title: "In the past four weeks, how often did you feel worn out for no real reason?",
//         choices: [
//             "None of the time", "A little of the time", "Some of the time", "Most of the time", "All of the time"
//         ],
//     },
//     {
//         type: "radiogroup",
//         name: "q1",
//         title: "In the past four weeks, how often did you feel worn out for no real reason?",
//         choices: [
//             "None of the time", "A little of the time", "Some of the time", "Most of the time", "All of the time"
//         ],
//     }
// ]
// }








// window.survey = new Survey.Model(json);
// $("#surveyElement").Survey({model: survey});

// $.getJSON('my_mind_matters_k10-2021-04-15.json', function(data) {
//     //do stuff with your data here
//     console.log("working...")
// });










// Survey
//     .StylesManager
//     .applyTheme("modern");

// var json = {
//     surveyId: '965A93D6-689D-400F-977C-8861C9C81F30'
// };

// window.survey = new Survey.Model(json);

// survey
//     .onComplete
//     .add(function (result) {
//         document
//             .querySelector('#surveyResult')
//             .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
//     });

// $("#surveyElement").Survey({model: survey});









// Survey
//     .StylesManager
//     .applyTheme("modern");

// var json = {
//     questions: [
//         {
//             type: "file",
//             title: "my_mind_matters_k10-2021-04-15.json",
//             name: "files",
//             storeDataAsText: false,
//             allowMultiple: true,
//             maxSize: 102400
//         }
//     ]
// };

// window.survey = new Survey.Model(json);

// survey
//     .onComplete
//     .add(function (result) {
//         document
//             .querySelector('#surveyResult')
//             .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
//     });

// survey
//     .onClearFiles
//     .add(function (survey, options) {
//         // Code to remove files stored on your service
//         // SurveyJS Service doesn't allow to remove files
//         options.callback("success");
//     });


// Survey.StylesManager.applyTheme("modern");

// var surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"checkbox","name":"question1","choices":["item1","item2","item3"]}]}]}

// function sendDataToServer(survey) {
//     //send Ajax request to your web server.
//     alert("The results are:" + JSON.stringify(survey.data));
// }

// var survey = new Survey.Model(surveyJSON);
// $("#surveyContainer").Survey({
//     model: survey,
//     onComplete: sendDataToServer
// });



// var staticUrl = 'https://api.checkboxau.com/v1/blmccavanagh'

// $.getJSON(staticUrl, function(data) {
//     console.log("hi");
// });



// linked to the tailwind ref
$("button").click(function(){
    $.ajax({url: "https://api.checkboxau.com/v1/blmccavanagh", success: function(result){
      $("#div1").html(result);
      console.log("click")
    }});
  });