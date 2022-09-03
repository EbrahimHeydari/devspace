import Link from "next/link"

const CategoryLabel = ({ children }) => {
  const colorKey = {
    JavaScript: 'orange',
    CSS: 'blue',
    Python: 'green',
    PHP: 'violet',
    Ruby: 'red'
  }

  return (
    <div className={`px-2 py-1 bg-${colorKey[children]}-500 text-gray-100 font-bold rounded mb-0`}>
      <Link href={`/blog/category/${children.toLowerCase()}`}>
        {children}
      </Link>
    </div>
  )
}

export default CategoryLabel