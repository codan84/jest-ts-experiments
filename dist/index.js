import { foo } from './foo.js';
export const concat = (a, b) => {
    const c = foo(b);
    return `${a} ${c}`;
};
