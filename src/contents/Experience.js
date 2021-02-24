import React, { Component } from 'react';
import Card from '../components/Card';
class Experience extends Component {
    render() {
        return (
            <div className="frontpage">
                <div className="title">
                    <h1 className="subtopic">Experience and projects</h1>
                    <Card title="Work experience at the web department" where="University of Iceland" from="Sept 2020" to="Dec 2020"/>
                    <Card title="Garnagaulið website" where="School project making a simple and accessible web using Wordpress" from="Sept 2020" to="Nov 2020"/>
                    <Card title="RASK" where="Web I set up with HTML, CSS and JavaScript" from="April 2020" to="May 2020"/>
                </div>
            </div>
        )
    }
    }
export default Experience
