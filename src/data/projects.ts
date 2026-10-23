import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'ngoka-enterprise',
    name: 'Ngoka Enterprise',
    blurb:
      'Single-page website for Ngoka Enterprise in Semorishi, with a staff admin page to update prices and stock.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    tags: ['Frontend', 'Full-stack'],
    repoUrl: 'https://github.com/Kimollo/Ngoka-Enterprise',
    liveUrl: 'https://ngoka-enterprise.netlify.app/',
    screenshot: '/ngoka-enterprise.png',
  },
  {
    id: 'helpdesk-system',
    name: 'Helpdesk System',
    blurb:
      'Full-stack support desk for customers, agents, and admins — JWT auth, role-based access, and a decoupled Spring Boot API with a React frontend.',
    stack: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
    ],
    tags: ['Full-stack', 'Backend'],
    repoUrl: 'https://github.com/Kimollo/helpdesk-system',
    liveUrl: 'https://helpdesk-system-snowy.vercel.app',
  },
  {
    id: 'market-analytics-dashboard',
    name: 'Market Analytics Dashboard',
    blurb:
      'Live cryptocurrency analytics dashboard (CryptoPulse): global market KPIs, multi-timeframe charts, and a searchable top-20 market table powered by the CoinGecko API.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts'],
    tags: ['Frontend'],
    repoUrl: 'https://github.com/Kimollo/market-analytics-dashboard',
    liveUrl: 'https://market-analytics-dashboard-three.vercel.app',
  },
  {
    id: 'sterling-barber-store',
    name: 'Sterling Row Barbers',
    blurb:
      'Responsive static website for Sterling Row, a fictional neighbourhood barbershop in De Waterkant, Cape Town — services, barbers, visit info, and in-browser booking.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    tags: ['Frontend'],
    repoUrl: 'https://github.com/Kimollo/Sterling-Barber-Store',
    liveUrl: 'https://sterling-row-barbers.netlify.app/',
  },
]

export const projectFilters = ['All', 'Frontend', 'Backend', 'Full-stack'] as const

export type ProjectFilter = (typeof projectFilters)[number]
