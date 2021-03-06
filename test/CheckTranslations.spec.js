import _ from 'lodash'
import ar_translations from '@/lang/ar'
import de_translations from '@/lang/de'
import en_translations from '@/lang/en'
import fr_translations from '@/lang/fr'
import en_mx_translations from '@/lang/es-mx'
import id_translations from '@/lang/id'
import ja_translations from '@/lang/ja'
import ms_translations from '@/lang/ms'
import my_translations from '@/lang/my'
import pt_br_translations from '@/lang/pt-br'
import sv_translations from '@/lang/sv'
import ta_translations from '@/lang/ta'
import tl_translations from '@/lang/tl'
import vi_translations from '@/lang/vi'

describe('Translations', () => {
  describe.each([
    ['ar', 'Arabic', ar_translations],
    ['de', 'German', de_translations],
    ['es-mx', 'Mexican Spanish', en_mx_translations],
    ['fr', 'French', fr_translations],
    ['id', 'Bahasa Indonesia', id_translations],
    ['ja', 'Japanese', ja_translations],
    ['ms', 'Bahasa Melayu', ms_translations],
    ['my', 'Burmese', my_translations],
    ['pt-br', 'Portuguese', pt_br_translations],
    ['sv', 'Svenska', sv_translations],
    ['ta', 'Tamil', ta_translations],
    ['tl', 'Tagalog', tl_translations],
    ['vi', 'Vietnamese', vi_translations],
  ])('in (%s) %s', (languageCode, languageName, languageTranslations) => {
    test('should have the same number of translation entries', () => {
      expect(_.keys(en_translations).length).toBe(_.keys(languageTranslations).length)
    });

    test('should have the same keys', () => {
      _.each(en_translations, (value, key) => {
        if (typeof(value) === 'object') {
          const objectKey = languageTranslations[key];

          _.each(value, (value2, nestedKey) => {
            if (!_.has(objectKey, nestedKey)) {
              console.log(`[${languageCode}] Missing key:`, nestedKey);
            }

            expect(_.has(objectKey, nestedKey)).toBe(true);
          })
        }
        else {
          if (!_.has(languageTranslations, key)) {
            console.log(`[${languageCode}] Missing key:`, key);
          }

          expect(_.has(languageTranslations, key)).toBe(true);
        }
      })
    })
  });
})
