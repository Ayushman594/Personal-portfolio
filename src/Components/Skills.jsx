import Navbar from "./Navbar.jsx"
const Skills = () => {
  const mySkills=[{
    type:"Frontend",
    skills:["HTML","CSS","Bootstrap","JavaScript","React"]
  },{
    type:"Backend",
    skills:["Node JS","Express JS","Python"]
  },{
    type:"Database",
    skills:["MySQL","Mongodb"]
  },{
    type:"Other Tools",
    skills:["git","github","VS Code"]
  },{
    type:"Soft Skills",
    skills:["Time Management","Adaptability","Problem Solving"]
  }];
  return (
    <>
      <Navbar/>
      <section className="skillpage bg-dark pt-5">
        <h3 className="text-info text-center">Skills</h3>
      <div className="skill-container d-flex flex-row justify-content-around mt-4">  
      {mySkills.map((data)=>{
        return (
          <>
           <div className="d-flex flex-column">
             <h4 className="text-light">{data.type}</h4>
             <ul className="d-flex flex-column justify-content-around text-white">
                {data.skills.map((skill,index)=><li key={index}>{skill}</li>)}
             </ul>
             </div>
          </>
        )
      })
    }
    </div>
      </section>
    </>
  )
}

export default Skills
