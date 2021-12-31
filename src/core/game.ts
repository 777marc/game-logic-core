export const generateGamecode = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 9;
  let randomStr = "";

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    randomStr += characters[randomNum];
  }
  console.log(randomStr);
  return randomStr;
};

export const getQuestions = () => {
  const questions = [
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which of the following was not one of &quot;The Magnificent Seven&quot;?",
      correct_answer: "Clint Eastwood",
      incorrect_answers: ["Steve McQueen", "Charles Bronson", "Robert Vaughn"],
    },
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which of the following movies was not based on a novel by Stephen King? ",
      correct_answer: "The Thing",
      incorrect_answers: ["Carrie", "Misery", "The Green Mile"],
    },
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "medium",
      question:
        "What is the name of the dog that played Toto in the 1939 film &quot;The Wizard of Oz&quot;?",
      correct_answer: "Terry",
      incorrect_answers: ["Tommy", "Teddy", "Toto"],
    },
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "medium",
      question:
        "What is the name of the Artificial Intelligence system in the 1983 film, &quot;WarGames&quot;?",
      correct_answer: "War Operation Plan Response",
      incorrect_answers: [
        "Self Evolving Thought Helix",
        "Master Control Program",
        "West Campus Analog Computer",
      ],
    },
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "medium",
      question: "Who played Sgt. Gordon Elias in &#039;Platoon&#039; (1986)?",
      correct_answer: "Willem Dafoe",
      incorrect_answers: ["Charlie Sheen", "Matt Damon", "Johnny Depp"],
    },
  ];

  return questions;
};
