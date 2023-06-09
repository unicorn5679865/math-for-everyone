import React,  {useEffect} from 'react';
import { useFormik } from 'formik';
import Button from "./common/Button";
import { useNavigate } from "react-router";


function SingleSelect ({question, ...inputProps}) {
  return (
    <>
      <div className='question-text'>{question.question}</div>
      <div className='answer-section flex flex-col justify-between mb-[0.5rem] min-h-[1.5rem] px-[1.5rem]'>
        {question.options.map((option, optionIndex) => (
            <label key={optionIndex} className='label--radio'>
              <input 
                className='radio'
                name={question._id}
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
    <div className='question-text'></div>
      <div className='answer-section flex flex-col justify-between mb-[0.5rem] min-h-[1.5rem] px-[1.5rem]'>
        {question.options.map((option, optionIndex) => (
          <label key={optionIndex} className='label--checkbox'>
            <input
                className='checkbox'
                type='checkbox'
                name={question._id}
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
            className='text-input block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2'
            type='text'
            name={question._id}
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

export default function Quiz({tasks, onQuizCompleted, userResults, oneAttempt}) {
  const form = useFormik({
    initialValues: {},
    onSubmit: onQuizCompleted
  });
  const navigate = useNavigate();

  useEffect (() => { 
    if ( typeof  window ?. MathJax !== "undefined" ){ 
      window . MathJax . typeset () 
    } 
  },[]);

  const getQuestionBgClass = (questionId) => {
    if (!userResults) return 'bg-white';

    return userResults[questionId] ? 'bg-green-50' : 'bg-red-50';
  };

  return (
    <form className='quiz flex flex-col p-3' onSubmit={form.handleSubmit}>
      <div className='questions-section flex flex-col gap-4 items-center w-full'>
        {tasks.map((question, index) => (
          <div className={`w-full block max-w-lg p-6 ${getQuestionBgClass(question._id)} border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`} key={index}>

            {React.createElement(questionComponentByType[question.type], { question, onChange: form.handleChange })}

          </div>
        ))}
      </div>
      {!(oneAttempt && userResults) ? <Button className='m-auto mt-4' type='submit'>Получить оценку</Button> : <Button className='m-auto mt-4' type='submit' onClick={() => navigate(`/knowledge-control`)}>Вернуться </Button>}
    </form>
  );
}



