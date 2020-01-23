import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Category from './Category';
import Home from './Home';
import Expenses from './Expenses';
import Expense from './Expense';

class LinkRouter extends Component {
    state = {  }
    render() { 
        return (  
            <Router>
                <Switch>
                    <Route path='/' exact ={true} component={Home} />
                    <Route path='/categories' exact ={true} component={Category} />
                    <Route path='/expenses' exact ={true} component={Expenses} />
                    <Route path='/expenses/:id' component={Expense} />
                </Switch>
            </Router>
        );   
    }
}
 
export default LinkRouter;