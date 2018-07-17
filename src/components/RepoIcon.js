import React, { Component } from 'react';
import './RepoIcon.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

export default class RepoIcon extends Component{

    render(){
        return (
            <a id="source-link" rel="noopener noreferrer" target="_blank" className="btn-icons"
                    href={this.props.url}>
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
        );
    }
}