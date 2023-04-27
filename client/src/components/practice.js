import React, {useEffect, useState} from "react" 


const questData = [
                    {id: 1,
                    questText: "fjfjfjfj fkkjfnj", 
                    answerOptions: [{que_options: "Which color", selected: false},
                                    {que_options: "dfvf", selected: false}, 
                                    {que_options:"hiuiuh", selected: false}
                                ], 
                    correctAnswer: "dfvf"
                    }, 
                    {id: 2,
                    questText: "fjfjfjfj fkkjfnj popa", 
                    answerOptions: ["Which color", "dfvf", "lifn"], 
                    correctAnswer: "lifn"
                    },
                    {id: 3,
                    questText: "fjfjfjfj fkkjfnj", 
                    answerOptions: ["Which color", "dfvf", "hghfkd"], 
                    correctAnswer: "hghfkd" 
                    }, ];

export default function Practice() {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         questData: questData,
    //     }
    // }

    // const  [questions, setQuestions] = useState([]);

    // useEffect(() => {
    //     setQuestions(questData)
    // }, []);


    return (
       <div className="practice">
            <div className="quizz ">
                {
                     this.state.questData.map((item, index) =>
                        <div className="qeestion-section flex flex-col border rounded-md mx-2 my-4">
                            <div className="question-text">
                                <h3>{item.questText}</h3>
                            </div>
                            {
                                item.answerOptions.map((ans, index_ans) => {
                                    index_ans= index_ans + 1
                                    return (
                                        <div key={index_ans} className="answer-section flex flex-col justify-between">
                                            {ans.que_options}
                                        <div className="mb-[0.5rem] block min-h-[1.5rem] px-[1.5rem] ">
                                            <input className=""
                                                key={index_ans}
                                                type={"radio"}
                                                name={item.id}
                                                id={id}
                                                value={ans.}
                                                checked={!!ans.selected}
                                                onChange={this.onInputChange}
                                                />
                                            <label
                                                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                                for={id}>
                                                    {questText}
                                            </label>
                                        </div>
                                    </div>)
                                })
                            }
                        </div>
                    )
                }
            </div>
       </div> 
    )
}
