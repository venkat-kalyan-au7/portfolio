import React from "react";

const Project = (props) => {
        const { title, client, description, image, link, technologyUsed} = props.project;
        return(
            <div className="item row">
                <a className="col-md-4 col-12" href= {link} target="_blank" rel="noopener noreferrer">
                <img className="img-fluid project-image" src={image} alt={title} />
                </a>
                <div className="desc col-md-8 col-12">
                    <h3 className="title"><a href= {link} target="_blank" rel="noopener noreferrer">{title} </a><span className="small place"> - { client }</span></h3>
                    <p className="mb-2">{description}</p>
                    <span class="place">{technologyUsed}</span>
                    <p><a className="more-link" href={link} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i>VIEW</a></p>
                </div>
            </div>
        );
}

export default Project;