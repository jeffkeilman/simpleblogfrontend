import bannerImage from './assets/space-banner.png'
import './Banner.css'

function Banner () {
  return (
    <div className='Banner'>
      <img
        src={bannerImage}
        alt=''
      />
    </div>
  )
};

export default Banner
