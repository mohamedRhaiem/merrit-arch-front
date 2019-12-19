
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Col, Card,CardImg, CardText, CardBody,
  CardSubtitle, Spinner, Alert
} from 'reactstrap';

import { User } from '../../store/type/user'

type Props = {
  user: User,
  loading: boolean,
  error: string
};

const Result = (props: Props) => {

  const { user, loading, error } = props;

  if (loading) return <Spinner style={{ width: '3rem', height: '3rem', margin: 'auto', display: 'block' }} type="grow" />
  if (error) return <Alert color="danger">{error}</Alert>;
  if (!user.login) return null;

  return (

    <Card>
      <CardBody>
        {user.name && (<React.Fragment><h1>{user.name}</h1></React.Fragment>)}
        {user.location && (<React.Fragment><CardSubtitle>Location: {user.location}</CardSubtitle></React.Fragment>)}
      </CardBody>
      <CardImg top width="100%" src={user.avatar_url} />
      <CardBody>
        <div>
          {user.bio && (
            <React.Fragment>
              <h3>Bio</h3>
              <p>{user.bio}</p>
            </React.Fragment>
          )}
          <a href={user.html_url} className='btn btn-dark'>
            Visit Github Profile
          </a>
          <ul>
            {user.login && (<li>

              <React.Fragment>
                <strong>Username: </strong> {user.login}
              </React.Fragment>

            </li>
            )}
            {user.company && (
              <li>

                <React.Fragment>
                  <strong>Company: </strong> {user.company}
                </React.Fragment>

              </li>
            )}
            {user.blog && (
              <li>

                <React.Fragment>
                  <strong>Website: </strong> {user.blog}
                </React.Fragment>

              </li>
            )}
          </ul>
        </div>
        <Row>
          <Col> <CardText className='badge badge-dark'>Followers: {user.followers}</CardText></Col>
          <Col> <CardText className='badge badge-dark'>Following: {user.following}</CardText></Col>
          <Col> <CardText className='badge badge-dark'>Public Repos: {user.public_repos}</CardText></Col>
          <Col> <CardText className='badge badge-dark'>Public Gists: {user.public_gists}</CardText></Col>
        </Row>

        <Row style={{ paddingTop: 50 }}>
          <Col> <Link to={`/user/${user.login}/repositories`} className='btn btn-dark'>
            User Repositories
        </Link></Col>
          <Col>  <Link to={`/user/${user.login}/watched`} className='btn btn-dark'>
            Watched Repositories
        </Link></Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Result;