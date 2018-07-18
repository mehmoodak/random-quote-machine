import React, { Component } from 'react';
import './Credits.scss';

export default class Credits extends Component{
    render(){
        return(
            <div className="credits">
                <div className="made-by">
                    by <span id="developer-name"> {this.props.name} </span>
                </div>
            </div> 
        );
    }
}