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

const initialState = {
  all: {
    loading: false,
    error: false,
    data: [],
  },
  html: {
    loading: false,
    error: false,
    data: [],
  },
  css: {
    loading: false,
    error: false,
    data: [],
  },
  javascript: {
    loading: false,
    error: false,
    data: [],
  },
};

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // all
    case ALL_DATA_LOADING: {
      return {
        ...state,
        all: {
          ...state.all,
          loading: true,
        },
      };
    }
    case ALL_DATA_ERROR: {
      return {
        ...state,
        all: {
          ...state.all,
          error: true,
          loading: false,
        },
      };
    }
    case ALL_DATA_SUCCESS: {
      return {
        ...state,
        all: {
          ...state.all,
          data: payload,
          loading: false,
        },
      };
    }
    // html

    case HTML_DATA_LOADING: {
      return {
        ...state,
        html: {
          ...state.html,
          loading: true,
        },
      };
    }
    case HTML_DATA_ERROR: {
      return {
        ...state,
        html: {
          ...state.html,
          error: true,
          loading: false,
        },
      };
    }
    case HTML_DATA_SUCCESS: {
      return {
        ...state,
        html: {
          ...state.html,
          data: payload,
          loading: false,
        },
      };
    }

    // csss

    case CSS_DATA_LOADING: {
      return {
        ...state,
        css: {
          ...state.css,
          loading: true,
        },
      };
    }
    case CSS_DATA_ERROR: {
      return {
        ...state,
        css: {
          ...state.css,
          error: true,
          loading: false,
        },
      };
    }
    case CSS_DATA_SUCCESS: {
      return {
        ...state,
        css: {
          ...state.css,
          data: payload,
          loading: false,
        },
      };
    }

    // javascript

    case JAVASCRIPT_DATA_LOADING: {
      return {
        ...state,
        javascript: {
          ...state.javascript,
          loading: true,
        },
      };
    }
    case JAVASCRIPT_DATA_ERROR: {
      return {
        ...state,
        javascript: {
          ...state.javascript,
          error: true,
          loading: false,
        },
      };
    }
    case JAVASCRIPT_DATA_SUCCESS: {
      return {
        ...state,
        javascript: {
          ...state.javascript,
          data: payload,
          loading: false,
        },
      };
    }
  }
};
