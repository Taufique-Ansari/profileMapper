import { Profile } from '@/types/context';

export const sampleProfiles: Profile[] = [
  {
    id: '1',
    name: 'John Doe',
    title: 'Senior Frontend Developer',
    location: 'New York',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    },
    description: 'Experienced frontend developer with a passion for creating beautiful and performant web applications.',
    skills: ['React', 'TypeScript', 'Node.js'],
    experience: [
      {
        company: 'Tech Corp',
        position: 'Senior Frontend Developer',
        duration: '2020 - Present'
      }
    ],
    education: [
      {
        institution: 'University of Technology',
        degree: 'Bachelor of Computer Science',
        year: '2018'
      }
    ],
    contact: {
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      linkedin: 'linkedin.com/in/johndoe'
    },
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: '2',
    name: 'Jane Smith',
    title: 'Full Stack Developer',
    location: 'London',
    coordinates: {
      lat: 51.5074,
      lng: -0.1278
    },
    description: 'Full stack developer specializing in modern web technologies and cloud architecture.',
    skills: ['Python', 'React', 'AWS'],
    experience: [
      {
        company: 'Digital Solutions',
        position: 'Full Stack Developer',
        duration: '2019 - Present'
      }
    ],
    education: [
      {
        institution: 'London Tech University',
        degree: 'Master of Computer Science',
        year: '2019'
      }
    ],
    contact: {
      email: 'jane@example.com',
      phone: '+44 20 1234 5678',
      linkedin: 'linkedin.com/in/janesmith'
    },
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: '3',
    name: 'Alex Johnson',
    title: 'Backend Developer',
    location: 'Tokyo',
    coordinates: {
      lat: 35.6762,
      lng: 139.6503
    },
    description: 'Backend developer with expertise in scalable systems and microservices architecture.',
    skills: ['Node.js', 'Python', 'Docker'],
    experience: [
      {
        company: 'Global Tech',
        position: 'Backend Developer',
        duration: '2021 - Present'
      }
    ],
    education: [
      {
        institution: 'Tokyo Institute of Technology',
        degree: 'Bachelor of Engineering',
        year: '2020'
      }
    ],
    contact: {
      email: 'alex@example.com',
      phone: '+81 3 1234 5678',
      linkedin: 'linkedin.com/in/alexjohnson'
    },
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  }
]; 