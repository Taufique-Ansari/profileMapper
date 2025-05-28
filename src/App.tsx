import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Navigation } from '@/components/layout/Navigation'
import { HomePage } from '@/pages/HomePage'
import { ProfilesPage } from '@/pages/ProfilesPage'
import { ProfileDetailsPage } from '@/pages/ProfileDetailsPage'
import { AdminDashboard } from '@/pages/AdminDashboard'
import { LoginPage } from '@/pages/LoginPage'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { AppProvider } from '@/context/AppContext'

export const App = () => {
  return (
    <AppProvider>
      <Router>
        <Helmet>
          <title>Profile Mapping App</title>
          <meta name="description" content="A modern profile mapping application" />
          <meta name="keywords" content="profiles, mapping, networking, professionals, location" />
          <meta property="og:title" content="Profile Mapping App" />
          <meta property="og:description" content="Discover and connect with professionals around the world through an interactive map interface." />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Profile Mapping App" />
          <meta name="twitter:description" content="Discover and connect with professionals around the world through an interactive map interface." />
        </Helmet>

        <ErrorBoundary>
          <div className="min-h-screen bg-background dark:bg-background-dark">
            <Navigation />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profiles" element={<ProfilesPage />} />
                <Route path="/profiles/:id" element={<ProfileDetailsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
          </div>
        </ErrorBoundary>
      </Router>
    </AppProvider>
  )
}
