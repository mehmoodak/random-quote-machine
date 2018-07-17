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
        this.state = {
            quote: {
                text: "Loading...",
                author: "Author",
            },
            isLoading: true,
        }

        this.getQuote = this.getQuote.bind(this);
    }

    componentDidMount() {
        this.getQuote();
    }

    changeTheme() {
        let themeClasses = ['default', 'theme-1', 'theme-2', 'theme-3', 'theme-4', 'theme-5', 'theme-6', 'theme-7'];

        document.getElementsByTagName("body")[0].classList = themeClasses[Math.floor(Math.random() * themeClasses.length)];
    }

    getQuote() {

        this.setState({
            isLoading: true
        });

        fetch("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", { cache: 'no-cache' })
            .then(response => response.json())
            .then(data => {
                console.group("Data");
                console.log("Data", data);
                console.log("Quote : ", data[0].content)
                console.log("Author : ", data[0].title)
                console.groupEnd();

                this.setState({
                    quote:{
                        text: data[0].content,
                        author: data[0].title,
                    },
                    isLoading: false,
                });

                this.changeTheme();
            })
            .catch(error => console.error(error));
    }
    render() {
        return (
            <div>
                <div className="quote-container">
                    <div className="quote-wrapper">
                        <QuoteContent quote={this.state.quote.text} author={this.state.quote.author} />
                        <QuoteActions getNewQuote={this.getQuote} isLoading={this.state.isLoading} quote={this.state.quote.text} />
                    </div>
                    <Credits />
                </div>
                <RepoIcon url="https://github.com/mehmoodak/random-quote-machine" />
            </div>
        );
    }
}

export default QuotesApp;