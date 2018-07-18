import {connect} from 'react-redux';
import QuotesApp from './../QuotesApp';
import { newQuote, loading } from './../redux/actions';

const mapStateToProps = (state, props) => {
    return {
        quote: {
            text: state.quote.text,
            author: state.quote.author
        },
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getQuote: () => {
            dispatch(newQuote()) 
        },
        loading: isLoading => {
            dispatch(loading(isLoading))
        }
    }
}

const QuotesAppContainer = connect( mapStateToProps, mapDispatchToProps)(QuotesApp);

export default QuotesAppContainer;