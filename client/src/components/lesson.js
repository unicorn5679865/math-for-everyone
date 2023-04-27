import React, {useState} from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import pdfFile from './pdf/kursovaya_rabota.pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useParams } from "react-router";
import { useQuery } from "../hooks/useQuery";

import Quiz from "./quiz";

export default function Lesson() {

    let { lessonId } = useParams();
    const { data } = useQuery(`/lessons/${lessonId}`);
    console.log(data);

    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
    
            <div className="sm:flex justify-start overflow-hidden mb-3"> 
                <div className="theory flex flex-col mx-10  sm:w-6/12 h-[700px] text-left">
                    <div className="mt-3 py-4  ">
                        <p className="text-xl font-bold underline underline-offset-4">Теория</p>
                    </div>
                    <div className="scrollbar border-2 border-solid h-[650px] overflow-y-scroll  ">
                        <Document className="w-full" file={data?.link} onLoadSuccess={onDocumentLoadSuccess}>
                        
                        {
                            Array(numPages).fill().map((_, i) =>
                                <Page key={i} pageNumber={i+1} />
                            )
                            
                        }
                            
                        </Document>  
                    </div>
                </div>
                <div className="practice flex flex-col mx-10 sm:mr-10 sm:w-6/12 h-[700px] text-left">
                    <div className="mt-3 py-4 border-solid ">
                        <p className="text-xl font-bold underline underline-offset-4">Практика</p>
                    </div>
                    <div className="scrollbar border-2 border-solid h-[650px] overflow-y-scroll  ">
                        <Quiz/>
                    </div>
                </div>

            </div>
        
    )
}