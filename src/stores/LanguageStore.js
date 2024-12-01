import { makeAutoObservable } from 'mobx';
import i18n from './../i18n';

class LanguageStore {
  language = 'en';

  constructor() {
    makeAutoObservable(this);
  }

  setLanguage(lang) {
    this.language = lang;
    i18n.changeLanguage(lang);
  }
}

const languageStore = new LanguageStore();
export default languageStore;