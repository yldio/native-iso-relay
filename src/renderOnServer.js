import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Relay from 'react-relay';
import IsomorphicRelay from 'isomorphic-relay';
import path from 'path';
import AppContainerWeb from './containers/AppContainer.web';
import AppHomeRoute from './routes/AppHomeRoute';

const GRAPHQL_URL = 'http://localhost:8080/graphql';
const networkLayer = new Relay.DefaultNetworkLayer(GRAPHQL_URL);

export default (res, next) => {
  const rootContainerProps = {
    Container: AppContainerWeb,
    queryConfig: new AppHomeRoute(),
  };
  IsomorphicRelay.prepareData(rootContainerProps, networkLayer)
    .then(({data, props}) => {
      const reactOutput = ReactDOMServer.renderToString(<IsomorphicRelay.Renderer {...props} />);

      try {
        res.render(path.resolve(__dirname, '..', 'views', 'index.ejs'), {
          preloadedData: JSON.stringify(data),
          reactOutput,
        });
      } catch(err) {
        console.log(err);
      }
    }, next);
};

