import Cookies from 'js-cookie';

export default function user(state = {token:'', profile:{}, logging: false}, action) {
  if (action.type === 'PUSH_TOKEN'){
    return {...state, token:action.payload}
  } else if (action.type == 'LOGGING'){
    Cookies.set('user', {token:action.payload.user.user_token, profile:action.payload, logging:true}, { expires: 1 });
    return {token:action.payload.user.user_token, profile:action.payload.user, logging:true}
  }
  return state;
}