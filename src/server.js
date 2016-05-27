import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import renderOnServer from './renderOnServer';
import {Schema} from './data/schema';

const viewDir = path.resolve(__dirname, '../views');
const publicDir = path.resolve(__dirname, '../public');

const GRAPHQL_PORT = 8080;
const graphQLServer = express();

graphQLServer.use('/graphql', graphQLHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true,
}));

graphQLServer.use(express.static(publicDir));
graphQLServer.set('views', viewDir);
graphQLServer.set('view engine', 'ejs');

graphQLServer.get('/', function(req, res, next) {
  renderOnServer(res, next);
});

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`
));
