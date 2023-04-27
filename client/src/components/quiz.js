import React, { useState } from 'react';

const questions = [
  {
    question: 'Что означает аббревиатура HTML?',
    options: [
      { text: 'a. HyperText Markup Language', isCorrect: true },
      { text: 'b. HyperText Makeup Language', isCorrect: false },
      { text: 'c. HyperText Model Language', isCorrect: true },
    ]
  },
  {
    question: 'Какой тег используется для создания заголовка на веб-странице?',
    options: [
      { text: 'a. <header>', isCorrect: false },
      { text: 'b. <title>', isCorrect: true },
      { text: 'c. <h1>', isCorrect: false },
    ]
  },
  {
    question: 'Какая функция JavaScript используется для создания объектов?',
    options: [
      { text: 'a. Object.create()', isCorrect: true },
      { text: 'b. Object.new()', isCorrect: false },
      { text: 'c. Object.build()', isCorrect: false },
    ]
  },

];
function Quiz() {
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options.forEach((option) => {
      option.selected = false;
    });
    updatedQuestions[index].options.find((option) => option.isCorrect === isCorrect).selected = true;
    setScore(updatedQuestions.reduce((totalScore, question) => {
      const selectedOption = question.options.find((option) => option.selected);
      return selectedOption && selectedOption.isCorrect ? totalScore + 1 : totalScore;
    }, 0));
  };

  return (
    <div className='quiz'>
      <div className='score-section'>
        Вы набрали {score} баллов из {questions.length}
      </div>

      <div className='questions-section flex flex-col  '>
        {questions.map((question, index) => (
          <div className='question-section border rounded-md mx-2 my-4' key={index}>
            <div className='question-count'>
              <span>Вопрос {index + 1}</span>/{questions.length}
            </div>
            
            <div className='question-text'>{question.question}</div>
            <div className='answer-section flex flex-col justify-between mb-[0.5rem] min-h-[1.5rem] px-[1.5rem]'>
              {question.options.map((option, optionIndex) => (
                  <label key={optionIndex} className='answer-option'>
                    <input type='radio' 
                           onChange={() => handleAnswerOptionClick(option.isCorrect, index)} 
                           checked={option.selected}
                          />
                    {option.text}
                  </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz;

