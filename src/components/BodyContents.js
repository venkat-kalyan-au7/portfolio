import React, { Component } from "react";
import ProfileSummary from "./ProfileSummary";

import Projects from "./Projects";
import Current from "./CurrentProject";
import Skills from "./Skills";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import Languages from "./Languages";
import Work from "./WorkExp";

class BodyContents extends Component{
    render(){
        return (
                <div className="container sections-wrapper">
                    <div className="row">
                        <div className="primary col-lg-8 col-12">
                            <ProfileSummary />
                            <Current />
                            <Projects />
                        </div>
                        <div className="secondary col-lg-4 col-12">
                            <BasicInfo />
                            <Skills />
                            <Work />
                            <Education />
                            <Languages />
                        </div>
                    </div>
                </div>
        );
    }
}

export default BodyContents;