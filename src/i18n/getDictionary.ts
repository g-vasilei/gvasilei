import en from './dictionaries/en'
import el from './dictionaries/el'

export type Dictionary = typeof en

const dictionaries = { en, el }

export type Locale = keyof typeof dictionaries

export const locales: Locale[] = ['en', 'el']
export const defaultLocale: Locale = 'en'

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}
