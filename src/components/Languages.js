import React from "react";

const Languages = () => {
    return(
        <aside className="languages aside section">
            <div className="section-inner">
                <h2 className="heading">Languages</h2>
                <div className="content">
                    <ul className="list-unstyled">
                        <li className="item">
                            <span className="title"><strong>English:</strong></span>
                            <span className="level">Professional Proficiency <br className="visible-sm visible-xs"/><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i><i className="fa fa-star"></i> <i className="fa fa-star"></i></span>
                        </li>
                        <li className="item">
                            <span className="title"><strong>Telugu:</strong></span>
                            <span className="level">Native Speaker <br className="visible-xs"/><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span>
                        </li>
                        <li className="item">
                            <span className="title"><strong>Hindi:</strong></span>
                            <span className="level">Basic Proficiency <br className="visible-xs"/> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
export default Languages;