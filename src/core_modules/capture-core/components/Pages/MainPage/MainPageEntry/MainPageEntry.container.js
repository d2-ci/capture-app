// @flow
import { connect } from 'react-redux';
import withErrorMessageHandler from '../../../../HOC/withErrorMessageHandler';
import withLoadingIndicator from '../../../../HOC/withLoadingIndicator';
import MainPageSelector from '../MainPageSelector/MainPageSelector.container';

const mapStateToProps = (state: ReduxState) => ({
    error: state.mainPage.selectionsError,
    ready: !state.mainPage.isLoading,
});


// $FlowFixMe[missing-annot] automated comment
export default connect(mapStateToProps, () => ({}))(
    withLoadingIndicator()(
        withErrorMessageHandler()(MainPageSelector),
    ));
