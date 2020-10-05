import { createAction } from '@reduxjs/toolkit';
import { actionCreator } from '../../../actions/actions.utils';

export const searchPageActionTypes = {
    TO_MAIN_PAGE_NAVIGATE: 'NavigateToMainPage',
};

export const searchViaUniqueIdOnScopeTrackedEntityType = createAction(
    'search/searchViaAttributesOnScopeTrackedEntityType',
  ({ trackedEntityTypeId, formId }) => ({ trackedEntityTypeId, formId }),
);
export const searchViaUniqueIdOnScopeProgram = createAction(
    'search/searchViaAttributesOnScopeTrackedEntityType',
  ({ programId, formId }) => ({ payload: { programId, formId } }),
);
export const searchViaAttributesOnScopeTrackedEntityType = createAction(
    'search/searchViaAttributesOnScopeTrackedEntityType',
    ({ trackedEntityTypeId, formId, page = 1 }) => ({ payload: { trackedEntityTypeId, formId, page } }),
);

export const searchViaAttributesOnScopeProgram = createAction(
    'search/searchViaAttributesOnScopeTrackedEntityType',
  ({ programId, formId, page = 1 }) => ({ payload: { programId, formId, page = 1 } }),
);

export const navigateToMainPage = () => actionCreator(searchPageActionTypes.TO_MAIN_PAGE_NAVIGATE)();

