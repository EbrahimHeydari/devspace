import Image from "next/image"
import Link from "next/link"
import CategoryLabel from "./CategoryLabel"

const Post = ({ post, compact }) => {
  return (
    <div className="w-full px-10 py-6 border border-gray-100 rounded-lg shadow-md mt-6 bg-gray-50">
      {!compact && (
        <Image
          src={post.frontmatter.cover_image}
          width={600} height={420}
          alt='cover'
          className='mb-4 rounded' />
      )}

      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">
          {post.frontmatter.date}
        </span>
        <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
      </div>

      <div className="mt-2">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-2xl text-gray-700 font-bold hover:underline">
            {post.frontmatter.title}
          </a>
        </Link>
        <p className="mt-2 text-gray-600">
          {post.frontmatter.excerpt}
        </p>
      </div>
      {(!compact &&
        <div className="flex justify-betweeb items-center mt-6">
          <Link href={`/blog/${post.slug}`}>
            <a className="text-gray-900 hover:text-blue-600">Read More</a>
          </Link>
          <div className="flex items-center">
            <img
              alt="author"
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
              src={post.frontmatter.author_image}
            />
            <h3 className="text-gray-700 font-bold">
              {post.frontmatter.author}
            </h3>
          </div>
        </div>
      )}
    </div>
  )
}

export default Post