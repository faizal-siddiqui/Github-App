import { api } from "../api/api";
import {
  ALL_DATA_ERROR,
  ALL_DATA_LOADING,
  ALL_DATA_SUCCESS,
  CSS_DATA_ERROR,
  CSS_DATA_LOADING,
  CSS_DATA_SUCCESS,
  HTML_DATA_ERROR,
  HTML_DATA_LOADING,
  HTML_DATA_SUCCESS,
  JAVASCRIPT_DATA_ERROR,
  JAVASCRIPT_DATA_LOADING,
  JAVASCRIPT_DATA_SUCCESS,
} from "./data.types";

export const getCSSRepo = (page) => (dispatch) => {
  dispatch({ type: CSS_DATA_LOADING });
  api({
    method: "get",
    url: `https://api.github.com/search/repositories?q=stars:%3E1+language:css&page=${page}&per_page=10`,
  })
    .then((res) => dispatch({ type: CSS_DATA_SUCCESS, payload: res }))
    .catch((err) => dispatch({ type: CSS_DATA_ERROR }));
};

export const getAlllRepo = (page) => (dispatch) => {
  dispatch({ type: ALL_DATA_LOADING });
  api({
    method: "get",
    url: `https://api.github.com/search/repositories?q=stars:%3E1+language:all&page=${page}&per_page=10`,
  })
    .then((res) => dispatch({ type: ALL_DATA_SUCCESS, payload: res }))
    .catch((err) => dispatch({ type: ALL_DATA_ERROR }));
};

export const getHtmlRepo = (page) => (dispatch) => {
  dispatch({ type: HTML_DATA_LOADING });
  api({
    method: "get",
    url: `https://api.github.com/search/repositories?q=stars:%3E1+language:html&page=${page}&per_page=10`,
  })
    .then((res) => dispatch({ type: HTML_DATA_SUCCESS, payload: res }))
    .catch((err) => dispatch({ type: HTML_DATA_ERROR }));
};

export const getJavascriptRepo = (page) => (dispatch) => {
  dispatch({ type: JAVASCRIPT_DATA_LOADING });
  api({
    method: "get",
    url: `https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&page=${page}&per_page=10`,
  })
    .then((res) => dispatch({ type: JAVASCRIPT_DATA_SUCCESS, payload: res }))
    .catch((err) => dispatch({ type: JAVASCRIPT_DATA_ERROR }));
};
