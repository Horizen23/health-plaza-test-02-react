export interface Question {
         id: number;
         question: string;
         answers: string[];
         correctAnswerIndex: number;
         score: number;
}

const questions: Question[] = [
         {
           id: 1,
           question: "What is 1 + 1?",
           answers: ["1", "2", "3", "4"],
           correctAnswerIndex: 1, // 2 is correct
           score: 10,
         },
         {
           id: 2,
           question: "What is 2 + 2?",
           answers: ["2", "4", "6", "8"],
           correctAnswerIndex: 1, // 4 is correct
           score: 10,
         },
         {
           id: 3,
           question: "What is 3 + 3?",
           answers: ["3", "6", "9", "12"],
           correctAnswerIndex: 1, // 6 is correct
           score: 10,
         },
         {
           id: 4,
           question: "What is 4 + 4?",
           answers: ["4", "8", "12", "16"],
           correctAnswerIndex: 1, // 8 is correct
           score: 10,
         },
         {
           id: 5,
           question: "What is 5 + 5?",
           answers: ["5", "10", "15", "20"],
           correctAnswerIndex: 1, // 10 is correct
           score: 10,
         },
         {
           id: 6,
           question: "What is 6 + 6?",
           answers: ["6", "12", "18", "24"],
           correctAnswerIndex: 1, // 12 is correct
           score: 10,
         },
         {
           id: 7,
           question: "What is 7 + 7?",
           answers: ["7", "14", "21", "28"],
           correctAnswerIndex: 1, // 14 is correct
           score: 10,
         },
         {
           id: 8,
           question: "What is 8 + 8?",
           answers: ["8", "16", "24", "32"],
           correctAnswerIndex: 1, // 16 is correct
           score: 10,
         },
         {
           id: 9,
           question: "What is 9 + 9?",
           answers: ["9", "18", "27", "36"],
           correctAnswerIndex: 1, // 18 is correct
           score: 10,
         },
         {
           id: 10,
           question: "What is 10 + 10?",
           answers: ["10", "20", "30", "40"],
           correctAnswerIndex: 1, // 20 is correct
           score: 10,
         },
         {
           id: 11,
           question: "What is 11 + 11?",
           answers: ["11", "22", "33", "44"],
           correctAnswerIndex: 1, // 22 is correct
           score: 10,
         },
         {
           id: 12,
           question: "What is 12 + 12?",
           answers: ["12", "24", "36", "48"],
           correctAnswerIndex: 1, // 24 is correct
           score: 10,
         },
         {
           id: 13,
           question: "What is 13 + 13?",
           answers: ["13", "26", "39", "52"],
           correctAnswerIndex: 1, // 26 is correct
           score: 10,
         },
         {
           id: 14,
           question: "What is 14 + 14?",
           answers: ["14", "28", "42", "56"],
           correctAnswerIndex: 1, // 28 is correct
           score: 10,
         },
         {
           id: 15,
           question: "What is 15 + 15?",
           answers: ["15", "30", "45", "60"],
           correctAnswerIndex: 1, // 30 is correct
           score: 10,
         },
         {
           id: 16,
           question: "What is 16 + 16?",
           answers: ["16", "32", "48", "64"],
           correctAnswerIndex: 1, // 32 is correct
           score: 10,
         },
         {
           id: 17,
           question: "What is 17 + 17?",
           answers: ["17", "34", "51", "68"],
           correctAnswerIndex: 1, // 34 is correct
           score: 10,
         },
         {
           id: 18,
           question: "What is 18 + 18?",
           answers: ["18", "36", "54", "72"],
           correctAnswerIndex: 1, // 36 is correct
           score: 10,
         },
         {
           id: 19,
           question: "What is 19 + 19?",
           answers: ["19", "38", "57", "76"],
           correctAnswerIndex: 1, // 38 is correct
           score: 10,
         },
         {
           id: 20,
           question: "What is 20 + 20?",
           answers: ["20", "40", "60", "80"],
           correctAnswerIndex: 1, // 40 is correct
           score: 10,
         },
       ];

const shuffleArray = (array: any[]) => {
         for (let i = array.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [array[i], array[j]] = [array[j], array[i]];
         }
         return array;
};

export const getQuestions = (): Question[] => {
         const questionsWithShuffledAnswers = questions.map((question) => {
                  const originalAnswers = [...question.answers];
                  const shuffledAnswers = shuffleArray([...question.answers]);
                  const correctAnswerIndex = shuffledAnswers.indexOf(originalAnswers[question.correctAnswerIndex]);

                  return {
                           ...question,
                           answers: shuffledAnswers,
                           correctAnswerIndex,
                  };
         });

         return shuffleArray(questionsWithShuffledAnswers);
};
