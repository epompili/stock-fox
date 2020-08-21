import { getStockNews } from '../util/news_api_util';

export const RECEIVE_STOCK_NEWS = 'RECEIVE_STOCK_NEWS';

const receiveStockNews = news => ({
  type: RECEIVE_STOCK_NEWS,
  news: news.articles // array of news objects from API call
});

export const fetchStockNews = stock => dispatch => getStockNews(stock)
  .then(news => dispatch(receiveStockNews(news)));