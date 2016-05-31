'use strict';
/*global window: false */

import React, { Component } from 'react';
window.React = React;

import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay';

import AppContainerNative from './containers/AppContainer.native';
import AppHomeRoute from './routes/AppHomeRoute';

Relay.injectNetworkLayer(
  new DefaultNetworkLayer('http://192.168.1.16:8080/graphql')
);

export default class NewsfeedApp extends Component {
  render(): void {
    return (
      <RootContainer
        Component={AppContainerNative}
        route={new AppHomeRoute()}
      />
    );
  }
}
