import * as React from 'react';
import connect from './connect';
import Result from '../../single/result';
import { User } from '../../../store/type/user';
import {
    Row, Col
} from 'reactstrap';

type Props = {
    user: User,
    loading: boolean;
    error: string;
};

const ResultContainer = (props: Props) => {

    return (
        <Row style={{ paddingTop: 50 }}>
            <Col sm="12" md={{ size: 6, offset: 2 }}>
                <Result {...props} />
            </Col>
        </Row>
    );
}

export default connect(ResultContainer);
