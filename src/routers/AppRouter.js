import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import DashboardPage from '../components/DashboardPage'
import Portafolio from '../components/Portafolio'
import Items from '../components/PortafolioItems'
import Contact from '../components/Contact'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header /> 
        <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/portafolio" component={Portafolio} exact />
            <Route path="/portafolio/:id" component={Items} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
</BrowserRouter>
)

export default AppRouter