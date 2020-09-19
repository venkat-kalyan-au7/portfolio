import React from "react";
import PROFILE_SUMMARY from "../data/profileSummary";

const ProfileSummary = () => {
    return (
        <section className="about section">
            <div className="section-inner">
                <h2 className="heading">Profile Summary</h2>
                <div className="content">
                        <ul>
                            {
                                PROFILE_SUMMARY.map( (summary , idx)=>{
                                    return(
                                    <li className="list-item" key = {idx}>{summary}</li>
                                    )
                                })
                            }
                        </ul>
                </div>
            </div>
        </section>
    )
}

export default ProfileSummary;