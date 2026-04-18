import { register, expandTypesMap } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { formats } from 'style-dictionary/enums';

register(StyleDictionary);

export default {
  source: ['tokens/**/*.tokens.json'],
  preprocessors: ['tokens-studio'],
  expand: {
    typesMap: expandTypesMap
  },
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: 'dist/tokens/css/',
      files: [
        {
          destination: 'variables.css',
          format: formats.cssVariables,
          options: {
            outputReferences: true
          }
        }
      ]
    },
    js: {
      transformGroup: 'tokens-studio',
      transforms: ['name/camel'],
      buildPath: 'dist/tokens/js/',
      files: [
        {
          destination: 'tokens.mjs',
          format: formats.javascriptEsm
        }
      ]
    },
    json: {
      transformGroup: 'tokens-studio',
      transforms: ['name/kebab'],
      buildPath: 'dist/tokens/json/',
      files: [
        {
          destination: 'tokens.json',
          format: formats.jsonNested
        }
      ]
    }
  }
};
