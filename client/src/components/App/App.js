import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Polls from '../Polls/Polls';
import AddPoll from '../AddPoll/AddPoll';
import DeletePoll from '../DeletePoll/DeletePoll';
import EditPoll from '../EditPoll/EditPoll';
import States from '../States/States';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <div className="body">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/polls" component={Polls}/>
                        <Route exact path="/polls/add" component={AddPoll}/>
                        <Route exact path="/polls/delete" component={DeletePoll}/>
                        <Route exact path="/polls/edit" component={EditPoll}/>
                        <Route exact path="/states/" component={States}/>
                    </Switch>
                </div>
                <Footer />
            </Router>
            
        </div>
    );
}

export default App;