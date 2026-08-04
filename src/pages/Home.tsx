import { Helmet } from 'react-helmet-async';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import LatestNotices from '@/components/home/LatestNotices';
import StatsCounter from '@/components/home/StatsCounter';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import LatestNews from '@/components/home/LatestNews';
import CampusFacilities from '@/components/home/CampusFacilities';
import AdmissionTimeline from '@/components/home/AdmissionTimeline';
import Testimonials from '@/components/home/Testimonials';
import VideoSection from '@/components/home/VideoSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import PartnersSection from '@/components/home/PartnersSection';
import MessagesSection from '@/components/home/MessagesSection';
import FAQSection from '@/components/home/FAQSection';
import NewsletterCTA from '@/components/home/NewsletterCTA';

export default function Home() {
  return (
    <>
      <Helmet><title>Ocean Maritime Academy | World-Class Maritime Education</title><meta name="description" content="Ocean Maritime Academy — a premier maritime training institution offering internationally accredited cadet programs, STCW courses, and degree programs. Start your maritime career with OMA." /></Helmet>
      <Hero />
      <LatestNotices />
      <AboutSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <StatsCounter />
      <LatestNews />
      <CampusFacilities />
      <AdmissionTimeline />
      <Testimonials />
      <VideoSection />
      <GalleryPreview />
      <PartnersSection />
      <MessagesSection />
      <FAQSection />
      <NewsletterCTA />
    </>
  );
}
