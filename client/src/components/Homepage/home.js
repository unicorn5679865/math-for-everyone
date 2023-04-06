import React from "react"
import Header from "../header"


class Home extends React.Component {
    helpText = "Help text"
    render() {
        return (
            <div className="name">
                <Header title="Шапка сайта"/>
                <h1></h1>
            </div>
        )

    }
}

export default Home