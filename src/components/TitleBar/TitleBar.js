import './TitleBar.css'
import Banner from '../Banner/Banner'
import Description from '../Description/Description'
import Face from '../Face/Face'

function TitleBar () {
  return (
    <header className='TitleBar'>
      <Banner />
      <Description name='Jeff Keilman' />
      <Face />
    </header>
  )
};

export default TitleBar
