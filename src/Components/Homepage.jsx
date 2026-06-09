import Nav from './Navbar.jsx'
import photo from '../images/photo.JPG'
const Homepage = () => {
  return (
    <>
      <Nav />
      <section className="homepage bg-dark pt-5 d-flex justify-content-center align-items-center gap-5">
       <div className="ps-5">
        <img src={photo} className="rounded-circle" alt="myphoto" loading='lazy'/>
       </div>
       <div>
         <h2 className="text-light">Hi. My Name is Ayushman Choudhary</h2>
         <p className="fs-5 text-light">I am an aspiring web developer</p>
       </div>
      </section>
    </>
  )
}

export default Homepage