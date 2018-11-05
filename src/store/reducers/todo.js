import {
  CHANGE_INPUT_VALUE,
  ADD_LIST_ITEM,
  DELETE_ITEM
} from '@/constants/ActionTypes'


const initialState = {
    inputValue: '',
    list:[]
  }
 
const todo = (state = initialState, action) => {
  let newState=null
  switch (action.type) {
   case CHANGE_INPUT_VALUE:
    return { ...state,
        inputValue:action.value
      }
   case ADD_LIST_ITEM:
        newState= JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
       return newState
   case DELETE_ITEM:
        newState= JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
       return newState
   default:
    return state
  }
}
export default todo
