import *as actionTypes from './actionType';



export const increment =() =>{
    return {
        type:actionTypes.INCREMENT

    };

};
export const decrement =() =>{
    return {
        type:actionTypes.DECREMENT

    };

};
export const add =(value) =>{
    return {
        type:actionTypes.ADD,
        val:value

    };

};

export const Subtract =(value) =>{
    return {
        type:actionTypes.SUBTRACT,
        val:value

    };

};