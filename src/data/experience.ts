import type { Certification, EducationItem, ExperienceRole } from './types'

export const experience: ExperienceRole[] = [
  {
    title: 'IT Technician',
    organization: 'Capricorn TVET College',
    dates: 'Dec 2023 – July 2024',
    bullets: [
      'Installed and configured software applications.',
      'Provided IT support to staff and students.',
      'Assisted with LAN and Wi-Fi connectivity issues.',
      'Supported printers and other shared IT equipment.',
    ],
  },
  {
    title: 'IT Intern (WIL)',
    organization: 'DSAC GITO',
    dates: '11 Jul 2022 – 11 Jan 2023',
    bullets: [
      'Provided helpdesk support and assisted users with technical issues.',
      'Troubleshot hardware and software problems.',
      'Assisted with Active Directory user accounts and password resets.',
    ],
  },
]

export const education: EducationItem[] = [
  {
    credential: 'Advanced Diploma in Computer Science',
    institution: 'Tshwane University of Technology (TUT)',
    year: '2025',
  },
  {
    credential: 'National Diploma in Information Technology (Software Development)',
    institution: 'Tshwane University of Technology (TUT)',
    year: '2022',
  },
]

export const certifications: Certification[] = [
  {
    name: 'Microsoft Power Platform Fundamentals (PL-900)',
    year: '2025',
  },
  {
    name: 'Microsoft Power BI Data Analyst Associate (PL-300)',
    year: '2025',
  },
]
