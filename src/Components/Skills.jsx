import Navbar from "./Navbar.jsx"
const Skills = () => {
  const mySkills=["HTML","CSS","JavaScript","React","Express JS","Mongodb","Python"];
  return (
    <>
      <Navbar/>
      <section className="skillpage bg-dark pt-5">
        <h3 className="text-info text-center">Skills</h3>
      <ul className="d-flex gap-5 justify-content-around text-white mt-5 me-3">
        {mySkills.map((skill)=><li>{skill}</li>)}
      </ul>
      </section>
    </>
  )
}

export default Skills
