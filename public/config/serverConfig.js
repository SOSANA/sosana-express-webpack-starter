/**
 * Purpose of this File:
 *  - hold application secrets and config
 *  - remember this should always be hidden and never pushed to github or shared
 *  	but for development purposes we are sharing this
 *  - don't forget to add it to .gitignore file in future
 */

const serverConfig = {
  port: process.env.PORT || 3000,
};

export default serverConfig;
