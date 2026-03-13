import { StaticImageData } from 'next/image'
import grummpy from '../../../public/portfolio/grumpy.png'
import dynamo from '../../../public/portfolio/dynamo.png'

export interface ExperienceItem {
  id: number
  title: string
  displayedTitle: string
  subTitle: string
  date: string
  description: string
}

export interface NavigationLink {
  id: number
  name: string
  link: string
}

export interface PortfolioItem {
  id: number
  title: string
  img: StaticImageData
  url: string
  color: string
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    title: 'Freelancer',
    displayedTitle: 'Freelance',
    subTitle: 'Full Stack',
    date: 'Jan 2020 - Now',
    description:
      'Experienced freelance developer specializing in creating custom professional applications using the MERN stack, single-page applications (SPAs) with experience in Next.js, and building and customizing e-commerce solutions with WooCommerce to meet unique client needs.',
  },
  {
    id: 2,
    title: 'Deloitte',
    displayedTitle: 'Deloitte',
    subTitle: 'Full Stack',
    date: 'Jan 2024 - Sep 2025',
    description:
      'Contributing to major projects while adhering to professional standards such as Agile methodology, ensuring high-quality development and efficient team collaboration.',
  },
  {
    id: 3,
    title: 'Bratnet Software Solution',
    displayedTitle: 'Bratnet',
    subTitle: 'Full Stack',
    date: 'Oct 2025 - Now',
    description:
      'Developing backend services for an invoicing platform and various internal projects using Node.js, Express, and TypeScript, along with building responsive and maintainable front-end interfaces using React.',
  },
]

export const navigationLinks: NavigationLink[] = [
  {
    id: 1,
    name: 'Experience',
    link: '#experience',
  },
  {
    id: 2,
    name: 'Portfolio',
    link: '#portfolio',
  },
  {
    id: 3,
    name: 'Contact',
    link: '#contact',
  },
]

export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    title: 'grumpy.gr',
    img: grummpy,
    url: 'https://grumpy.gr',
    color: '#fff',
  },
  {
    id: 2,
    title: 'dynamo.gr',
    img: dynamo,
    url: 'https://dynamo.gr',
    color: '#ff2323',
  },
  // {
  //   id: 2,
  //   title: 'e-geokipos.gr',
  //   img: dynamo,
  //   url: 'https://e-geokipos.gr',
  //   color: '#55775E',
  // },
]
