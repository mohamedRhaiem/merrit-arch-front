import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  CardImg, Spinner, Alert
} from 'reactstrap';

import { User } from '../../store/type/user'

type Props = {
  user: User,
  loading: boolean,
  error: string;
};

const Result = (props: Props) => {
  const { user, loading, error } = props;

  if (loading) return <Spinner style={{ width: '3rem', height: '3rem', margin: 'auto', display: 'block' }} type="grow" />
  if (error) return <Alert color="danger">{error}</Alert>;
  if (!user.login) return null;

  return (
    <div className='card text-center'>
      <CardImg top width="100%" src={user.avatar_url} />
      <h3>{user.login}</h3>
      <div>
        <Link to={`/user/${user.login}`} className='btn btn-dark btn-sm'>
          More about {user.login}
        </Link>
      </div>
    </div>
  );
};

export default Result;
