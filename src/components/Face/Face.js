import './Face.css'
import faceImage from './assets/Face.jpg'

function Face () {
  return (
    <section className='Face'>
      <img
        src={faceImage}
        alt="Author's face"
      />
    </section>
  )
};

export default Face
