import React, { useState } from 'react';
import { useFormik } from 'formik';

const questionsInitial = [
  {
    question: 'Что означает аббревиатура HTML?',
    type: "SingleSelect",
    options: [
      { text: 'a. HyperText Markup Language', value: "mssmsm" },
      { text: 'b. HyperText Makeup Language', value: "1"},
      { text: 'c. HyperText Model Language',  value: "2" },
    ],
    correctAnswer: "mssmsm"
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
  const [questions, setQuestions] = useState(questionsInitial.map(el => {
    return {
      ...el,
      options: el.options.map( option => ({...option, selected: false}) )
    }
  }));

  // {0: "", 1: "",}
  const form = useFormik({
    initialValues: {}
  });

console.log(form.values);


  const handleAnswerOptionClick = (option) => {
    const updatedQuestions = [...questions];

    option.selected = true;

    setQuestions(updatedQuestions);


    // updatedQuestions[index].options.forEach((option) => {
    //   option.selected = false;
    // });

    // updatedQuestions[index].options.find((option) => option.isCorrect === isCorrect).selected = true;

    // setScore(updatedQuestions.reduce((totalScore, question) => {
    //   const selectedOption = question.options.find((option) => option.selected);
    //   return selectedOption && selectedOption.isCorrect ? totalScore + 1 : totalScore;
    // }, 0));
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
                    <input 
                        type='radio' 
                        name={index}
                        value={option.value}
                        onChange={form.handleChange}
                    />
                    {option.text}
                  </label>
              ))}
            </div>
{/* 
           {if(question.type === "SelectOne") return <SelectOneAnswer /> } */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quiz;

