export default function user(state = {token:'', profile:{}, logging: false}, action) {
  if (action.type === 'PUSH_TOKEN'){
    return {...state, token:action.payload}
  } else if (action.type == 'LOGGING'){
    return {...state, profile:action.payload, logging:true}
  }
  return state;
}