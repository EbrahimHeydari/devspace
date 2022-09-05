import { getPosts } from '@/lib/posts'

export default function handler(req, res) {
  if (process.env.NODE_ENV === 'production') {
    // @todo - fetch from cache
  }

  const results = getPosts().filter(({ frontmatter: { title, excerpt, category } }) =>
    title.toLowerCase().indexOf(req.query.q) != -1 ||
    excerpt.toLowerCase().indexOf(req.query.q) != -1 ||
    category.toLowerCase().indexOf(req.query.q) != -1
  )

  res.status(200).json({ results })
}
