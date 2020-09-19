import React, { Component } from "react";
import ProfileSummary from "./ProfileSummary";

import Projects from "./Projects";
import Skills from "./Skills";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import Languages from "./Languages";

class BodyContents extends Component{
    render(){
        return (
                <div className="container sections-wrapper">
                    <div className="row">
                        <div className="primary col-lg-8 col-12">
                            <ProfileSummary />
                           
                            <Projects />
                        </div>
                        <div className="secondary col-lg-4 col-12">
                            <BasicInfo />
                            <Skills />
                            <Education />
                            <Languages />
                        </div>
                    </div>
                </div>
        );
    }
}

export default BodyContents;