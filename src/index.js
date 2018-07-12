import React from 'react';
import ReactDOM from 'react-dom';
import QuotesApp from './QuotesApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<QuotesApp />, document.getElementById('root'));
registerServiceWorker();
