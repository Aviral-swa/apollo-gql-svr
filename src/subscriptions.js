import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const HOMES_ADDED = 'HOMES_ADDED';

const FILE_UPLOADED = 'FILE_UPLOADED';


export {
  pubsub,
  HOMES_ADDED,
  FILE_UPLOADED,
};
