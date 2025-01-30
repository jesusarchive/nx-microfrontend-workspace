import { ModuleFederationConfig } from '@nx/rspack/module-federation';

const config: ModuleFederationConfig = {
  name: 'spa-rickandmorty',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
