import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import FindBlood from './pages/Findblood'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import FindMatching from './pages/FindMatching'
import Campaigns from './pages/Campaigns'
import Branding from './pages/Brandings'
import Offline from './pages/Offline'
import OurStory from './pages/OurStory'
import Benefits from './pages/Benefits'
import Team from './pages/team'
import Careers from './pages/Careers'
import FAQs from './pages/FAQs'
import ContactUs from './pages/Contact'
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/find-blood" element={<FindBlood />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/find-matching" element={<FindMatching />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/offline" element={<Offline />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App