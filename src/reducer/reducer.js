import initial from '../data/initial'

const counterIncrease = state => ({ ...state, count: state.count + 1 });

export default (state, action) => {
  
    switch (action.type) {
        case "INCREMENT": return counterIncrease(state);
        case "RESET": return initial;
        default: return state;
    }
};