import * as React from 'react';
import { compose, lifecycle } from 'recompose';
import connect from './connect';
import {
    Row, Col
} from 'reactstrap';
import RepositoryList from '../../single/repos/repositoryList';
import { Repository } from '../../../store/type/repository';

type Props = {
    data: Repository[],
    loading: boolean;
    error: string;
    login:string;
    searchUserRepository: Function,
};

const RepositoryWatchedListContainer = (props: Props) => {

    return (
        <Row style={{ paddingTop: 50 }}>
            <Col sm="12" md={{ size: 8, offset: 1 }}>
            <RepositoryList {...props} />
       </Col>
       </Row>

    );
}

export default compose(
    connect,
    lifecycle({
        componentWillMount: async function () {
            this.props.searchUserRepository(this.props.match.params.login);
        }
    }),
)(RepositoryWatchedListContainer);