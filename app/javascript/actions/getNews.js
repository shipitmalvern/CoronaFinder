import axios from "axios";
import {news} from '../actions/loadedAction'

const fetchNewsRequest = () => {
  return {
    type: "FETCH_NEWS_REQUEST",
  };
};

const fetchNewsRequestSuccess = (data) => {
  return {
    type: "FETCH_NEWS_REQUEST_SUCCESS",
    payload: data,
  };
};

const fetchNewsRequestFailure = (error) => {
  return {
    type: "FETCH_NEWS_REQUEST_FAILURE",
    payload: error,
  };
};

const fetchNews = (state) => {
  //We can return a function
  console.log("Fetching News");
  const options = {
    headers: { "Content-Type": "application/json" },
  };
  return function (dispatch) {
    dispatch(fetchNewsRequest);
    axios
      .get("https://newsapi.org/v2/top-headlines?country=us&q=corona&from=2020-06-01&sortBy=publishedAt&apiKey=e5aff38f78b34a1b80954fa5967d690c"
        , options)
      .then((response) => {
        //successful
        let data = response.data;
        data= data.articles.slice(0,5)
        dispatch(fetchNewsRequestSuccess(data));
        dispatch(news())
      })
      .catch((error) => {
        dispatch(fetchNewsRequestFailure(error.message));
      });
  };
};

export default fetchNews;
