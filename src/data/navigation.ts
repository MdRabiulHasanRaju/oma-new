export const siteConfig = {
  name: 'Ocean Maritime Academy',
  shortName: 'OMA',
  tagline: 'World-Class Maritime Education',
  description:
    'A premier maritime training institution delivering internationally accredited maritime education, cadet programs, and STCW courses.',
  url: 'https://omabd.com',
  email: 'info@omabd.com',
  phone: '+880 1610 662266',
  address: 'Shangu Beribadh, Salimpur, Fauzdarhat, Sitakunda, Chattogram',
  dhakaOffice: 'House 12, Road 5, Gulshan-1, Dhaka 1212, Bangladesh',
  social: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
    instagram: 'https://instagram.com',
  },
  founded: 2012,
};

export const mainNav = [
  { title: 'Home', href: '/' },
  {
    title: 'About',
    href: '/about',
    children: [
      { title: 'Company Profile', href: '/about' },
      { title: 'Mission & Vision', href: '/about#mission-vision' },
      { title: 'Chairman Message', href: '/about#chairman' },
      { title: 'Principal Message', href: '/about#principal' },
      { title: 'Facilities', href: '/facilities' },
      { title: 'Campus', href: '/about#campus' },
    ],
  },
  {
    title: 'Courses',
    href: '/courses',
    children: [
      { title: 'All Courses', href: '/courses' },
      { title: 'Pre-Sea Training', href: '/courses?level=Pre-Sea' },
      { title: 'Post-Sea Training', href: '/courses?level=Post-Sea' },
      { title: 'STCW Courses', href: '/courses?level=STCW' },
      { title: 'Degree Programs', href: '/courses?level=Degree' },
      { title: 'Specialized Courses', href: '/courses?level=Specialized' },
    ],
  },
  {
    title: 'Admissions',
    href: '/admissions',
    children: [
      { title: 'Admission Process', href: '/admissions' },
      { title: 'Online Admission', href: '/admissions/apply' },
      { title: 'Download Forms', href: '/downloads' },
      { title: 'Eligibility', href: '/admissions#eligibility' },
      { title: 'Fees', href: '/admissions#fees' },
    ],
  },
  { title: 'Verification', href: '/verification' },
  { title: 'Notices', href: '/notices' },
  { title: 'News & Events', href: '/news' },
  { title: 'Gallery', href: '/gallery' },
  {
    title: 'More',
    href: '#',
    children: [
      { title: 'Departments', href: '/departments' },
      { title: 'Faculty', href: '/faculty' },
      { title: 'Training Facilities', href: '/facilities' },
      { title: 'Careers', href: '/careers' },
      { title: 'Downloads', href: '/downloads' },
      { title: 'FAQ', href: '/faq' },
      { title: 'Contact', href: '/contact' },
    ],
  },
];
