import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { fetchRequest } from '../../../store/saga/repository/actions';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    searchUserRepository: (name: string) => dispatch(fetchRequest(name)),
});

const mapStateToProps = (reducer) => {
    return {
        data: reducer.repository.data,
        loading: reducer.repository.loading,
        error: reducer.repository.error

    }
};

export default connect(mapStateToProps,mapDispatchToProps);

