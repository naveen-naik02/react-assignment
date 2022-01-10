export const createSafes = (data) => {
    return (dispatch) => {
        dispatch({
            type: "create",
            payload: data
        });
    }
}

export const editSafes = (data) => {
    return (dispatch) => {
        dispatch({
            type:"edit",
            payload:data
        });
    }
}

export const deleteSafes = (data) => {
    return (dispatch) => {
        dispatch({
            type:"delete",
            payload:data
        })
    }
}

export const createsecrets = (data) =>{
    return (dispatch) =>{
        dispatch({
            type:"secrets",
            payload:data
        })
    }
}

export const deletesecrets = (data) =>{
    return (dispatch) =>{
        dispatch({
            type:"deletesecrets",
            payload:data
        })
    }
}
