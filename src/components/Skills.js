import React from "react";
import SKILLS from "../data/skills";

const Skills = () =>{
    return(
        <aside className="skills aside section">
            <div className="section-inner">
                <h3 className="heading">Technical Skills</h3>
                <div className="content">
                    <div className="skillset">
                        {
                            SKILLS.map(skill => {
                                    return(
                                        <div className="item" key={skill.id}>
                                            <h3 className="level-title" data-toggle="tooltip" data-placement="left" data-animation="true" title={skill.description}>{ skill.name }</h3>
                                            <div className="progress" data-toggle="tooltip" data-placement="left" data-animation="true" title={skill.description} style={{ height: 2}}>
                                                <div className="progress-bar progress-bar-striped bg-info" style={{width : skill.rating}}></div>
                                            </div>
                                            <span class="place">{skill.description}</span>
                                            {
                                                skill.id !== SKILLS.length ?  <hr class="divider" /> : null
                                            }
                                            
                                        </div>
                                    )
                            })
                        }
                    </div>              
                </div>
            </div>
        </aside>
    )
}

export default Skills;