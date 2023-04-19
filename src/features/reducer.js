import { createStore, combineReducers } from 'redux';

const initialState = {
    technicalskills: [],
    softskills: [],
    education: [],
    experience: [],
};

export function Reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TECHNICAL_SKILL':
            return {
                ...state,
                technicalskills: [...state.technicalskills, action.payload]
            };
        case 'REMOVE_TECHNICAL_SKILL':
            return {
                ...state,
                technicalskills: state.technicalskills.filter(skill => skill !== action.payload)
            };
        case 'ADD_SOFT_SKILL':
            return {
                ...state,
                softskills: [...state.softskills, action.payload]
            };
        case 'REMOVE_SOFT_SKILL':
            return {
                ...state,
                softskills: state.softskills.filter(skill => skill !== action.payload)
            };
        case 'ADD_EDU':
            return {
                ...state,
                education: [...state.education, action.payload],
            };
        case 'REMOVE_EDU':
            return {
                ...state,
                education: state.education.filter((edu) => edu !== action.payload),
            };
        case 'ADD_EXP':
            return {
                ...state,
                experience: [...state.experience, action.payload],
            };
        case 'REMOVE_EXP':
            return {
                ...state,
                experience: state.experience.filter((exp) => exp !== action.payload),
            };
        default:
            return state;
    }
}
