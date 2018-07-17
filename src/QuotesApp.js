import React, { Component } from 'react';
import './QuotesApp.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);


class QuotesApp extends Component {
    render() {
        return (
            <div>
                <div className="quote-container">
                    <div className="quote-wrapper">
                        <div className="quote-text">
                            <div id="quote">
                                <span className="quote-symbol"><i className="fas fa-quote-left"></i></span>
                                <p> Loading Quote.... </p>
                            </div>
                        </div>
                        <div className="quote-author">
                            <div id="author">
                                - Quote Author
                            </div>
                        </div>
                        <div className="quote-actions">
                            <div className="quote-sharing">
                                <a id="tweet" className="btn-icons" rel="noopener noreferrer" target="_blank"
                                    href="https://twitter.com/intent/tweet?text=Random%20Quote%20Generator">
                                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                                </a>
                            </div>
                            <div className="loading">
                                <i className="fas fa-spinner fa-spin fa-2x"></i>
                            </div>
                            <div>
                                <button id="new-quote" className="btn">
                                    New Quote
                                 </button>
                            </div>
                        </div>
                    </div>
                    <div className="credits">
                        <div className="made-by">
                            by <span id="developer-name"> Mehmood Ahmad Khan </span>
                        </div>
                    </div>
                </div>

                <a id="source-link" rel="noopener noreferrer" target="_blank" className="btn-icons"
                    href="https://github.com/mehmoodak/random-quote-machineq">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
            </div>
        );
    }
}

export default QuotesApp;