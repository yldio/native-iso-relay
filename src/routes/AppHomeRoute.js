import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    newsfeed: () => Relay.QL`
      query {
        newsfeed
      }
    `,
  };
  static routeName = 'AppHomeRoute';
}
