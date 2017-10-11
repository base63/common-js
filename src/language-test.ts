import { expect } from 'chai'
import 'mocha'

import { LanguageMarshaller } from './language'

const languages = require('iso-639-1');


describe('LanguageMarshaller', () => {
    const NonLanguageCodes = [
        '',
        'hello',
        'CZ'
    ];

    describe('extract', () => {
        for (let langCode of languages.getAllCodes()) {
            it (`should parse "${langCode}"`, () => {
                const languageMarshaller = new LanguageMarshaller();
                expect(languageMarshaller.extract(langCode)).to.equal(langCode);
            });
        }

        for (let nonLangCode of NonLanguageCodes) {
            it (`should throw for non-lang-code "${nonLangCode}`, () => {
                const languageMarshaller = new LanguageMarshaller();
                expect(() => languageMarshaller.extract(nonLangCode)).to.throw('Expected a valid language');
            });
        }
    });

    describe('pack', () => {
        for (let langCode of languages.getAllCodes()) {
            it (`should produce the same input for "${langCode}`, () => {
                const languageMarshaller = new LanguageMarshaller();
                expect(languageMarshaller.pack(langCode)).to.equal(langCode);
            })
        }
    });

    describe('extract and pack', () => {
        for (let langCode of languages.getAllCodes()) {
            it (`should be opposites for "${langCode}"`, () => {
                const languageMarshaller = new LanguageMarshaller();

                const raw = langCode;
                const extracted = languageMarshaller.extract(raw);
                const packed = languageMarshaller.pack(extracted);

                expect(packed).to.equal(raw);
            })
        }
    });
})
