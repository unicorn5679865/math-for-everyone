import React, { useState } from 'react';
import { Field, useFormik } from 'formik';

const questionsInitial = [
  {
    question: 'Что означает аббревиатура HTML?',
    type: "SelectOne",
    options: [
      { text: 'HyperText Markup Language', value: "0" },
      { text: 'HyperText Makeup Language', value: "1"},
      { text: 'HyperText Model Language',  value: "2" },
    ],
    correctAnswer: "0"
  },
  {
    question: 'Какой тег используется для создания заголовка на веб-странице?',
    type: "TextAnswer",
    correctAnswer: "<title>"
  },
  {
    question: 'Какая функция JavaScript используется для создания объектов?',
    type: "SelectMultiple",
    options: [
      { text: 'Object.create()', value: "0" },
      { text: 'Object.new()', value: "1"},
      { text: 'Object.build()', value: "2" },
    ],
    correctAnswer: ["1", "2"]
  },

];

function SingleSelect ({question, ...inputProps}) {

  return (
    <>
      <div className='question-text'>{question.question}</div>
      <div className='answer-section flex flex-col justify-between mb-[0.5rem] min-h-[1.5rem] px-[1.5rem]'>
        {question.options.map((option, optionIndex) => (
            <label key={optionIndex} className='label--radio'>
              <input 
                className='radio'
                  type='radio'
                  value={optionIndex}
                  { ...inputProps}
              />
              {option.text}
            </label>
        ))}
      </div>
    </>
  )
}

function MultiSelect ({question, ...inputProps}) {
  return (
    <>
    <div className='question-text'>{question.question}</div>
      <div className='answer-section flex flex-col justify-between mb-[0.5rem] min-h-[1.5rem] px-[1.5rem]'>
        {question.options.map((option, optionIndex) => (
          <label key={optionIndex} className='label--checkbox'>
            <input
                className='checkbox'
                type='checkbox'
                value={option.value}
                {...inputProps}
            />
            {option.text}
          </label>
      ))}
    </div>
    </>
  )
}


function TextAnswer ({question, ...inputProps}) {
console.log("12323232232");
  return (
    <>
    <div className='question-text'>{question.question}</div>
      <div className='answer-section flex flex-col justify-between mb-[0.5rem] min-h-[1.5rem] px-[1.5rem]'>
        <label className='answer-option'>
          <input
            className='text-input'
              type='text'
              {...inputProps}
          />
        </label>
      </div>   
    </> 
  )
}


export default function Quiz() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(questionsInitial.map(el => {
    return {
      ...el,
      options: el.options?.map( option => ({...option, selected: false}) )
    }
  }));
  
    // {0: "", 1: "",}
  const form = useFormik({
    initialValues: {}
  });
  // console.log(form.values);

  const questionComponentByType = {
    "SelectOne": SingleSelect,
    "SelectMultiple": MultiSelect,
    "TextAnswer": TextAnswer,
  };

  return (
    <div className='quiz'>
      <div className='score-section'>
        Вы набрали {score} баллов из {questions.length}
      </div>

      <div className='questions-section flex flex-col'>
        {questions.map((question, index) => (

          <div className='question-section border rounded-md mx-2 my-4' key={index}>
            <div className='question-count'>
              <span>Вопрос {index + 1}</span>/{questions.length}
            </div>

            {React.createElement(questionComponentByType[question.type], { question, name: index, onChange: form.handleChange })}

          </div>
        ))}
      </div>
    </div>
  );
}



