import { SSTConfig } from 'sst';

export default {
  config() {
    return {
      name: 'insurance',
      region: 'us-west-2',
    };
  },
  stacks() {},
} satisfies SSTConfig;
