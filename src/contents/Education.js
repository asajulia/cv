import React, { Component } from 'react';
import Card from '../components/Card';
class Education extends Component {
    render() {
        return (
            <div className="frontpage">
                <div className="title">
                    <h1 className="subtopic">My Education</h1>
                    <Card title="Web Communications" where="University of Iceland" from="Sept 2020" to="June 2021"/>
                    <Card title="Computer Science" where="University of Iceland" from="Sept 2015" to="Feb 2019"/>
                    <Card title="IB-diploma" where="Hamrahlíð Collage" from="2011" to="2015"/>
                </div>
            </div>
        )
    }
    }
export default Education