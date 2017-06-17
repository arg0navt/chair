export default function view(state = false, action) {
  if (action.type === 'TOGGLE_DETAIL'){
    return !state;
  } 
  return state;
}