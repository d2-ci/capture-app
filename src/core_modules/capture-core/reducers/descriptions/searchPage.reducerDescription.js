// @flow
import { createReducerDescription } from '../../trackerRedux/trackerReducer';
import { searchPageActionTypes } from '../../components/Pages/Search/SearchPage.actions';

export const searchPageStatus = {
    INITIAL: 'INITIAL',
    LOADING: 'LOADING',
    NO_RESULTS: 'NO_RESULTS',
    SHOW_RESULTS: 'SHOW_RESULTS',
    ERROR: 'ERROR',
};

export const searchPageDesc = createReducerDescription({
    [searchPageActionTypes.SEARCH_RESULTS_INITIAL_VIEW]: state => ({
        ...state,
        searchStatus: searchPageStatus.INITIAL,
    }),
    [searchPageActionTypes.SEARCH_RESULTS_SUCCESS_VIEW]: (state, { payload: { searchResults, currentPage } }) => ({
        ...state,
        searchStatus: searchPageStatus.SHOW_RESULTS,
        searchResults,
        currentPage,
    }),
    [searchPageActionTypes.SEARCH_RESULTS_LOADING_VIEW]: state => ({
        ...state,
        searchStatus: searchPageStatus.LOADING,
    }),
    [searchPageActionTypes.SEARCH_RESULTS_EMPTY_VIEW]: state => ({
        ...state,
        searchStatus: searchPageStatus.NO_RESULTS,
    }),
    [searchPageActionTypes.SEARCH_RESULTS_ERROR_VIEW]: state => ({
        ...state,
        searchStatus: searchPageStatus.LOADING,
    }),
    [searchPageActionTypes.CURRENT_SEARCH_INFO_SAVE]: (state, { payload: { searchScopeType, searchScopeId, formId, currentSearchTerms } }) => ({
        ...state,
        currentSearchInfo: { searchScopeType, searchScopeId, formId, currentSearchTerms },
    }),
    
    
    [searchPageActionTypes.FALLBACK_SEARCH]: (state, { payload: { relevantFormValues } }) => ({
        ...state,
        fallbackTriggered: true,
        keptFallbackSearchFormValues: relevantFormValues,
        // todo,
        // currentSearchInfo: { searchScopeType, searchScopeId, formId, currentSearchTerms },
    }),
    [searchPageActionTypes.FALLBACK_SEARCH_CLEAN_RELATED_DATA]: state => ({
        ...state,
        fallbackTriggered: false,
        keptFallbackSearchFormValues: {},
    }),
}, 'searchPage', {
    searchStatus: searchPageStatus.INITIAL,
    searchResults: [],
    currentSearchInfo: {},
    currentPage: 0,
    fallbackTriggered: false,
    keptFallbackSearchFormValues: {},
});
