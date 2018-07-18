import {
    NEW_QUOTE,
    LOADING
} from './actionTypes';
import fetch from 'cross-fetch';
export function newQuote() {
    return function (dispatch) {

        dispatch(loading(true));

        return fetch("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", {
            cache: 'no-cache'
        })
            .then(response => response.json())
            .then(data => {
                // ----- Log Start ----------
                console.group("Data");
                console.log("Data", data);
                console.log("Quote : ", data[0].content)
                console.log("Author : ", data[0].title)
                console.groupEnd();
                // ----- Log End ----------

                dispatch({
                    type: NEW_QUOTE,
                    quote: {
                        text: data[0].content,
                        author: data[0].title,
                    }
                })

                dispatch(loading(false));
            })
            .catch(error => console.error(error));
    }
}

export function loading(loading) {
    return {
        type: LOADING,
        isLoading: loading
    }
}