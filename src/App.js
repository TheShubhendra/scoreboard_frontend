import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route path="/login/">
	  <Login/>
	</Route>
    </Switch>
    </div>
    );
}

export default App;
