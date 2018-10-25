import projects from '../data/projects.json';
import React, { Component } from 'react'
import Project from './Project'


export default class Projects extends Component {
    render() {
        return (
            <div>
                {
                    projects.allProjects.map((project, i) => {
                        return (<Project title={project.title} imgName={project.imgName} description={project.description} key={i} />
                        )
                    })
                }
            </div>
        )
    }

}