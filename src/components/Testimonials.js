import React, { Component } from 'react';
import '../styles/Testimonials.css'


class Testimonials extends Component {


  state = {
    counter: 0,
    currentT: []
  }

  text = ["Welcome", "Hi", "Sup dude",
  `this is a really long testimony about cool stuff. Work with us and we will make
   you the most successful version of yourself there could be.
   Taco bell is kinda sweet sometimes. One time I ate a jalapeno.`
  ];
  
  currentT = [];
  counter = 0;

  change = () => {
    this.currentT = this.text[this.counter];
    console.log(this.currentT);
    this.setState({
      counter: this.counter,
      currentT: this.currentT
    })
    this.counter++;
    if (this.counter >= this.text.length) {
      this.counter = 0;
    }
  }


  render () {

    console.log(this.state);

    setTimeout(this.change, 5000)

    return (
      <div className='testimony'>
        <div className='currentT'>
          <p>{this.state.currentT}</p>
        </div>
      </div>
    )
  }
}

export default Testimonials;
