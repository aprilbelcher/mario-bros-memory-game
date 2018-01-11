import React from 'react'
import Image from './Image'

class Homepage extends React.Component {
  state = {
    images: [],
    arr: this.reshuffle(),
    score: 0,
    totalNum: [],
    highestScore: 0
  }
  

  reshuffle() {
    var arr = []
    while(arr.length < 16){
        var randomnumber = Math.floor(Math.random()*16) + 1;
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    return arr
  }

 

  handleClick(imagenum) {
    if (!this.state.totalNum.includes(imagenum)) {
      this.state.totalNum.push(imagenum)
      this.setState({score: this.state.score + 1})
      this.setState({arr: this.reshuffle(), images: []})
    }
    else {
      this.setState({arr: this.reshuffle(), images: [], score:0, totalNum:[]})
    }
    if (this.state.score >= this.state.highestScore) {
        this.setState({highestScore: this.state.score})
      }
  }

  render() {
    console.time("benchmark");
    for (let i=0; i<this.state.arr.length; i++) {
      let Characters = require(`../img/mario${this.state.arr[i]}.png`)
      this.state.images.push(<Image func={this.handleClick.bind(this, this.state.arr[i])} background={Characters} key={this.state.arr[i]}/>)
    }
  console.timeEnd("benchmark");

  return(
    <div>
      <h1>Super Mario Bros Memory Game</h1>
      <h3> Total score: {this.state.score}</h3>
      <h3> Highest score: {this.state.highestScore} </h3>
      <div> {this.state.images} </div>
    </div>
    )
  }
}

export default Homepage;
