import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { POST_PER_PAGE } from '@/config/index'
import Pagination from '@/components/Pagination'
import { files, getPosts } from '@/lib/posts'

export default function BlogPage({ posts, numPages, currentPage }) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Blog</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      <Pagination numPages={numPages} currentPage={currentPage} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const numPages = Math.ceil(files.length / POST_PER_PAGE)

  let paths = []

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() }
    })
  }

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1)
  const numPages = Math.ceil(files.length / POST_PER_PAGE)
  const pageIndex = page - 1
  const orderedPost = getPosts().slice(pageIndex * POST_PER_PAGE, page * POST_PER_PAGE)

  return {
    props: {
      posts: orderedPost,
      numPages,
      currentPage: page
    }
  }
}