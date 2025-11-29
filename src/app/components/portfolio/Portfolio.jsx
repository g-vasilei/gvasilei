import React from 'react'
import Card from './Card'
import Link from 'next/link'
import { portfolio } from '../../data/data'
import Heading from '../Heading'

const Portfolio = () => {
  return (
    <section
      className="min-h-[100vh] py-36 md:py-8 lg:py-10 flex flex-col gap-14 lg:gap-24 h-fit"
      id="portfolio"
    >
      <div>
        <Heading>Portfolio</Heading>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
        {portfolio?.map((project) => (
          <Link key={project.id} href={project.url} target="_blank">
            <Card
              title={project.title}
              img={project.img}
              color={project.color}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
