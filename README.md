# Profile Mapping Application

A modern, responsive web application built with React and TypeScript that allows users to explore profiles and visualize their locations on an interactive map.

## 🚀 Features

### Core Functionality
- **Profile Display**: Browse through a collection of user profiles with photos and descriptions
- **Interactive Mapping**: Visualize profile locations on an integrated map with markers
- **Profile Details**: View detailed information about each profile
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile devices

### Advanced Features
- **Admin Dashboard**: Complete CRUD operations for profile management
- **Search & Filter**: Real-time search and filtering capabilities
- **Map Integration**: Interactive map with Mapbox or Google Maps
- **Loading States**: Professional loading indicators and error handling
- **Dark/Light Theme**: Theme switching capability
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context API / Zustand
- **Map Service**: Mapbox GL JS / Google Maps API
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite
- **Icons**: Lucide React
- **HTTP Client**: Axios

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn
- Git

## 🏁 Getting Started

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd profile-mapping-app
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add your API keys:

```env
# Map Service API Key (choose one)
VITE_MAPBOX_ACCESS_TOKEN=your_mapbox_token_here
# or
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key_here

# App Configuration
VITE_APP_TITLE=Profile Mapping App
VITE_API_BASE_URL=http://localhost:3001
```

### 4. Start Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### 5. Start JSON Server (for backend simulation)
In a separate terminal:
```bash
npm run server
# or
yarn server
```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components
│   ├── profile/         # Profile-related components
│   ├── map/            # Map components
│   ├── search/         # Search and filter components
│   └── admin/          # Admin dashboard components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── context/            # React Context providers
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global styles
└── data/               # Sample data and mock APIs
```

## 🎯 Key Components

### ProfileCard
Displays individual profile information with photo, name, and description.

### MapView
Interactive map component showing profile locations with markers.

### SearchBar & FilterPanel
Real-time search and filtering functionality.

### AdminDashboard
Complete profile management interface for administrators.

## 🔧 Configuration

### Map Service Setup

#### Option 1: Mapbox (Recommended)
1. Sign up at [Mapbox](https://www.mapbox.com/)
2. Get your access token
3. Add to `.env` file as `VITE_MAPBOX_ACCESS_TOKEN`

#### Option 2: Google Maps
1. Enable Google Maps JavaScript API in Google Cloud Console
2. Get your API key
3. Add to `.env` file as `VITE_GOOGLE_MAPS_API_KEY`

### Theme Configuration
The app supports light and dark themes. Modify `tailwind.config.js` to customize colors:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { /* your primary colors */ },
        secondary: { /* your secondary colors */ },
      }
    }
  }
}
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start JSON Server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🧪 Testing

Run the test suite:
```bash
npm run test         # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

## 📱 Mobile Responsiveness

The application is fully responsive with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- High contrast support
- Focus management

## 🔒 Admin Access

To access the admin dashboard:
1. Navigate to `/admin`
2. Use the login credentials:
   - Username: `admin`
   - Password: `admin123`

## 🌍 Sample Data

The application includes sample profiles with diverse locations:
- Mix of urban and rural locations
- International addresses for map testing
- Various profile types and interests
- Professional placeholder images

## 🛠️ Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow React best practices and patterns
- Use functional components with hooks
- Implement proper error boundaries
- Add loading states for async operations

### Component Guidelines
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop validation
- Use meaningful component and prop names

### State Management
- Use local state for component-specific data
- Use Context API for global state
- Implement proper error handling
- Cache API responses when appropriate

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Popular Platforms

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

#### GitHub Pages
```bash
npm run build
npm run deploy
```

## 🔍 Performance Optimization

- Lazy loading for map component
- Image optimization and lazy loading
- Bundle splitting and code splitting
- Memoization for expensive calculations
- Virtual scrolling for large lists

## 🐛 Troubleshooting

### Common Issues

1. **Map not loading**: Check API key configuration in `.env`
2. **Profiles not displaying**: Ensure JSON server is running
3. **Build errors**: Run `npm run type-check` to identify TypeScript issues
4. **Styling issues**: Verify Tailwind CSS configuration

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Ensure environment variables are set correctly
4. Check if all required services are running

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation for common solutions
- Review the troubleshooting section

---

**Note**: This application is created as part of a frontend development case study and demonstrates modern React development practices and interactive mapping capabilities.
