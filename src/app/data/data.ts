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

export interface PortfolioItem {
  id: number
  title: string
  img: StaticImageData
  url: string
  color: string
}

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
