import { createSelector } from "reselect";
import memoize from 'lodash.memoize';
import store from "../store";



const selectShop = state => state.shop;

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

export const selectCollections = createSelector([selectShop], shop => shop.collections);

const selectCollectionMemoized = memoize((urlParam) => createSelector([selectCollections], collections => collections.find(item => item.routeName === urlParam)));

// export const selectCollection = urlParam => selectCollectionMemoized(urlParam)

export const selectCollection = memoize((urlParam, state) => {
    console.log('inside selectCollection', urlParam, store.getState() === state);
    return state.shop.collections.find(item => item.routeName === urlParam)
});