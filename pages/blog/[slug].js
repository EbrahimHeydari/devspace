import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const PostPage = ({
  frontmatter: { title, category, data, cover_image, author, author_image },
  content, slug }) => {
  return (
    <div>

    </div>
  )
}

export default PostPage

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  console.log('paths:', paths);

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