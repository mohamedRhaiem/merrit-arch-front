import * as React from 'react';
import { Repository } from '../../../store/type/repository';

type Props = {
  repository: Repository,
};

const RepositoryItem = (props:Props) => {
    return (
      <div className='card'>
        <h3>
          <a href={props.repository.html_url}>{props.repository.name}</a>
        </h3>
      </div>
    );
  };
  
  export default RepositoryItem;
  