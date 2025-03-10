import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Recommendations from './components/Recommendation'
import { AuthProvider } from "./AuthContext"; // ✅ Correct path


function App() {
  return (
  <>
    <AuthProvider>
      <Navbar />
      <HeroSection />
      <Recommendations />
    </AuthProvider>
  </>
  )
}

export default App
