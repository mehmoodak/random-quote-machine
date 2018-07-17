import React, { Component } from 'react';
import './QuotesApp.scss';

//Components
import RepoIcon from './components/RepoIcon';
import Credits from './components/Credits';
import QuoteActions from './components/QuoteActions';
import QuoteContent from './components/QuoteContent';

class QuotesApp extends Component {
    render() {
        return (
            <div>
                <div className="quote-container">
                    <div className="quote-wrapper">
                        <QuoteContent/>
                        <QuoteActions/>
                    </div>
                    <Credits/>
                </div>
                <RepoIcon url="https://github.com/mehmoodak/random-quote-machine"/>     
            </div>
        );
    }
}

export default QuotesApp;