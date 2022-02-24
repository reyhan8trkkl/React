import React from "react";
import ChoosePicture from "./ChoosePicture";

var PICTUREPATHS = [
  "https://i.picsum.photos/id/111/200/300.jpg?hmac=bXXQTtXTex0m2Ogp23o7VFcNHAllTfE-8eSPYK2GeGM",
  "https://i.picsum.photos/id/776/200/300.jpg?hmac=BQHDuDGwB4rDL14FA6htzvzuvc0JcKn24gd4on7tp1M",
  "https://i.picsum.photos/id/953/200/300.jpg?hmac=8Bva5vDegltHxuHoyR882pbfhUI_t7iErL2SPtKrQRU",
  "https://i.picsum.photos/id/79/200/300.jpg?hmac=uqOMZrx9qlolrYp0xS5t84xjCiD_BIjfxIugTa1xjho",
];

const url = "https://api.unsplash.com/photos/"
const key = "G9948LXbQF-N3HTLNsk7o_OaNDMAbeWnlw2La8xIb_0"

class App extends React.Component {
  state = { 
    picturePath : [],
    currentPic: 0 
  };

getPicture =()=>{
  fetch(`${url}?client_id=${key}`)
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
    this.setState({picturePath: [...this.state.picturePath, element.urls.small]})
  });
  })
}

componentDidMount=()=>{
  this.getPicture();
}

  nextPic = () => {
    var current = this.state.currentPic;
    //var next = ++current % PICTUREPATHS.length;
    var next = ++current % this.state.picturePath.length;
    this.setState({ currentPic: next });
  };

  timer = null;

  handleStart = () => {
    console.log("handleStart clicked");
    if (!this.timer) {
      console.log("setInterval started");
      this.timer = setInterval(this.nextPic, 2000);
    }
  };

  handleStop = () => {
    console.log("handleStop works");
    clearInterval(this.timer);
    this.timer = null;
  };

  render() {
    //this.getPicture()
    console.log(this.state.picturePath)
    return (
      <div>
        <ChoosePicture
          start={this.handleStart}
          stop={this.handleStop}
          src={this.state.picturePath[this.state.currentPic]}
          //src={PICTUREPATHS[this.state.currentPic]}
        />
      </div>
    );
  }
}

export default App;
