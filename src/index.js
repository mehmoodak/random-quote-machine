import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import QuotesAppContainer from './containers/QuoteAppContainer';

render(
<Provider store={store}>
    <QuotesAppContainer/>
</Provider>, document.getElementById('root'));

