import { useEffect, useState } from "react"
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  return (
    <div className="relative bg-gray-600 p-4">
      <div className="container mx-auto flex items-center justify-center md:justify-end">
        <div className="relative text-gray-600 w-72">
          <form>
            <input
              type="search"
              name="search"
              id="seatch"
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
              placeholder='Seach Posts'
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-72" />

              <FaSearch className="absolute top-0 right-0 text-block mr-4 mt-3" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search