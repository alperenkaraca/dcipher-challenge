export const ADD_ITEM = 'TODO/ADD_ITEM'

export const addItem = (item) => (dispatch) => {
    dispatch({type: ADD_ITEM, item})
}
