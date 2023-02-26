import { useReducer, useEffect, useLayoutEffect } from "react";
import axios from "axios"

const ACTIONS = {
    API_REQUEST: "api-request",
    FETCH_DATA: "fetch-data",
    ERROR: "error"
}

const initialState = {
    data: {},
    loading: false,
    error: null
}

function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.API_REQUEST:
            return { data: {}, loading: true, error: null }
        case ACTIONS.FETCH_DATA:
            return { data: payload, loading: false, error: null }
        case ACTIONS.ERROR:
            return { data: {}, loading: false, error: payload }
        default:
            return state
    }
}

function useFetch(url) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useLayoutEffect(() => {
        console.log(url)
        dispatch({ type: ACTIONS.API_REQUEST })
        axios.get(url).then((res) => {
            console.log(res.data)
            return dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data })
        }).catch((err) => {
            console.log(err)
            return dispatch({ type: ACTIONS.ERROR, payload: err })
        })
            
    },[url])


    return state;
}

export default useFetch;