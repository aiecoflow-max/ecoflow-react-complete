import { useState } from 'react'

export default function Layout({ children }) {
  const [lang, setLang] = useState('en')
  const toggleLang = () => setLang(lang === 'en' ? 'ko' : 'en')

  return (
    <div>
      <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-semibold">EcoFlow</h1>
        <div>
          <button onClick={toggleLang} className="text-sm px-4 py-1 rounded hover:underline">
            {lang === 'en' ? '한국어' : 'English'}
          </button>
        </div>
      </header>
      <main>{children}</main>
      <footer className="text-center p-4 text-sm opacity-60">© 2025 EcoFlow AI</footer>
    </div>
  )
}