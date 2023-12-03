// Skills.jsx
import React from "react";
import SKILLS from "../data/skills";
import './Skills.css'; // Import a separate CSS file for styling

const Skills = () => {
    return (
        <aside className="skills aside section">
            <div className="section-inner">
                <h3 className="heading">Technical Skills</h3>
                <div className="content">
                    <div className="skillset">
                        {SKILLS.map((skill, index) => (
                            <div className="item" key={skill.id}>
                                <h3 className="level-title" data-toggle="tooltip" data-placement="left" data-animation="true" title={skill.description}>
                                    {skill.icon && <i className={`skill-icon ${skill.icon}`}></i>}
                                    {skill.name}
                                </h3>
                                <div className="progress" data-toggle="tooltip" data-placement="left" data-animation="true" title={skill.description}>
                                    <div className={`progress-bar bg-info w-${skill.rating}`} role="progressbar" aria-valuenow={skill.rating} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span className="place">{skill.description}</span>
                                {index !== SKILLS.length - 1 && <hr className="divider" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Skills;
