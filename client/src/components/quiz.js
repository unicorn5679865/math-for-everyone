import React, { useState } from 'react';
import { Field, useFormik } from 'formik';

const questionsInitial = [
  {
    question: 'Что означает аббревиатура HTML?',
    type: "SelectOne",
    options: [
      { text: 'a. HyperText Markup Language', value: "0" },
      { text: 'b. HyperText Makeup Language', value: "1"},
      { text: 'c. HyperText Model Language',  value: "2" },
    ],
    correctAnswer: "0"
  },

  // {
  //   question: 'Какой тег используется для создания заголовка на веб-странице?',
  //   type: "EnterAnswer",
  //   correctAnswer: "<title>"
  // },
  {
    question: 'Какая функция JavaScript используется для создания объектов?',
    type: "SelectFew",
    options: [
      { text: 'a. Object.create()', value: "0" },
      { text: 'b. Object.new()', value: "1"},
      { text: 'c. Object.build()', value: "2" },
    ],
    correctAnswer: ["1", "2"]
  },

];

function SingleSelect ({question, index}) {
  
  // {0: "", 1: "",}
  const form = useFormik({
    initialValues: {}
  });
  console.log(form.values);

  return (
    <>
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
    </>
  )
}

function ManySelect ({question, index}) {
  
  // {0: "", 1: "",}
  const form = useFormik({
    initialValues: {}
  });
  console.log(form.values);

  return (
    <>
    <div className='question-text'>{question.question}</div>
      <div className='answer-section flex flex-col justify-between mb-[0.5rem] min-h-[1.5rem] px-[1.5rem]'>
        {question.options.map((option, optionIndex) => (
          <label key={optionIndex} className='answer-option'>
            <input 
                type='checkbox' 
                name={index}
                value={option.value}
                onChange={form.handleChange}
            />
            {option.text}
          </label>
      ))}
    </div>
    </>
  )
}


function EnterAnswer ({question, index}) {
  const form = useFormik({
    initialValues: {}
  });
  console.log(form.values);
  return (
    <>
    <div className='question-text'>{question.question}</div>
            <div className='answer-section flex flex-col justify-between mb-[0.5rem] min-h-[1.5rem] px-[1.5rem]'>
                  <label className='answer-option'>
                    <input 
                        type='text' 
                        name={index}
                        value={form.values.answer}
                        onChange={form.handleChange}
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

          {/* <EnterAnswer question={question} index={index}/>*/}
          {/* <SingleSelect question={question} index={index}/> */}
          <ManySelect question={question} index={index}/>

       {/* {questions.forEach((question) => { if(question.type === "SelectOne") return <SingleSelect question={question} index={index}/>
        if(question.type === "SelectFew") return <ManySelect question={question} index={index}/>
        if(question.type === "EnterAnswer") return <EnterAnswer question={question} index={index}/> 
        })} */}
          </div>
        ))}
      </div>
    </div>
  );
}



