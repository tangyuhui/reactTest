import * as types from '@/constants/ActionTypes'
export const setInputValue = value => ({
    type: types.CHANGE_INPUT_VALUE,
    value:value
 })
 export const addListItem  = value=>({
    type: types.ADD_LIST_ITEM,
    value:value
 })
 export const deleteItem  = index=>({
    type: types.DELETE_ITEM,
    index:index
 })