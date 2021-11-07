import './Banner.css'
import bannerImage from './assets/space-banner.png'

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
