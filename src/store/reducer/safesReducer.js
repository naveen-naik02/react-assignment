const initialState = {safesData:[]};

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "create":
            let data = [...state.safesData]
            data.push(action.payload)
            return {...state , safesData:data};

        case "edit":
            const index = state.safesData.findIndex(item =>item.id === action.payload.id);
            const larr = [...state.safesData]
            larr.splice(index,1,action.payload)
            return {...state, safesData:larr}
           
        

        case "delete":
            const darr = [...state.safesData]
            let temp = darr.filter(element=>element.id !== action.payload)
            return {safesData:temp}

        case "secrets":
            console.log(action.payload)
            const ind = state.safesData.findIndex(item =>item.id === action.payload.id)
            const arr = [...state.safesData]
            arr.splice(ind,1,action.payload)
            return {...state, safesData:arr}


        default:
            return state
    }
    
}

export default reducer;