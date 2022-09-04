import Link from "next/link"


const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage = `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  if (numPages == 1)
    return <></>

  return (
    <div className="mt-6">
      <ul className="flex pl-0 list-none my-2">
        {!isFirst && (
          <Link href={`${prevPage}`}>
            <li className="relative py-2 px-3 block leading-tight bg-white border 
            border-gray text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
              Previous
            </li>
          </Link>
        )}

        {Array.from({ length: numPages }, (_, index) => (
          <Link href={`/blog/page/${index+ 1}`}>
            <li className="relative py-2 px-3 block leading-tight bg-white border 
          border-gray text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
              {index + 1}
            </li>
          </Link>
        ))}

        {!isLast && (
          <Link href={`${nextPage}`}>
            <li className="relative py-2 px-3 block leading-tight bg-white border 
            border-gray text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
              Next
            </li>
          </Link>
        )}
      </ul>
    </div>
  )
}

export default Pagination