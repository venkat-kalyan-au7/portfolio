import React from "react";

const WorkExperience = () =>{
    return (
        <aside className="education aside section">
            <div className="section-inner">
                <h2 className="heading">Work Experience</h2>
                <div className="content">
                    <div className="item">    
                                      
                        <h3 className="title">Designation:  SDE-2</h3>
                        <h3 className="title">Full Stack Developer</h3>
                        <h4 className="title">Tekgile Solutions Pvt Ltd <span className="year">(Nov21 - Present)</span></h4>
                    </div>
                    <div className="item">                      
                        <h3 className="title">Designation: SDE-1</h3>
                        <h3 className="title">Full Stack Developer</h3>
                        <h4 className="title">Tekgile Solutions Pvt Ltd <span className="year">(Dec20 - Oct20)</span></h4>
                    </div>
                    <div className="item">
                        <h3 className="title">Designation: Intern (Full Stack Developer)</h3>
                        <h4 className="title">Attainu, Bangalore <span className="year">(Jan20 - Sep20)</span></h4>
                    </div>
                </div>
            </div>
        </aside>
    )
}
export default WorkExperience;