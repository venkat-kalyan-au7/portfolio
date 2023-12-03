import React from "react";
import './BasicInfo.css'; // Import a separate CSS file for styling

const BasicInfo = () => {
    return (
        <aside className="basic-info aside section">
            <div className="section-inner">
                <h2 className="heading">Basic Information</h2>
                <div className="content">
                    <ul className="list-unstyled">
                        <li>
                            <i className="fas fa-map-marker-alt icon"></i>
                            <span className="label">Location:</span>
                            <span className="value">Hyderabad, TS, India</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile icon"></i>
                            <span className="label">Contact No:</span>
                            <span className="value">+91 7013349869</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope icon"></i>
                            <span className="label">Email:</span>
                            <span className="value"><a href="mailto:kalyan15meka@gmail.com">kalyan15meka@gmail.com</a></span>
                        </li>
                        {/* Uncomment the following lines for website information */}
                        {/* <li>
                            <i className="fas fa-link icon"></i>
                            <span className="label">Website:</span>
                            <span className="value"><a href="https://www.website.com" target="_blank" rel="noopener noreferrer">https://www.website.com</a></span>
                        </li> */}
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default BasicInfo;
