/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from 'graphql-relay';

import {
Newsfeed,
Article,
getNewsfeed,
getArticles,
getArticle,
} from './database';

const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    const {type, id} = fromGlobalId(globalId);
    if (type === 'Newsfeed') {
      return getNewsfeed();
    } else if (type === 'Article') {
      return getArticle(id);
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof Newsfeed) {
      return newsfeedType;
    } else if (obj instanceof Article)  {
      return articleType;
    } else {
      return null;
    }
  }
);

const newsfeedType = new GraphQLObjectType({
  name: 'Newsfeed',
  description: 'my newsfeed',
  fields: () => ({
    id: globalIdField('Newsfeed'),
    articles: {
      type: articleConnection,
      description: 'articles',
      args: connectionArgs,
      resolve: (newsfeed, args) => connectionFromArray(getArticles(), args),
    },
  }),
  interfaces: [nodeInterface],
});

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'an article',
  fields: () => ({
    id: globalIdField('Article'),
    title: {
      type: GraphQLString,
      description: 'The title',
    },
    author: {
      type: GraphQLString,
      description: 'The author',
    },
    text: {
      type: GraphQLString,
      description: 'The body of the article',
    },
    description: {
      type: GraphQLString,
      description: 'The description of the article',
    },
    link: {
      type: GraphQLString,
      description: 'The link of the article',
    },
    mainImage: {
      type: GraphQLString,
      description: 'The image of the article',
    },
    pubdate: {
      type: GraphQLString,
      description: 'The publication date of the article',
    },
  }),
  interfaces: [nodeInterface],
});

const {connectionType: articleConnection} =
  connectionDefinitions({name: 'Article', nodeType: articleType});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    newsfeed: {
      type: newsfeedType,
      resolve: () => getNewsfeed(),
    },
    article: {
      type: articleType,
      resolve: (id) => getArticle(id),
    },
  }),
});

export const Schema = new GraphQLSchema({
  query: queryType,
});


