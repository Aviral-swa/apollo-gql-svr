import { homesSubscription } from '../modules/homes';

jest.mock(
  '../subscriptions', () => ({
    pubsub: {
      asyncIterator: () => 'mutation done',
    },
    HOMES_ADDED: 'HOMES_ADDED',
  }),
);

describe('WS Config Subscription', () => {
  it('WS config subscription', async () => {
    const { homesAdded } = homesSubscription;
    expect(homesAdded.subscribe()).toBe('mutation done');
  });
});
