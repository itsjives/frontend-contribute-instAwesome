import React, { Component } from 'react'

import '../styles/Testimonials.css'

class TestimonialsWMap extends React.Component {

  state = {
    renderedThings: [],
    itemsRendered: 0
  }

  render() {
    console.log(this)
    return (
      <div>{
        this.state.renderedThings.map((testimony, i) =>
          <div key={i}>{testimony.content}</div>
        )
      }</div>
    )
  }

  resetState = () => {
    this.setState({
      renderedThings: [],
      itemsRendered: 0,
    })
  }

  componentDidMount = () => {
    this.scheduleNextUpdate()
  }

  scheduleNextUpdate = () => {
      this.timer = setTimeout(this.updateRenderedThings, 5000)
  }


  updateRenderedThings = () => {
    const itemsRendered = this.state.itemsRendered
    const updatedState = {
      renderedThings: this.state.renderedThings.concat(this.props.testimonies[this.state.itemsRendered]),
      itemsRendered: itemsRendered + 1,
    }
    this.setState(updatedState)
      if (updatedState.itemsRendered < this.props.testimonies.length) {
        this.scheduleNextUpdate();

    } else {
      this.resetState();
      this.scheduleNextUpdate();
    }


    }

    componentWillUnmount = () => {
      clearTimeout(this.timer);
    }


}

export default TestimonialsWMap
