// @flow
import { ofType } from 'redux-observable';
import { catchError, flatMap, map, startWith } from 'rxjs/operators';
import { of, from, empty, concat } from 'rxjs';
import { isObject, isString } from 'd2-utilizr/src';
import { push } from 'connected-react-router';
import {
    fallbackPushPage,
    fallbackSearch,
    searchPageActionTypes,
    showEmptyResultsViewOnSearchPage,
    showErrorViewOnSearchPage,
    showLoadingViewOnSearchPage,
    showSuccessResultsViewOnSearchPage,
} from '../SearchPage.actions';
import { getTrackedEntityInstances } from '../../../../trackedEntityInstances/trackedEntityInstanceRequests';
import {
    getTrackedEntityTypeThrowIfNotFound,
    getTrackerProgramThrowIfNotFound,
} from '../../../../metaData';
import { navigateToTrackedEntityDashboard } from '../sharedUtils';
import { PAGINATION } from '../SearchPage.constants';
import { urlThreeArguments } from '../../../../utils/url';

const getFiltersForUniqueIdSearchQuery = (formValues) => {
    const fieldId = Object.keys(formValues)[0];
    return [`${fieldId}:eq:${formValues[fieldId]}`];
};

const searchViaUniqueIdStream = (queryArgs, attributes, scopeSearchParam) =>
    from(getTrackedEntityInstances(queryArgs, attributes)).pipe(
        flatMap(({ trackedEntityInstanceContainers }) => {
            const searchResults = trackedEntityInstanceContainers;
            if (searchResults.length > 0) {
                const { id, tei: { orgUnit: orgUnitId } } = searchResults[0];
                navigateToTrackedEntityDashboard(id, orgUnitId, scopeSearchParam);
                return empty();
            }
            return of(showEmptyResultsViewOnSearchPage());
        }),
        startWith(showLoadingViewOnSearchPage()),
        catchError(() => of(showErrorViewOnSearchPage())),
    );

const getFiltersForAttributesSearchQuery = (formValues) => {
    const stringFilters = Object.keys(formValues)
        .filter(fieldId => isString(formValues[fieldId]))
        .filter(fieldId => formValues[fieldId].replace(/\s/g, '').length)
        .map(fieldId => `${fieldId}:like:${formValues[fieldId]}`);

    const rangeFilers = Object.keys(formValues)
        .filter(fieldId => isObject(formValues[fieldId]))
        .filter(fieldId => ('from' in formValues[fieldId] && 'to' in formValues[fieldId]))
        .map(fieldId => `${fieldId}:ge:${formValues[fieldId].from}:le:${formValues[fieldId].to}`);

    return [...stringFilters, ...rangeFilers];
};
const searchViaAttributesStream = (queryArgs, attributes, triggeredFrom) =>
    from(getTrackedEntityInstances(queryArgs, attributes)).pipe(
        map(({ trackedEntityInstanceContainers: searchResults, pagingData }) => {
            if (searchResults.length > 0) {
                return showSuccessResultsViewOnSearchPage(
                    searchResults,
                    pagingData.currentPage,
                );
            }

            if (searchResults.length === 0 && triggeredFrom === PAGINATION) {
                return showSuccessResultsViewOnSearchPage(
                    [],
                    pagingData.currentPage,
                );
            }

            return showEmptyResultsViewOnSearchPage();
        }),
        startWith(showLoadingViewOnSearchPage()),
        catchError(() => of(showErrorViewOnSearchPage())),
    );

export const searchViaUniqueIdOnScopeProgramEpic = (action$: InputObservable, store: ReduxStore) =>
    action$.pipe(
        ofType(searchPageActionTypes.VIA_UNIQUE_ID_ON_SCOPE_PROGRAM_SEARCH),
        flatMap(({ payload: { formId, programId } }) => {
            const { formsValues } = store.value;
            const queryArgs = {
                filter: getFiltersForUniqueIdSearchQuery(formsValues[formId]),
                program: programId,
                pageNumber: 1,
                ouMode: 'ACCESSIBLE',
            };

            const attributes = getTrackerProgramThrowIfNotFound(programId).attributes;

            return searchViaUniqueIdStream(queryArgs, attributes, `program=${programId}`);
        }),
    );


