import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', level: 'used' },
      { name: 'JavaScript', level: 'used' },
      { name: 'SQL', level: 'used' },
      { name: 'TypeScript', level: 'used' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Spring Boot', level: 'used' },
      { name: 'REST APIs', level: 'used' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 'used' },
      { name: 'Next.js', level: 'used' },
      { name: 'HTML', level: 'used' },
      { name: 'CSS', level: 'used' },
      { name: 'Tailwind CSS', level: 'used' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', level: 'used' },
      { name: 'MySQL', level: 'used' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', level: 'used' },
      { name: 'GitHub', level: 'used' },
      { name: 'Power BI', level: 'used' },
      { name: 'Power Platform', level: 'used' },
    ],
  },
]
