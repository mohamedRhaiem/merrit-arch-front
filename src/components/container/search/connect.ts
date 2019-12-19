import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { fetchRequest } from '../../../store/saga/user/actions';

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    searchForUser: (name: string) => dispatch(fetchRequest(name)),
});

export default connect(null, mapDispatchToProps);
