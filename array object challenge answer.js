const quiz = [
    {
        "subject": "Sport",
        "quiz": [
            {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        ]
    },
    {
        "subject": "Math",
        "quiz": [
            {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        ]
    }
];

quiz.forEach((subjectdata, Index) => {
    console.log(`Subject: ${subjectdata.subject}`);

    subjectdata.quiz.forEach((questionObj, questionIndex) => {
        console.log(`Question ${questionIndex + 1}: ${questionObj.question}`);
        console.log(`Answer: ${questionObj.answer}`);
        console.log("-----------------------");
    });
});
