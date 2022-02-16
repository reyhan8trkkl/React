import React from 'react';
import { Select } from './Select';
import { Name } from './Name';

export class App extends React.Component {
  
  constructor() {
    super()
  
    this.state = {
       name:'',
    }
  }
  changeName=(param) =>{
    this.setState({name:param})
  }
  render() {

    return (
      <div>
        <Select changeName={this.changeName} />
        <Name isim={this.state.name} />
      </div>
    );
  }
}

