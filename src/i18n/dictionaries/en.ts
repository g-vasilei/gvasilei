import { ExperienceItem } from '../../app/data/data'

const en = {
  meta: {
    title: 'Georgios Vasileiou | Full Stack Developer',
    description:
      'Full stack developer based in Thessaloniki, Greece. Specialising in React, Next.js, Node.js and modern web technologies. Available for freelance projects.',
  },
  nav: [
    { id: 1, name: 'Experience', link: '#experience' },
    { id: 2, name: 'Portfolio', link: '#portfolio' },
    { id: 3, name: 'Contact', link: '#contact' },
  ],
  hero: {
    tagline: 'Your full stack developer',
    cta: 'Get in touch',
    cv: 'Download CV',
  },
  experience: {
    items: [
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
    ] as ExperienceItem[],
  },
  portfolio: {
    heading: 'Portfolio',
  },
  contact: {
    heading: 'Contact',
    lets: "LET'S",
    work: 'WORK',
    together: 'TOGETHER',
    description:
      "Have a project in mind, a question, or just want to say hi? Fill in the form and I'll get back to you as soon as possible.",
    location: 'Based in Thessaloniki, Greece',
    availability: 'Available for freelance projects',
    fields: {
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      message: 'Message',
    },
    placeholders: {
      name: 'Georgios Vasileiou',
      email: 'hello@example.com',
      phone: '69X XXX XXXX',
      message: 'Tell me about your project...',
    },
    submit: 'Send Message',
    submitting: 'Sending...',
    success: {
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you as soon as possible.",
      again: 'Send another message',
    },
    error: 'Something went wrong. Please try again.',
  },
}

export default en
