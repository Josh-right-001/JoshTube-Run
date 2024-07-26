import React from 'react';

const RecommendedContent = ({ content }) => {
    return (
        <div className="reconmmended-content">
            <h3> Recommended for you </h3>
            <div className="content-card">
                <div className="thumbnail-container">
                    <img src="{content.content}" alt="content thunbail" className="thumbnail-container" />
                </div> 
                <div>
                    <h2 className="title">{content.info}</h2>
                    <p className="description"> {content.description}</p>
                </div>
            </div>
    );

};