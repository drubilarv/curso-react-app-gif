import { useState,useEffect }from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGift = ( category ) => {

    const initialState = {
        data:[],
        loading:true
    }

    const [state, setState] = useState(initialState);


    useEffect(()=>{
        getGifs(category).then(img=>setState({
            data:img,
            loading:false
        }))
    },[category]);

    return state;

}
