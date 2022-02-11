import React from 'react';
import { MyPoems } from './MyPoems';
import {styleSheet} from '../styles';

const divStyle = {
  background: styleSheet.background
};

export class App extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <h1 style={{color: styleSheet.color}}>Welcome To My Page</h1>
        <MyPoems />
        <footer style={
        {color: styleSheet.color,
        fontSize: styleSheet.fontSize}}>THANK YOU FOR VISITING!</footer>
      </div>
    );
  }
}
