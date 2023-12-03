import React from "react";
import './WorkExperience.css'; // Import a separate CSS file for styling

const WorkExperience = () => {
    return (
        <aside className="work-experience aside section">
            <div className="section-inner">
                <h2 className="heading">Work Experience</h2>
                <div className="content">
                    <div className="item">
                        <div className="icon">&#128188;</div>
                        <div className="details">
                            <h4 className="designation">Senior Full Stack Developer</h4>
                            <h5 className="company">Tekgile Solutions Pvt Ltd, Remote</h5>
                            <span className="year">(Nov '2021 - Present)</span>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon">&#128188;</div>
                        <div className="details">
                            <h4 className="designation">Junior Full Stack Developer</h4>
                            <h5 className="company">Tekgile Solutions Pvt Ltd, Remote</h5>
                            <span className="year">(Dec '2020 - Oct '2021)</span>
                        </div>
                    </div>

                    <div className="item">
                        <div className="icon">&#128188;</div>
                        <div className="details">
                            <h4 className="designation">Intern (Full Stack Developer)</h4>
                            <h5 className="company">Attainu, Bangalore</h5>
                            <span className="year">(Jan '2020 - Ocr '2020)</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default WorkExperience;
