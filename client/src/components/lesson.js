import React, {useState} from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import pdfFile from './pdf/kursovaya_rabota.pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';



export default function Lesson() {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    return (
        
            <div className="flex justify-start overflow-hidden mb-3">
                <div className="theory flex flex-col mx-10  w-6/12 h-[700px] text-left">
                    <div className="mt-3 py-4 border-b-2 border-solid">
                        <p className="text-xl font-bold underline underline-offset-4">Теория</p>
                    </div>
                    <div className="scrollbar border-2 border-solid h-[650px] overflow-y-scroll  ">
                        <Document className="w-full" file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                        
                        {
                            Array(numPages).fill().map((_, i) =>(
                                <Page pageNumber={i+1} />
                            ))
                            
                        }
                            
                        </Document>  
                    </div>
                </div>
                <div className="practice flex flex-col mr-10 w-6/12 h-[700px] text-left">
                    <div className="mt-3 py-4 border-b-2 border-solid ">
                        <p className="text-xl font-bold underline underline-offset-4">Практика</p>
                    </div>
                    <div className="scrollbar border-2 border-solid h-[650px] overflow-y-scroll  ">
                        <Document className="w-full"file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                        {
                            Array(numPages).fill().map((_, i) =>(
                                <Page pageNumber={i+1} />
                            ))
                        }
                        </Document>  
                    </div>
                </div>

            </div>
        
    )
}