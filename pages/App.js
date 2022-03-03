import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Routes
} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Messages from './components/Messages';
import NotFound from './components/NotFound';
import Message from './components/Message';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
  
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='menu'>

          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/messages'>Messages</Link>
            </li>

          </ul>
        </div>
        <div className='App-intro'>
          <Routes>
            <Route path='/about' element={<About/>} ></Route>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/messages' element={<Messages/>}></Route>
            <Route path='messages/:id' element={<Message/>}></Route>
            <Route path="*" element={<NotFound/>} />
            
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
