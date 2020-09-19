import React from "react";

const Education = () =>{
    return (
        <aside className="education aside section">
            <div className="section-inner">
                <h2 className="heading">Education</h2>
                <div className="content">
                    <div className="item">                      
                        <h3 className="title"><i className="fa fa-graduation-cap"></i> B.Tech</h3>
                        <h4 className="university">Ramachandra College of Engineering(JNTU-K),Eluru <span className="year">(2015-2019)</span></h4>
                    </div>
                    <div className="item">
                        <h3 className="title"><i className="fa fa-graduation-cap"></i> Full Stack Web Development</h3>
                        <h4 className="university">Attainu, Bangalore <span className="year">(2020)</span></h4>
                    </div>
                </div>
            </div>
        </aside>
    )
}
export default Education;