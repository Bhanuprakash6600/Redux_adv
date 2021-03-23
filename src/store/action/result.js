import * as actionTypes from './actionType';
export const saveResult =(res)=>{
    return {
        type:actionTypes.STORE_RESULT,
        result:res

    };

}

export const Store_result =(res) =>{
    return (dispatch,getState) => {
        setTimeout(()=>{
            dispatch(saveResult(res));
        },2000);

    }
   

};




export const Delete_result =(resEld) =>{
    return {
        type:actionTypes.DELETE_RESULT,
        resultElId:resEld

    };

};