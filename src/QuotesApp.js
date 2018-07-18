import React, { Component } from 'react';
import './QuotesApp.scss';

//Components
import RepoIcon from './components/RepoIcon';
import Credits from './components/Credits';
import QuoteActions from './components/QuoteActions';
import QuoteContent from './components/QuoteContent';

class QuotesApp extends Component {
    constructor(props) {
        super(props);
        console.log("Quotes App", this.props);

        this.showQuote = this.showQuote.bind(this);
    }

    componentDidMount() {
        this.showQuote();
    }

    showQuote(){
        this.props.getQuote();
        this.changeTheme();
    }

    changeTheme() {
        let themeClasses = ['default', 'theme-1', 'theme-2', 'theme-3', 'theme-4', 'theme-5', 'theme-6', 'theme-7'];
        document.getElementsByTagName("body")[0].classList = themeClasses[Math.floor(Math.random() * themeClasses.length)];
    }

    render() {
        return (
            <div>
                <div className="quote-container">
                    <div className="quote-wrapper">
                        <QuoteContent quote={this.props.quote.text} author={this.props.quote.author} />
                        <QuoteActions getNewQuote={this.showQuote} isLoading={this.props.isLoading} quote={this.props.quote.text} />
                    </div>
                    <Credits name="Mehmood Ahmad Khan"/>
                </div>
                <RepoIcon url="https://github.com/mehmoodak/random-quote-machine" />
            </div>
        );
    }
}

export default QuotesApp;