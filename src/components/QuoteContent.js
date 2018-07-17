import React, {Component} from 'react';
import './QuoteContent.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default class QuoteContent extends Component{
    render(){
        return(
            <div className="quote-content">
                <div id="quote">
                    <span className="quote-symbol">
                        <FontAwesomeIcon icon={faQuoteLeft} />
                    </span>
                    <div dangerouslySetInnerHTML = {{__html: this.props.quote}} />
                </div>
                <div className="quote-author">
                    <div id="author">
                        - <span dangerouslySetInnerHTML = {{__html: this.props.author}}/>
                    </div>
                </div>
            </div>
        );
    }
}