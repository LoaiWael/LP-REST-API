export interface Skill {
  id: string
  title: string
  icon: string
  techUsage?: string
}

export interface Contributor {
  id?: string
  name: string
  position: string
  photo?: string
  communication: string
}

export interface Work {
  id?: string
  title: string
  quickDoc: string
  photoPrev: string
  creationDate: string
  doc: string
  technologies: Skill[]
  contributors: Contributor[]
  src: string[]
  numOfImages: number
  images: string[]
}

export interface Experience {
  id?: string
  role: string
  orgName: string
  orgLogoUrl: string
  startDate: Date
  endDate: Date
  description: string
}