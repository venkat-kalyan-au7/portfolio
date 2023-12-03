import React from "react";
import './Education.css'; // Import a separate CSS file for styling

const Education = () => {
    return (
        <aside className="education aside section">
            <div className="section-inner">
                <h2 className="heading">Education</h2>
                <div className="content">
                    <div className="item">
                        <div className="icon">&#127891;</div>
                        <div className="details">
                            <h3 className="title">Bachelor of Engineering</h3>
                            <h4 className="university">RCEE (Jawaharlal Nehru Technological University) <span className="year">(2015-2019)</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Education;
