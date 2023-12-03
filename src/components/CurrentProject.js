import React, {Component} from "react";
import PROJECTS from "../data/current";
import Project from "./Project";

class Projects extends Component {
    render(){
        return(
                <section className="latest section">
                    <div className="section-inner">
                        <h2 className="heading">Recent Projects </h2>
                        <div className="content">
                        {
                            PROJECTS.map(project => {
                                    return(
                                        <Project key = {project.id} project = {project}/>
                                    );
                                })
                            }
                        </div>
                    </div>
                </section>
        )
    }
}

export default Projects;