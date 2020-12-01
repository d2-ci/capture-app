// @flow
import { connect } from 'react-redux';
import FeedbacksSection from './FeedbacksSection.component';

const mapStateToProps = (state: ReduxState, props: Object) => ({
    feedbacks: state.rulesEffectsFeedback[props.dataEntryKey],
});

// $FlowSuppress
export default connect(mapStateToProps, () => ({}))(FeedbacksSection);
