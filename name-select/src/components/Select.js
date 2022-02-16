import React,{Component} from "react";
import { names } from "./names";
import axios from "axios";
export class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
    };
  }
 componentDidMount(){
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res)
    this.setState({names:res.data})
  })
 }
  handleChange = (e) => {
    return this.props.changeName(e.target.value);
  };

  render() {
    console.log(this.state.names)
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select id="great-names" onChange={this.handleChange}>
          {/* { }<option value="Cornelius">Cornelius</option> */}
          {this.state.names.map((item, i) => {
            return (
              <option key={item.id} value={item.name}>
                {item.name} 
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
