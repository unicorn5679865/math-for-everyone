
import React from "react";
import Header from "../../components/header"


export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full bg-white">
        <Header />
        <div className="text-center ">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-600 sm:text-5xl">У-упс, что-то пошло не так...</h1>
          <img src="img/error.jpg" alt="error gif" className="m-auto" width= "40%" />
          <div className="flex items-center justify-center gap-x-10">
            <a
              href="#"
              className="rounded-md bg-primary-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-orange"
            >
              Домой
            </a>
            <a href="#" className="text-sm font-semibold text-gray-600">
              Поддержка <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <p className="mt-6 text-2xl leading-7 text-gray-600">Пожалуйста, попробуйте позже или обратитесь в службу поддержки, если проблема сохраняется.</p>
          
        </div>
      </main>
    </>
  )
}
