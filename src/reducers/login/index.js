export default function login(state = true, action) {
  if (action.type === 'LOGIN'){
    return !state;
  } 
  return state;
}