import * as React from 'react';
import { Spinner } from 'reactstrap';
import RepositoryItem from './repositoryItem';
import { Repository } from '../../../store/type/repository';

type Props = {
    data: Repository[],
    loading: boolean;
};

const RepositoryList = (props: Props) => {

    if (props.loading) return <Spinner style={{ width: '3rem', height: '3rem', margin: 'auto', display: 'block' }} type="grow" />

    return (<React.Fragment>  {props.data.map(repo => <RepositoryItem repository={repo} key={repo.id} />)}</React.Fragment>)
        ;
};

export default RepositoryList;
