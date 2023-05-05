# jest-ts-test

Using `Ava` with the `Typescript` and `ESM`: https://github.com/avajs/ava/blob/HEAD/docs/recipes/typescript.md
Using `Testdouble` with `ESM`: https://github.com/testdouble/testdouble.js/blob/main/docs/7-replacing-dependencies.md#how-module-replacement-works-for-es-modules-using-import

Working Ava (no testdouble): https://github.com/codan84/jest-ts-experiments/tree/ava

To run tests:
```
NODE_OPTIONS="--loader=testdouble --loader=ts-node/esm" npm run test
```
