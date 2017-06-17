export default function login(state = false, action) {
  if (action.type === 'LOGIN'){
    return !state;
  } 
  return state;
}