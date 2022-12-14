import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '@/components/Layout'
import CategoryLabel from '@/components/CategoryLabel'
import { marked } from 'marked'
import { files } from '@/lib/posts'

const PostPage = ({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content }) => {
  return (
    <Layout title={title}>
      <Link href='/blog'>Go Back</Link>
      <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-5xl mb-7">{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img src={cover_image} className='w-full rounded' alt='cover' />

        <div className="flex justify-between items-center rounded bg-gray-100 p-2 my-8">
          <div className="flex items-center">
            <img
              alt='author'
              src={author_image}
              className="mx-4 w-10 h-10 object-full rounded-full hidden sm:block rounded-md" />
            <h4>{author}</h4>
          </div>
          <div className="mr-4">
            {date}
          </div>
        </div>

        <div className="blog-text mt-2">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  )
}

export default PostPage

export async function getStaticPaths() {
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf-8')

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      content,
      slug
    }
  }
}