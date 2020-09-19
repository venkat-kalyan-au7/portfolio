import React from "react";

const BasicInfo = () => {
    return(
        <aside className="info aside section">
            <div className="section-inner">
                <h2 className="heading sr-only">Basic Information</h2>
                <div className="content">
                    <ul className="list-unstyled">
                        <li><i className="fa fa-map-marker-alt"></i><span className="sr-only">Location:</span>Hyderabad, TS, India</li>
                        <li><i className="fa fa-envelope"></i><span className="sr-only">Email:</span><a href="mailto:kalyan15meka@gmail.com">kalyan15meka@gmail.com</a></li>
                        {/* <li><i className="fa fa-link"></i><span className="sr-only">Website:</span><a href="##">https://www.website.com</a></li> */}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default BasicInfo;