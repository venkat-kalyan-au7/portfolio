import React from "react";
import PROFILE_SUMMARY from "../data/profileSummary";

const ProfileSummary = () => {
    const paragraphs = PROFILE_SUMMARY.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));

    return (
        <section className="about section">
            <div className="section-inner">
                <h2 className="heading">Profile Summary</h2>
                <div className="content">
                    {paragraphs}
                </div>
            </div>
        </section>
    );
}

export default ProfileSummary;
