// console.log("from index js");

const redux = require('redux')

const createStore = redux.createStore

// import createStore from 'redux'  //import create store from redux stape 1

const BUY_CAKE = ' BUY_CAKE'



function buycake() {
  return {
    type: BUY_CAKE,
    info: 'first redux action'
  }
}


// (previosState, action) => newState

const initialState = {
  numOfCake: 10
}


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - 1 }

    default:
      return state
  }
}


const store = createStore(reducer) // create a variable and define createstore function and passing reducer as an argument stape2
console.log('initial state', store.getState()); // check initial state from state
const unsubscribe = store.subscribe(() => {
  console.log('update state', store.getState())
});
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
unsubscribe()

