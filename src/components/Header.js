import React, { Component } from "react";
import profileImage from "../assets/profile.jpg";
import SOCIAL_PROFILES from "../data/socialProfiles";
import SocialProfile from "./SocialProfile";

class Header extends Component{
    render(){
        return(
            <div>
            <header className="header">
                <div className="container clearfix">                       
                    <img className="profile-image img-fluid float-left" src={profileImage} alt="Venkat Kalyan" />
                    <div className="profile-content float-left">
                        <h1 className="name">Venkat Kalyan</h1>
                        <h2 className="desc">Full Stack Developer</h2>   
                        <ul className="social list-inline">
                            {
                                SOCIAL_PROFILES.map(profile =>{
                                    return(
                                        <SocialProfile key= {profile.id} profile = {profile} />
                                    )
                                })
                            }
                         </ul> 
                    </div>
          
                </div>
            </header>
            </div>
        );
    }
}
export default Header;