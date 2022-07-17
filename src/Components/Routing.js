import React from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import LoginRegister from "./LoginRegister"
import MoviesList from "./MoviesList"
import Header from "./Header"
import CompanyInfo from "./CompanyInfo"

const Routing =()=>{


    return(
        <BrowserRouter>
            <Header/>
            <Switch>
               
                <Route exact path="/" component={LoginRegister} />
                <Route  path="/movies" component={MoviesList} />
                <Route  path="/companyinfo" component={CompanyInfo} />
            </Switch>
        
        </BrowserRouter>
    )
}

export default Routing