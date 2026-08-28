/* Minimal translation helper: looks up a key in a locale dictionary and
   fills {placeholders} from vars. Unknown keys return the key itself so a
   missing translation is visible instead of blank. */
import ko from '../locales/ko.js';

const PLACEHOLDER = /\{(\w+)\}/g;

export function createTranslator(dict) {
  return (key, vars = {}) => {
    const template = dict[key];
    if (typeof template !== 'string') return key;
    return template.replace(PLACEHOLDER, (match, name) =>
      Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match
    );
  };
}

export const t = createTranslator(ko);
