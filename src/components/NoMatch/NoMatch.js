import './NoMatch.css'
import { Link } from 'react-router-dom'

function NoMatch () {
  return (
    <section className='NoMatch'>
      <p>404! We didn't find anything at that link!</p>
      <p className='HomeLink'><Link to='/'>Take me home!</Link></p>
    </section>
  )
}

export default NoMatch
