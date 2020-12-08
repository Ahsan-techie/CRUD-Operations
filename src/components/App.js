import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import StreamList from './streams/streamList'
import StreamShow from './streams/streamShow'
import StreamDelete from './streams/streamDelete'
import StreamEdit from './streams/streamEdit'
import StreamCreate from './streams/streamCreate'
import history from './history'
import Header from './Header'
function App() {
    return (
        <div className="ui container">
            <Router history={history}>
            <div>
            <Header />
            <Switch>
              <Route path="/" exact component={StreamList}></Route>
              <Route path="/streams/new" exact component={StreamCreate}></Route>
              <Route path="/streams/edit/:id" exact component={StreamEdit}></Route> 
              <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
              <Route path="/streams/:id" exact component={StreamShow}></Route> 
            </Switch>
        </div>
            </Router>
        </div>
    )
}

export default App
