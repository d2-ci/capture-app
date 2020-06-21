// @flow
import LoadSpecification from '../LoadSpecificationDefinition/LoadSpecification';
import { loadStoreData } from '../loader/storeDataLoaders';
import ApiSpecification from '../../api/ApiSpecificationDefinition/ApiSpecification';

export default function getOrgUnitLevelsLoadSpecification(
    storeName: string = 'programRules',
    apiSpecification: ApiSpecification): LoadSpecification {
    return new LoadSpecification((o) => {
        // $FlowFixMe[incompatible-type-arg] automated comment
        o.loader = loadStoreData;
        o.objectStore = storeName;
    }, apiSpecification);
}
