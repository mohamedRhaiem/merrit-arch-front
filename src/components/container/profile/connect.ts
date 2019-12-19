import { connect } from 'react-redux';

const mapStateToProps = (reducer) => {
    return {
        user: reducer.user.data,
        loading: reducer.user.loading,
        error: reducer.user.error
    }
};

export default connect(mapStateToProps);
