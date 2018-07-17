import React, { Component } from 'react';
import './QuoteActions.scss';

import TweetButton from './TweetButton';

export default class QuoteActions extends Component{
    render(){
        return (
            <div className="quote-actions">
                <TweetButton tweetText="Random%20Quote%20Generator"/>
                <div className="loading">
                    <i className="fas fa-spinner fa-spin fa-2x"></i>
                </div>
                <div>
                    <button id="new-quote" className="btn">
                        New Quote
                        </button>
                </div>
            </div>
        );
    }
}