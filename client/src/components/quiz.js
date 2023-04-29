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

      <div className='questions-section flex flex-col gap-4 items-center w-full'>
        {tasks.map((question, index) => (

          <div className='w-full block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700' key={index}>

            {React.createElement(questionComponentByType[question.type], { question, name: index, onChange: form.handleChange })}

          </div>
        ))}
      </div>
      <Button className='m-auto my-4' type='submit'>Получить 2 в дневник</Button>
    </form>
  );
}



