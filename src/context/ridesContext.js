import axios from "axios";
import { createContext, useEffect, useReducer, useContext } from "react";

const RidesContext = createContext();



const reducer = (state, action) => {

    switch(action.type){

        case  "GET_USER": 
        

       return {...state, userInfo: action.payload}

        default :
        return state;

    }

}


const initialState = {
    userInfo: {},
    rides: []
}


export const RidesContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)


    // Getting user info 
    useEffect(() => {

        (async () => {

            try{

                const{ data, status} = await axios.get('https://assessment.api.vweb.app/user')
                

                if(status === 200){
                    dispatch({type: "GET_USER", payload: data})
                }

            }catch(error){

                console.log(error.name)
            }

        })()

    }, [])


  return <RidesContext.Provider value={{state, dispatch}}>{children}</RidesContext.Provider>;
};

export const useRidesContext = () => useContext(RidesContext);
