import './TitleBar.css'
import Banner from '../Banner/Banner'
import InfoPanel from '../InfoPanel/InfoPanel'
import Face from '../Face/Face'

function TitleBar () {
  return (
    <header className='TitleBar'>
      <Banner />
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
