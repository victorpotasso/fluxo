import homeMiddleware from './home';
import logger from './logger';



const middlewares = [
  logger,
  homeMiddleware,
];

export default middlewares;
