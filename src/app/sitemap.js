export default function sitemap() {
  const baseUrl = 'https://gvasilei.com'

  const pages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  return [...pages]
}
