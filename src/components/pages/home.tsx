import * as React from 'react';
import SearchContainer from '../../components/container/search';
import ResultContainer from '../../components/container/result';
import {
    Container
} from 'reactstrap';

const Home = () => (
    <Container fluid style={{ padding: 50 }}>
        <SearchContainer />
        <ResultContainer />
    </Container>
);

export default Home;