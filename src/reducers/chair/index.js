import _ from 'underscore'

export default function chair(state = [], action) {
  if (action.type === 'PUSH_CHAIR'){
    let array = _.values(action.payload)
    return array
  }
  return state;
}