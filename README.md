# jest-ts-test

There are 2 separate issues with the config:
1. running `npm run test` works fine, but when you uncomment the usage of `image-type` module (ES module) you will get an error (it looks like something is still trying to transpile it?):
```
Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /Users/danielgruszczyk/workspace/priv/jest-ts-test/node_modules/image-type/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import {fileTypeFromBuffer} from 'file-type';
                                                                                      ^^^^^^

    SyntaxError: Cannot use import statement outside a module

    > 1 | import imageType from 'image-type'
```

2. when running `npm run testExp` nothing works, instead you get the following error:
```
    ReferenceError: exports is not defined

      1 | import { expect, jest, test, describe } from '@jest/globals'
    > 2 |
        | ^
      3 | import { concat } from '../src/index.js'
      4 | // import { logStuff } from './helpers'
      5 |

      at test/index.test.ts:2:23
```
