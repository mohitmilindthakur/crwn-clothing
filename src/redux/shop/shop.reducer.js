import collections from './data.js'



const INITIAL_STATE = {
    collections,
    collectionIdMap: {
        hats: 1,
        sneakers: 2,
        jackets: 3,
        womens: 4,
        mens: 5
    }
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.payload) {
        default:
            return state
    }
}

export default shopReducer;