import React, {Component} from 'react';
import './QuoteContent.scss';

export default class QuoteContent extends Component{
    render(){
        return(
            <div className="quote-content">
                <div id="quote">
                    <span className="quote-symbol"><i className="fas fa-quote-left"></i></span>
                    <p> Loading Quote.... </p>
                </div>
                <div className="quote-author">
                    <div id="author">
                        - Quote Author
                    </div>
                </div>
            </div>
        );
    }
}