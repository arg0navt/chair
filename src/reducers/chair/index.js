export default function chair(state = [], action) {
  if (action.type === 'PUSH_CHAIR'){
    var array = []
    for(let key of action.payload){
      array.push(key)
    }
    return array
  }
  return state;
}