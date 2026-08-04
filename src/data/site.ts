import type { Partner, Testimonial, DownloadItem, CareerItem, AdmissionStep, MessageContent } from '@/types';

export const partners: Partner[] = [
  { id: '1', name: 'Department of Shipping', logo: '🚢', type: 'Government' },
  { id: '2', name: 'Directorate General of Shipping', logo: '⚓', type: 'Government' },
  { id: '3', name: 'IMO', logo: '🌐', type: 'Government' },
  { id: '4', name: 'Bureau Veritas', logo: '✓', type: 'Industry' },
  // { id: '5', name: 'DNV', logo: '◆', type: 'Industry' },
  // { id: '6', name: 'Maersk Line', logo: '★', type: 'Industry' },
  // { id: '7', name: 'Mitsui OSK', logo: '◐', type: 'Industry' },
  // { id: '8', name: 'World Maritime University', logo: '🎓', type: 'Academic' },
  // { id: '9', name: 'Singapore Maritime Academy', logo: '⚓', type: 'Academic' },
  // { id: '10', name: 'Nippon Foundation', logo: '◆', type: 'Academic' },
  { id: '11', name: 'ISO 9001:2015 Certification', logo: '◆', type: 'Academic' },
];

export const testimonials: Testimonial[] = [
  { id: '1', name: 'Capt. Imran Khan', role: 'Master Mariner', company: 'Maersk Line', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 5, quote: 'OMA gave me the foundation I needed to reach the rank of Master Mariner. The simulator training and faculty mentorship were exceptional. I still apply the principles I learned here every day at sea.' },
  { id: '2', name: 'Chief Eng. Nadia Sultana', role: 'Chief Engineer', company: 'MSC Mediterranean', image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 5, quote: 'The engineering department at OMA is world-class. The hands-on workshop training and engine room simulator prepared me for real-world challenges. I am proud to be an OMA alumna.' },
  { id: '3', name: '2nd Officer Fahim Ahmed', role: 'Deck Officer', company: 'CMA CGM', image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 5, quote: 'From the first day to the passing out parade, OMA shaped me into a confident maritime professional. The discipline, knowledge, and values instilled here set me apart in the global shipping industry.' },
  { id: '4', name: 'ETO Rashed Mahmud', role: 'Electro-Technical Officer', company: 'Hapag-Lloyd', image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400', rating: 5, quote: 'The ETO program at OMA is incredibly thorough. The high-voltage training and automation labs gave me exactly the skills the industry demands. I secured my first ship placement within weeks of graduation.' },
];

export const downloads: DownloadItem[] = [
  { id: '1', title: 'Admission Application Form', category: 'Admissions', fileSize: '1.2 MB', format: 'PDF', url: '#' },
  { id: '2', title: 'Medical Fitness Certificate', category: 'Admissions', fileSize: '0.8 MB', format: 'PDF', url: '#' },
  { id: '3', title: 'Course Brochure 2026', category: 'General', fileSize: '5.4 MB', format: 'PDF', url: '#' },
  { id: '4', title: 'Fee Structure — All Programs', category: 'Admissions', fileSize: '0.5 MB', format: 'PDF', url: '#' },
  { id: '5', title: 'Cadet Code of Conduct', category: 'General', fileSize: '0.9 MB', format: 'PDF', url: '#' },
  { id: '6', title: 'STCW Course Schedule Q1 2026', category: 'Courses', fileSize: '0.3 MB', format: 'PDF', url: '#' },
  { id: '7', title: 'Scholarship Application Form', category: 'Admissions', fileSize: '0.7 MB', format: 'PDF', url: '#' },
  { id: '8', title: 'Academic Calendar 2026', category: 'General', fileSize: '0.4 MB', format: 'PDF', url: '#' },
  { id: '9', title: 'Certificate Verification Guide', category: 'General', fileSize: '0.6 MB', format: 'PDF', url: '#' },
  { id: '10', title: 'Prospectus — BSc Nautical Science', category: 'Courses', fileSize: '2.1 MB', format: 'PDF', url: '#' },
];

export const careers: CareerItem[] = [
  { id: '1', title: 'Senior Lecturer — Marine Engineering', department: 'Engineering', location: 'Chittagong Campus', type: 'Full-time', deadline: '2026-02-15', description: 'We are seeking an experienced marine engineer to lead advanced courses in marine propulsion and engine room management. Candidates must hold a Chief Engineer Certificate of Competency (Class I) and have a minimum of 5 years teaching experience.' },
  { id: '2', title: 'Simulator Instructor — Navigation', department: 'Navigation', location: 'Chittagong Campus', type: 'Full-time', deadline: '2026-02-28', description: 'An exciting opportunity for a Master Mariner to deliver bridge simulator training using our Kongsberg Polaris system. Candidates should have a minimum of 3 years experience as a navigating officer and familiarity with bridge simulators.' },
  { id: '3', title: 'STCW Safety Instructor', department: 'Safety', location: 'Chittagong Campus', type: 'Contract', deadline: '2026-01-30', description: 'We are looking for a qualified STCW instructor to deliver fire fighting and survival training courses. Candidates must hold relevant STCW instructor certifications and have practical experience in emergency response.' },
  { id: '4', title: 'Admissions Officer', department: 'Administration', location: 'Dhaka Liaison Office', type: 'Full-time', deadline: '2026-02-10', description: 'An administrative role managing student admissions, counseling prospective cadets and parents, and coordinating with the academic departments. A degree in management and 3 years experience in educational administration is required.' },
];

export const admissionSteps: AdmissionStep[] = [
  { id: '1', step: 1, title: 'Online Application', description: 'Submit your application through our online portal with required documents and application fee.', icon: 'FileText' },
  { id: '2', step: 2, title: 'Document Verification', description: 'Our admissions team reviews your academic credentials and verifies all submitted documents.', icon: 'ClipboardCheck' },
  { id: '3', step: 3, title: 'Medical Examination', description: 'Complete a medical fitness examination at a DG Shipping-approved medical center.', icon: 'Stethoscope' },
  { id: '4', step: 4, title: 'Written & Oral Assessment', description: 'Appear for a written aptitude test and oral interview conducted by the academic panel.', icon: 'PenLine' },
  { id: '5', step: 5, title: 'Admission Confirmation', description: 'Receive your admission offer, pay the course fee, and confirm your enrollment.', icon: 'CheckCircle' },
];

export const chairmanMessage: MessageContent = {
  name: 'Maruf Md. Jahirul Islam',
  role: 'Chairman & Managing Director, Ocean Maritime Academy',
  image: '/images/maruf(md).jpg',
  message: 'Welcome to Ocean Maritime Academy. For over 25 years, we have been committed to shaping the maritime leaders of tomorrow through excellence in education, training, and discipline. Our vision is to be a globally recognized maritime institution that produces world-class seafarers who serve with integrity, professionalism, and pride. We believe that quality maritime education is the cornerstone of a thriving blue economy, and we are dedicated to providing our cadets with the knowledge, skills, and values they need to excel on the world\'s oceans. I invite you to join us on this journey of excellence.',
  signature: 'Maruf Md. Jahirul Islam',
};

export const principalMessage: MessageContent = {
  name: 'Capt. Quazi Nawsher Uz Zaman',
  role: 'Principal, Ocean Maritime Academy',
  image: '/images/principal.jpg',
  message: 'At Ocean Maritime Academy, we believe that maritime education is not just about passing examinations — it is about building character, discipline, and a deep sense of responsibility. Our curriculum is designed to meet the highest international standards, and our faculty brings decades of sea-going experience into the classroom. We are proud of our state-of-the-art training facilities, our strong industry partnerships, and most importantly, our cadets who go on to serve with distinction on vessels across the globe. I warmly welcome you to our academy and look forward to supporting your journey to becoming a maritime professional.',
  signature: 'Capt. Quazi Nawsher Uz Zaman',
};
