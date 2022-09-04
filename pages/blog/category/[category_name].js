import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '@/components/Post'
import Layout from '@/components/Layout'
import { files, getPosts } from '@/lib/posts'

export default function CategoryBlogPage({ posts, category_name }) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Posts in {category_name}</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const categories = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return frontmatter.category.toLowerCase()
  })

  const paths = categories.map(category => ({
    params: { category_name: category }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { category_name } }) {
  // filter by category
  const categoryPosts = getPosts().filter(post => post.frontmatter.category.toLowerCase() === category_name)

  return {
    props: {
      category_name,
      posts: categoryPosts
    }
  }
}