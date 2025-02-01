const AuthenticationsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'authentications',
  version: '1.0.0',
  register: async (server, {
    authenticationsService,
    usersService,
    tokenManager,
    validator,
  }) => {
    // console.log('Registering authentications plugin'); // ADD THIS
    const authenticationsHandler = new AuthenticationsHandler(
      authenticationsService,
      usersService,
      tokenManager,
      validator,
    );
    // console.log('Authentications handler created'); // ADD THIS
    server.route(routes(authenticationsHandler));
  },
};
