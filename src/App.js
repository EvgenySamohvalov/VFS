import React from 'react';
// import logo from './logo.svg';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.scss';
import NavBar from './components/NavBar/NavBar';
import {Header} from './components/Header/Header';
// pages
import {Home} from './pages/Home/Home'
import {News} from './pages/News/News'
import {Contest} from './pages/Contest/Contest'
import {Sponsors} from './pages/Sponsors/Sponsors'
import {Neighbourhoods} from './pages/Neighbourhoods/Neighbourhoods'
import {Committees} from './pages/Committees/Committees'
import {Federation} from './pages/Federation/Federation'
import {Gallery} from './pages/Gallery/Gallery'
import {Contacts} from './pages/Contacts/Contacts'


function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App__content">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/news" component={News}/>
        <Route path="/contest" component={Contest}/>
        <Route path="/sponsors" component={Sponsors}/>
        <Route path="/neighbourhoods" component={Neighbourhoods}/>
        <Route path="/committees" component={Committees}/>
        <Route path="/federation" component={Federation}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/contacts" component={Contacts}/>
      </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
