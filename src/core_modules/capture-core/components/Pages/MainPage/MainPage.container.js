// @flow
import { connect } from 'react-redux';
import MainPage from './MainPage.component';

const mapStateToProps = (state: ReduxState) => ({
    currentSelectionsComplete: !!state.currentSelections.complete,
});

// $FlowSuppress
// $FlowFixMe[missing-annot] automated comment
export default connect(mapStateToProps)(MainPage);
