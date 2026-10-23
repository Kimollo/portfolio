export type SkillLevel = 'used' | 'learning'

export interface SkillItem {
  name: string
  level: SkillLevel
}

export interface SkillGroup {
  title: string
  items: SkillItem[]
}

export interface Project {
  id: string
  name: string
  blurb: string
  stack: string[]
  tags: string[]
  repoUrl: string
  liveUrl?: string
  screenshot?: string
}

export interface ExperienceRole {
  title: string
  organization: string
  dates: string
  bullets: string[]
}

export interface EducationItem {
  credential: string
  institution: string
  year?: string
}

export interface Certification {
  name: string
  year: string
}

export interface Profile {
  name: string
  location: string
  headline: string
  summary: string
  email: string
  phone: string
  github: string
  linkedin: string
  portrait: string
  cv: string
}
