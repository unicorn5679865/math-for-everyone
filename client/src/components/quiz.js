import React from 'react';
import { useFormik } from 'formik';
import Button from "./common/Button";


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


const questionComponentByType = {
    "SelectOne": SingleSelect,
    "SelectMultiple": MultiSelect,
    "TextAnswer": TextAnswer,
};

export default function Quiz({tasks, onQuizCompleted}) {
  const form = useFormik({
    initialValues: {},
    onSubmit: onQuizCompleted
  });


  return (
    <form className='quiz flex flex-col' onSubmit={form.handleSubmit}>
      {/* <div className='score-section'>
        Вы набрали {score} баллов из {questions.length}
      </div> */}

      <div className='questions-section flex flex-col'>
        {tasks.map((question, index) => (

          <div className='question-section border rounded-md mx-2 my-4' key={index}>
            <div className='question-count'>
              <span>Вопрос {index + 1}</span>/{tasks.length}
            </div>

            {React.createElement(questionComponentByType[question.type], { question, name: index, onChange: form.handleChange })}

          </div>
        ))}
      </div>
      <Button className='m-auto' type='submit'>Получить 2 в дневник</Button>
    </form>
  );
}



