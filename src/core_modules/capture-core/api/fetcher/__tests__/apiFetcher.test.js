// @flow
import getData from '../../fetcher/apiFetchers';
import getterTypes from '../getterTypes.const';

import getD2 from '../../../d2/d2Instance';

// $FlowFixMe[cannot-resolve-name] automated comment
jest.mock('../../../d2/d2Instance');
// $FlowFixMe[prop-missing] automated comment
getD2.mockImplementation(() => ({
    models: {
        programs: {
            [getterTypes.LIST]: async () => ({
                values: () => [
                    {
                        id: '1',
                    },
                ],
            }),
            [getterTypes.GET]: async () => ({
                id: '1',
            }),
        },
    },
}));

// $FlowFixMe[cannot-resolve-name] automated comment
it('get list data', async () => {
    // $FlowFixMe[incompatible-call] automated comment
    const programs = await getData('programs', getterTypes.LIST, null, convertValue => convertValue);
    // $FlowFixMe[cannot-resolve-name] automated comment
    expect(programs[0].id).toEqual('1');
});

it('get item data', async () => {
    // $FlowFixMe[incompatible-call] automated comment
    const program = await getData('programs', getterTypes.GET, { id: '1' }, convertValue => convertValue);
    // $FlowFixMe[cannot-resolve-name] automated comment
    expect(program.id).toEqual('1');
});

it('try to get item data with no queryParams object specified', async () => {
    const program = await getData('programs', getterTypes.GET, null, convertValue => convertValue);
    // $FlowFixMe[cannot-resolve-name] automated comment
    expect(program).toBeNull();
});

it('try to get item data with no id in queryParams', async () => {
    const program = await getData('programs', getterTypes.GET, { id: null }, convertValue => convertValue);
    // $FlowFixMe[cannot-resolve-name] automated comment
    expect(program).toBeNull();
});
