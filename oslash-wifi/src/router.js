import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Main from './components/main'
import LookUp from './components/lookup'
import About from './components/about'
import User from './components/user'
import MoreInfo from './components/moreInfo'




export default 
         (
            <Switch>
                <Route exact path= '/' component={Main} />
                <Route path='/lookup' component={LookUp} />
                <Route path='/moreinfo' component={MoreInfo} />
                <Route path='/about' component={About} />
                <Route path='/user' component={User} />
            </Switch>
        )
