import './Description.css'
import React from 'react'

class Description extends React.Component {
  render () {
    return (
      <div className='Description'>
        <p>Hello. My name is <span>{this.props.name}</span>.</p>
        <p>And this is my <span>blog</span>.</p>
      </div>
    )
  }
}

export default Description
