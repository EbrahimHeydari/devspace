import Link from "next/link"

const CategoryLabel = ({ children }) => {
  const colorKey = {
    JavaScript: 'orange',
    CSS: 'blue',
    Python: 'yellow',
    PHP: 'violet',
    Ruby: 'red'
  }

  return (
    <div className={`px-2 py-1 bg-${colorKey[children]}-400 text-gray-100 font-bold rounded`}>
      <Link href={`/blog/category/${children.toLowerCase()}`}>
        {children}
      </Link>
    </div>
  )
}

export default CategoryLabel