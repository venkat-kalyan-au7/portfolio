import React, { Component } from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";
import SocialProfile from "./SocialProfile";
import profile from "../assets/profile.jpg";
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="container clearfix">
                        <div className="profile-content float-left">
                           
                            <div className="profile-details">
                                <h1 className="name">Venkat Kalyan</h1>
                                <h2 className="desc">Full Stack Developer (MERN)</h2>
                                <ul className="social list-inline">
                                    {SOCIAL_PROFILES.map((profile) => (
                                        <SocialProfile key={profile.id} profile={profile} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
