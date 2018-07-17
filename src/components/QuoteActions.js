import React, { Component } from 'react';
import './QuoteActions.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

//Components
import TweetButton from './TweetButton';

export default class QuoteActions extends Component {
    render() {
        return (
            <div className="quote-actions">
                <TweetButton tweetText="Random%20Quote%20Generator" />

                {
                    this.props.isLoading &&
                    <div className="loading">
                        <FontAwesomeIcon icon={faSpinner} className="fas" spin />
                    </div>
                }

                <div>
                    <button id="new-quote" className="btn" onClick={this.props.getNewQuote}>
                        New Quote
                    </button>
                </div>
            </div>
        );
    }
}