import { expect } from 'chai'
import 'mocha'

import { slugify } from './slugify'


describe('slugify', () => {
    var cases = [
        ['hello', 'hello'],
        ['hello123', 'hello123'],
        ['is it me youre looking for', 'is-it-me-youre-looking-for'],
        ['this  is something', 'this-is-something'],
        ['Capital idea', 'capital-idea']
    ];

    for (let [before, after] of cases) {
        it (`should turn "${before}" into "${after}`, () => {
            expect(slugify(before)).to.equal(after);
        });
    }
});
