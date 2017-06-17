export default function detail(state = {}, action) {
  if (action.type === 'PUSH_DETAIL'){
    return action.payload
  } 
  return state;
}