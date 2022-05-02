import homeMiddleware from './home.js';
import logger from './logger.js';



const middlewares = [
  logger,
  homeMiddleware,
];

export default middlewares;
