import type { Department } from '@/types';

export const departments: Department[] = [
  { id: '1', name: 'Navigation Department', slug: 'navigation', description: 'The Navigation Department provides comprehensive training in all aspects of ship navigation, voyage planning, and bridge resource management, preparing cadets for deck officer careers.', icon: 'Compass', head: 'Capt. Mohammed Hasan', courses: 12 },
  { id: '2', name: 'Marine Engineering', slug: 'marine-engineering', description: 'The Marine Engineering Department focuses on the operation, maintenance, and management of shipboard machinery, propulsion systems, and auxiliary equipment.', icon: 'Cog', head: 'Dr. Sarah Karim', courses: 10 },
  { id: '3', name: 'Electrical & Electronics', slug: 'electrical-electronics', description: 'The Electrical & Electronics Department trains Electro-Technical Officers in high-voltage systems, automation, and shipboard communication systems.', icon: 'Zap', head: 'Eng. Tanvir Chowdhury', courses: 8 },
  { id: '4', name: 'Safety & Survival', slug: 'safety-survival', description: 'The Safety & Survival Department delivers STCW-mandated safety training including fire fighting, survival techniques, and first aid.', icon: 'ShieldCheck', head: 'Capt. Nuruddin Mahmud', courses: 15 },
  { id: '5', name: 'Maritime Studies', slug: 'maritime-studies', description: 'The Maritime Studies Department covers maritime law, policy, economics, and meteorology, providing the academic foundation for maritime professionals.', icon: 'Scale', head: 'Dr. Fatima Begum', courses: 7 },
  { id: '6', name: 'Security Studies', slug: 'security-studies', description: 'The Security Studies Department offers ISPS Code-compliant training for ship security officers and personnel responsible for vessel security.', icon: 'Lock', head: 'Capt. Rahman Ahmed', courses: 5 },
];
