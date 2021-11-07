import './Description.css'
import React from 'react'

class Description extends React.Component {
  render () {
    return (
      <section className='Description'>
        <p>Hello. My name is <span>{this.props.name}</span>.</p>
        <p>And this is my <span>blog</span>.</p>
      </section>
    )
  }
}

export default Description
