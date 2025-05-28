interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-gray-200 dark:border-gray-700 ${className}`}
        style={{
          borderTopColor: 'var(--color-primary-500)',
        }}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

// Full page loading spinner
export const FullPageSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
    <LoadingSpinner size="lg" />
  </div>
)

// Inline loading spinner
export const InlineSpinner = () => (
  <div className="inline-flex items-center">
    <LoadingSpinner size="sm" className="mr-2" />
    <span className="text-sm text-gray-600 dark:text-gray-400">Loading...</span>
  </div>
) 