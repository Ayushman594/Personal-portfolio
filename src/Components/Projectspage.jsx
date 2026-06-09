import Navbar from "./Navbar"
const Projectspage = () => {
    let projectsdata=[{
        name:"To-Do List",
        description:"A simple to-do list application built with HTML,CSS and JavaScript. It allows users to add, edit, and delete tasks, helping them stay organized and manage their daily activities efficiently.",
        technologies:["JavaScript","HTML","CSS"],
        link:"https://ayushman594.github.io/To-Do-list-/"
    },{
        name:"Basic Calculator",
        description:"A basic calculator application developed using HTML,CSS and JavaScript. It provides functionalities for addition, subtraction, multiplication, and division, allowing users to perform simple calculations with an intuitive interface.",
        technologies:["JavaScript","HTML","CSS"],
        link:"https://ayushman594.github.io/Basic-calculator-/"
    },{
        name:"Tic Tac Toe App",
        description:"A two player Tic Tac Toe game created by using HTML, CSS and JavaScript where one select between X and O and other person get assigned a value opposite to first player selection and they can start playing",
        technologies:["HTML","JavaScript","CSS"],
        link:"https://ayushman594.github.io/Tic-Tac-Toe-Game/"
    }]
  return (
    <>
      <Navbar />
      <section className="projectspage bg-dark text-light">
        <h3 className="text-center text-info pt-5">Projects</h3>
        {projectsdata.map((project,index)=>{
            return (
                <div key={index} className="m-auto p-5">
                    <h4 className="text-warning">{index + 1}. {project.name}</h4>
                    <p className="text-justify mt-3">{project.description}</p>
                    <p className="mt-3">Technologies Used: {project.technologies.join(", ")}</p>
                    <a href={project.link} className="btn btn-primary" target="_blank">View Project</a>
                </div>
            )
        })}
      </section>
    </>
  )
}

export default Projectspage
