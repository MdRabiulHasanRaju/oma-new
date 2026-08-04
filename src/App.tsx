import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import FloatingContact from './components/layouts/FloatingContact';
import ScrollToTopButton from './components/layouts/ScrollToTopButton';
import ScrollToTop from './components/layouts/ScrollToTop';
import SearchDialog from './components/layouts/SearchDialog';
import PageLoader from './components/layouts/PageLoader';
import ErrorBoundary from './components/layouts/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetails = lazy(() => import('./pages/CourseDetails'));
const Admissions = lazy(() => import('./pages/Admissions'));
const ApplyOnline = lazy(() => import('./pages/ApplyOnline'));
const Verification = lazy(() => import('./pages/Verification'));
const Notices = lazy(() => import('./pages/Notices'));
const News = lazy(() => import('./pages/News'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Departments = lazy(() => import('./pages/Departments'));
const Faculty = lazy(() => import('./pages/Faculty'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Careers = lazy(() => import('./pages/Careers'));
const Downloads = lazy(() => import('./pages/Downloads'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const location = useLocation();
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Navbar />
      <SearchDialog />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <Suspense key={location.pathname} fallback={<PageLoader />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:slug" element={<CourseDetails />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/admissions/apply" element={<ApplyOnline />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/notices" element={<Notices />} />
              <Route path="/news" element={<News />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingContact />
      <ScrollToTopButton />
    </ErrorBoundary>
  );
}

export default App;
