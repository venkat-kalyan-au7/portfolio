import React from "react";
import "./project.css"; 
const Project = (props) => {
    const { title, client, description, image, link, technologyUsed, functionalArea } = props.project;
    const technologies = technologyUsed.split(',').map(tech => tech.trim());

    return (
        <div className="item row project-container">
            <a className="col-md-4 col-12" href={link} target="_blank" rel="noopener noreferrer">
                <img className="img-fluid project-image" src={image} alt={title} />
            </a>
            <div className="desc col-md-8 col-12">
                <h3 className="title">
                    <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                    <span className="small place"> - {client}</span>
                </h3>
                {functionalArea && <p className="mb-2"><strong>Functional Area:</strong> {functionalArea}</p>}
                <p className="mb-2">{description}</p>
                <div className="technologies">
                    <strong>Stack of Technologies used: </strong>
                    {technologies.map((tech, index) => (
                        <span key={index} className="badge badge-advanced mr-2">{tech}</span>
                    ))}
                </div>
                <p className="view-more"><a className="more-link" href={link} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i>VIEW</a></p>
            </div>
        </div>
    );
}

export default Project;
