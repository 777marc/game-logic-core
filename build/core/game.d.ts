export declare const generateGamecode: () => string;
export declare const getQuestions: () => {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}[];
