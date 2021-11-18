import './InfoPanel.css'
import React from 'react'
import GitHubLogo from './assets/GitHubMarkLogo.png'
import LinkedInLogo from './assets/LinkedInLogo.png'

const Description = (props) => {
  const githuburlExists = !!props.githuburl
  const linkedinurlExists = !!props.linkedinurl
  const hasAnyURLs = githuburlExists || linkedinurlExists
  return (
    <section className='InfoPanel'>
      <section className='Description'>
        <p>Hello. My name is <span>{props.name}</span>.</p>
        <p>I am a <span>software engineer</span> with a passion for <span>social justice</span>.</p>
        {hasAnyURLs && <p className='LinkParagraph'>Here are some of my <span>other links</span>:</p>}
        {githuburlExists &&
          // if githuburl exists, render GitHub logo link
          <a href={props.githuburl} target='_blank' rel='noopener noreferrer'>
            <img
              src={GitHubLogo}
              alt='GitHub link'
              className='GitHubLink'
            />
          </a>}
        {linkedinurlExists &&
          // if linkedinurl exists, render LinkedIn logo link
          <a href={props.linkedinurl} target='_blank' rel='noopener noreferrer'>
            <img
              src={LinkedInLogo}
              alt='LinkedIn link'
              className='LinkedInLink'
            />
          </a>}
        <p>And here is my <span>blog</span>.</p>
      </section>
    </section>
  )
}

export default Description
