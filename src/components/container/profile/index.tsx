import * as React from 'react';
import connect from './connect';
import Profile from '../../single/profile';
import { User } from '../../../store/type/user';
import {
    Row, Col
} from 'reactstrap';

type Props = {
    user: User,
    loading: boolean;
    error: string;
};

const ProfileContainer = (props: Props) => {

    return (
        <Row style={{ paddingTop: 50 }}>
            <Col sm="12" md={{ size: 8, offset: 1 }}>
                <Profile {...props} />
            </Col>
        </Row>
    );
}

export default connect(ProfileContainer);
