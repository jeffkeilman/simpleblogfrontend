import './TitleBar.css'
import InfoPanel from '../InfoPanel/InfoPanel'
import Face from '../Face/Face'

function TitleBar () {
  return (
    <header className='TitleBar'>
      <InfoPanel
        name='Jeff Keilman'
        githuburl='https://github.com/jeffkeilman'
        linkedinurl='https://www.linkedin.com/in/jeffkeilman'
      />
      <Face />
    </header>
  )
}

export default TitleBar
