const ADD_STR = 'redux-example/mypage/ADD';
const SET_STATE = 'redux-example/mypage/SET_STORE';

const initialState = {
  'mapKey': []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_STR:
      const newStr = [...state.mapKey, action.str];
      console.log(state);
      if (action.meta !== 'client2server') { return state;}
      return {
        ...state,
        mapKey: newStr
      };
    case SET_STATE:
      const newData = action.data;
      if (action.meta !== 'server2client') { return state;}
      return {
        ...state,
        mapKey: [...newData.mapKey]
      };
    default:
      return state;
  }
}


// action creator
export function addStr(str) {
  return {
    meta: 'client2server',
    type: ADD_STR,
    str: str
  };
}
export function setState(data) {
  return {
    type: SET_STATE,
    data: data
  };
}
// store traverser
// --take in a store && data
// --expected
