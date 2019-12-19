// @flow

import * as React from 'react';
import connect from './connect';
import Search from '../../single/search';
import {
    Row, Col
} from 'reactstrap';

type Props = {
    searchForUser: Function,
};

const SearchContainer = (props: Props) => {

    const { searchForUser } = props;

    return (

        <Row>
            <Col sm="12" md={{ span: 6, offset: 3 }}>
                <Search
                    onSubmit={searchForUser} />
            </Col>
        </Row>
    );
}

export default connect(SearchContainer);
