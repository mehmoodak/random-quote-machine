import React, { Component } from 'react';
import './TweetButton.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

export default class TweetButton extends Component{
    render(){
        let tweetText = "https://twitter.com/intent/tweet?text=" + this.props.tweetText;

        return (            
            <div className="quote-sharing">
                <a id="tweet" className="btn-icons" rel="noopener noreferrer" target="_blank"
                    href={tweetText}>
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
            </div>
        );
    }
}