import Hapi from '@hapi/hapi';
import 'babel-polyfill';
import Inert from 'inert';
import { matchRoutes } from 'react-router-config';
import Routes from './shared/Routes/routes';
import renderer from './server/index';
import createStore from './server/createStore';

const initializeServer = async () => {
    
    const server = new Hapi.Server({
        port: 3000,
        host: 'localhost',
    });
    await server.register(Inert);

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const store = createStore();

            // logic to fetch data into redux store
            /**
             * fetchData is a promise returned by all the loadData functions
             */
           const fetchedData =  matchRoutes(Routes, request.url.pathname).map(({ route }) => {
              return route.loadData ? route.loadData(store) : null;
            });

            return Promise.all(fetchedData).then((res) => {
              return renderer(request.url.pathname, store);
            });
        }
    });

    server.route(
        {
          method: 'GET',
          path: '/public/{param*}',
          options: {
            handler: {
              directory: {
                path: 'public'
              }
            },
          }
        });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

initializeServer();