# jest-ts-test

Using `Ava` with the `Typescript` and `ESM`: https://github.com/avajs/ava/blob/HEAD/docs/recipes/typescript.md
Using `Testdouble` with `ESM`: https://github.com/testdouble/testdouble.js/blob/main/docs/7-replacing-dependencies.md#how-module-replacement-works-for-es-modules-using-import

Working Ava (no testdouble): https://github.com/codan84/jest-ts-experiments/tree/ava

To run tests:
```
yarn install
NODE_OPTIONS="--loader=ts-node/esm --loader=testdouble" npm run test

//or rely on ava config in package.json and:
yarn test
```
