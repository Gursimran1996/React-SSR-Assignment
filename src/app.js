import Hapi from '@hapi/hapi';
import 'babel-polyfill';
import Inert from 'inert';
import renderer from './server/index';

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
            return renderer();
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