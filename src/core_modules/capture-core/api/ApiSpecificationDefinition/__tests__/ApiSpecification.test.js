// @flow
import ApiSpecification from '../ApiSpecification';
import getterTypes from '../../fetcher/getterTypes.const';

// MOCK getData
import getData from '../../fetcher/apiFetchers';

// $FlowFixMe[cannot-resolve-name] automated comment
jest.mock('../../fetcher/apiFetchers');
const mockGetData = jest.fn();
// $FlowFixMe[prop-missing] automated comment
getData.mockImplementation(mockGetData);
// ---

const baseSpec = {
    modelName: 'programs',
    modelGetterType: getterTypes.LIST,
    queryParams: {
        base: 'base',
    },
    converter: d2Model => d2Model,
};

// $FlowFixMe[cannot-resolve-name] automated comment
it('create', () => {
    const spec = new ApiSpecification((o) => {
        Object.assign(o, baseSpec);
    });
    // $FlowFixMe[cannot-resolve-name] automated comment
    expect(spec.modelName).toEqual(baseSpec.modelName);
    expect(spec.modelGetterType).toEqual(baseSpec.modelGetterType);
});

it('updateQuery params', () => {
    const spec = new ApiSpecification((o) => {
        Object.assign(o, baseSpec);
    });
    spec.updateQueryParams({ test: 'test' });
    // $FlowFixMe[cannot-resolve-name] automated comment
    // $FlowFixMe[incompatible-use] automated comment
    expect(spec.queryParams.test).toEqual('test');
    // $FlowFixMe[incompatible-use] automated comment
    expect(spec.queryParams.base).toEqual('base');
});

it('set filter', () => {
    const spec = new ApiSpecification((o) => {
        Object.assign(o, baseSpec);
    });
    spec.setFilter('filter');
    // $FlowFixMe[cannot-resolve-name] automated comment
    // $FlowFixMe[incompatible-use] automated comment
    expect(spec.queryParams.filter[0]).toEqual('filter');
    // $FlowFixMe[incompatible-use] automated comment
    expect(spec.queryParams.base).toEqual('base');
});

it('get data', () => {
    const spec = new ApiSpecification((o) => {
        Object.assign(o, baseSpec);
    });
    spec.get();
    // $FlowFixMe[cannot-resolve-name] automated comment
    expect(mockGetData).toBeCalled();
});
