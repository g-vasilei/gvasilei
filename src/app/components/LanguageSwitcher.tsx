'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import type { Locale } from '../../i18n/getDictionary'

const LanguageSwitcher = () => {
  const params = useParams()
  const currentLocale = params.locale as Locale

  return (
    <div className="flex items-center gap-1 text-sm font-semibold" aria-label="Language switcher">
      <Link
        href="/en"
        aria-label="Switch to English"
        aria-current={currentLocale === 'en' ? 'true' : undefined}
        className={`transition-colors duration-200 ${
          currentLocale === 'en' ? 'text-yellow' : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </Link>
      <span className="text-gray-600" aria-hidden="true">
        /
      </span>
      <Link
        href="/el"
        aria-label="Αλλαγή σε Ελληνικά"
        aria-current={currentLocale === 'el' ? 'true' : undefined}
        className={`transition-colors duration-200 ${
          currentLocale === 'el' ? 'text-yellow' : 'text-gray-400 hover:text-white'
        }`}
      >
        GR
      </Link>
    </div>
  )
}

export default LanguageSwitcher
