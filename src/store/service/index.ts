import getClient from '../api';

export default {
  getUser(userName: string) {
    return getClient().get('/users/' + userName)
      .then((response: any) => Promise.resolve(response))
      .catch((error: any) => Promise.reject(error));
  },

  getUserRepos(userName: string) {
    return getClient().get(`users/${userName}/repos`)
      .then((response: any) => Promise.resolve(response))
      .catch((error: any) => Promise.reject(error));;
  },

  getReposWatched(userName: string) {
    return getClient().get(`users/${userName}/watched`)
      .then((response: any) => Promise.resolve(response))
      .catch((error: any) => Promise.reject(error));;
  },

};
