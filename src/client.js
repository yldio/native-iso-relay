'use strict';
/*global window: false */
/*global document: false */

import React from 'react';
window.React = React;

import Relay from 'react-relay';

import ReactDOM from 'react-dom';
import AppContainerWeb from './containers/AppContainer.web';
import AppHomeRoute from './routes/AppHomeRoute';
import IsomorphicRelay from 'isomorphic-relay';

const environment = new Relay.Environment();

environment.injectNetworkLayer(new Relay.DefaultNetworkLayer('/graphql'));

const data = JSON.parse(document.getElementById('preloadedData').textContent);

IsomorphicRelay.injectPreparedData(environment, data);

const rootElement = document.getElementById('root');

const rootContainerProps = {
  Container: AppContainerWeb,
  queryConfig: new AppHomeRoute(),
};

IsomorphicRelay.prepareInitialRender({ ...rootContainerProps, environment }).then(props => {
  ReactDOM.render(<IsomorphicRelay.Renderer {...props} />, rootElement);
});
