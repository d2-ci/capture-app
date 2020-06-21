// @flow
import { connect } from 'react-redux';
import IsSelectionsCompleteLevel from './IsSelectionsCompleteLevel.component';

const mapStateToProps = (state: ReduxState) => ({
    isSelectionsComplete: !!state.currentSelections.complete,
});

const mapDispatchToProps = () => ({
});
// $FlowSuppress
// $FlowFixMe[missing-annot] automated comment
export default connect(mapStateToProps, mapDispatchToProps)(IsSelectionsCompleteLevel);