export const searchViaUniqueIdOnScopeTrackedEntityTypeEpic = (action$: InputObservable, store: ReduxStore) =>
    action$.pipe(
        ofType(searchPageActionTypes.VIA_UNIQUE_ID_ON_SCOPE_TRACKED_ENTITY_TYPE_SEARCH),
        flatMap(({ payload: { formId, trackedEntityTypeId } }) => {
            const { formsValues } = store.value;
            const queryArgs = {
                filter: getFiltersForUniqueIdSearchQuery(formsValues[formId]),
                trackedEntityType: trackedEntityTypeId,
                pageNumber: 1,
                ouMode: 'ACCESSIBLE',
            };

            const attributes = getTrackedEntityTypeThrowIfNotFound(trackedEntityTypeId).attributes;

            return searchViaUniqueIdStream(queryArgs, attributes, `trackedEntityType=${trackedEntityTypeId}`);
        }),
    );

export const searchViaAttributesOnScopeProgramEpic = (action$: InputObservable, store: ReduxStore) =>
    action$.pipe(
        ofType(searchPageActionTypes.VIA_ATTRIBUTES_ON_SCOPE_PROGRAM_SEARCH),
        flatMap(({ payload: { formId, programId, page, triggeredFrom } }) => {
            const { formsValues } = store.value;

            const queryArgs = {
                filter: getFiltersForAttributesSearchQuery(formsValues[formId]),
                program: programId,
                page,
                pageSize: 5,
                ouMode: 'ACCESSIBLE',
                fields: '*',
            };
            const attributes = getTrackerProgramThrowIfNotFound(programId).attributes;

            return searchViaAttributesStream(queryArgs, attributes, triggeredFrom);
        }),
    );

export const searchViaAttributesOnScopeTrackedEntityTypeEpic = (action$: InputObservable, store: ReduxStore) =>
    action$.pipe(
        ofType(searchPageActionTypes.VIA_ATTRIBUTES_ON_SCOPE_TRACKED_ENTITY_TYPE_SEARCH),
        flatMap(({ payload: { formId, trackedEntityTypeId, page, triggeredFrom } }) => {
            const { formsValues } = store.value;
            const values = formsValues[formId];
            const filter = getFiltersForAttributesSearchQuery(values);
            const queryArgs = {
                filter,
                trackedEntityType: trackedEntityTypeId,
                page,
                pageSize: 5,
                ouMode: 'ACCESSIBLE',
            };

            const attributes = getTrackedEntityTypeThrowIfNotFound(trackedEntityTypeId).attributes;

            return searchViaAttributesStream(queryArgs, attributes, triggeredFrom);
        }),
    );

export const startFallbackSearchEpic = (action$: InputObservable, store: ReduxStore) =>
    action$.pipe(
        ofType(searchPageActionTypes.START_FALLBACK_SEARCH),
        flatMap(({ payload: { formId, programId, pageSize } }) => {
            const trackerProgram = getTrackerProgramThrowIfNotFound(programId);
            if (trackerProgram.trackedEntityType) {
                const { orgUnitId } = store.value.currentSelections;
                const { id: trackedEntityTypeId } = trackerProgram.trackedEntityType;

                const { formsValues } = store.value;
                const values = formsValues[formId];
                return concat(
                    of(fallbackPushPage({ orgUnitId, trackedEntityTypeId })),
                    of(fallbackSearch({ relevantFormValues: values, trackedEntityTypeId, pageSize })),
                );
            }

            return empty();
        }),
    );

export const fallbackSearchEpic = (action$: InputObservable) =>
    action$.pipe(
        ofType(searchPageActionTypes.FALLBACK_SEARCH),
        flatMap(({ payload: { relevantFormValues, trackedEntityTypeId, pageSize, page } }) => {
            const filter = getFiltersForAttributesSearchQuery(relevantFormValues);
            const queryArgs = {
                filter,
                trackedEntityType: trackedEntityTypeId,
                page,
                pageSize,
                ouMode: 'ACCESSIBLE',
            };

            const attributes = getTrackedEntityTypeThrowIfNotFound(trackedEntityTypeId).attributes;

            return from(getTrackedEntityInstances(queryArgs, attributes)).pipe(
                map(({ trackedEntityInstanceContainers: searchResults, pagingData }) => {
                    if (searchResults.length > 0) {
                        return showSuccessResultsViewOnSearchPage(searchResults, pagingData.currentPage);
                    }

                    return of(showEmptyResultsViewOnSearchPage());
                }),
                startWith(showLoadingViewOnSearchPage()),
                catchError(() => of(showErrorViewOnSearchPage())),
            );
        }),
    );

export const fallbackPushPageEpic = (action$: InputObservable) =>
    action$.pipe(
        ofType(searchPageActionTypes.FALLBACK_SEARCH_ROUTER_PUSH),
        map(({ payload: { orgUnitId, trackedEntityTypeId } }) =>
            push(urlThreeArguments({ orgUnitId, trackedEntityTypeId }))),
    );
