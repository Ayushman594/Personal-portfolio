import Navbar from "./Navbar.jsx"
const Aboutpage = () => {
  return (
    <>
      <Navbar />
      <section className="aboutpage bg-dark text-light">
        <div className="w-50 m-auto p-5">
          <h3 className="text-center text-info">About Me</h3>
        <p className="text-justify mt-3">Hi, I’m Ayushman Choudhary, a Computer Technology graduate from Priyadarshini College of Engineering.
I’m passionate about frontend development and have been actively building projects using HTML, CSS, JavaScript, and React.

I’ve developed applications like a to-do list and a quiz app where I focused on DOM manipulation, user interaction, and clean UI design. I’ve also built a portfolio using React to understand component-based architecture and state management.

Currently, I’m strengthening both my problem-solving skills and communication skills to become industry-ready.

I’m looking for an opportunity where I can contribute as a frontend developer while continuing to grow and learn in a real-world environment.</p>
        </div>
      </section>
    </>
  )
}

export default Aboutpage
