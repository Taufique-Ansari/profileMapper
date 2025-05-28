import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
  onThemeToggle: () => void
  currentTheme: 'light' | 'dark'
}

export const Layout = ({ children, onThemeToggle, currentTheme }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onThemeToggle={onThemeToggle} currentTheme={currentTheme} />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  )
} 