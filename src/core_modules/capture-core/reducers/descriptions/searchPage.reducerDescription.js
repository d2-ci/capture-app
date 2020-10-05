// @flow
import { createSlice } from '@reduxjs/toolkit';

export const searchPageStatus = {
    INITIAL: 'INITIAL',
    LOADING: 'LOADING',
    NO_RESULTS: 'NO_RESULTS',
    SHOW_RESULTS: 'SHOW_RESULTS',
    ERROR: 'ERROR',
};


const searchPage = createSlice({
    name: 'searchPage',
    initialState: {
        searchStatus: searchPageStatus.INITIAL,
        searchResults: [],
        currentSearchInfo: [],
        searchResultsPaginationInfo: {
            rowsCount: 0,
            rowsPerPage: 0,
            currentPage: 0,
        },
    },
    reducers: {
        showInitialViewOnSearchPage(state) {
            state.searchStatus = searchPageStatus.INITIAL;
        },
        showSuccessResultsViewOnSearchPage(state, { payload: { searchResults, searchResultsPaginationInfo } }) {
            state.searchStatus = searchPageStatus.SHOW_RESULTS;
            state.searchResults = searchResults;
            state.searchResultsPaginationInfo = searchResultsPaginationInfo;
        },
        showLoadingViewOnSearchPage(state) {
            state.searchStatus = searchPageStatus.LOADING;
        },
        showEmptyResultsViewOnSearchPage(state) {
            state.searchStatus = searchPageStatus.NO_RESULTS;
        },
        showErrorViewOnSearchPage(state) {
            state.searchStatus = searchPageStatus.ERROR;
        },
        saveCurrentSearchInfo(state, { payload: { searchScopeType, searchScopeId, formId, currentSearchTerms } }) {
            state.currentSearchInfo = { searchScopeType, searchScopeId, formId, currentSearchTerms };
        },
    },
});


export const {
    showInitialViewOnSearchPage,
    showSuccessResultsViewOnSearchPage,
    showLoadingViewOnSearchPage,
    showEmptyResultsViewOnSearchPage,
    saveCurrentSearchInfo,
    showErrorViewOnSearchPage,
} = searchPage.actions;

export default searchPage.reducer;

