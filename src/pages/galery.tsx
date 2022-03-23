import { SearchIcon } from '@heroicons/react/solid'
import { NextPage } from 'next'

const Galery: NextPage = () => {
 return (
  <div>
   <div className="galeryWrapper flex bg-red-500 items-center justify-center w-full">
    <button className="bg-secondary-blue h-10 w-10 flex items-center justify-center rounded-tl-md rounded-bl-md">
     <SearchIcon className="h-8 w-8 text-white" />
    </button>
    <input
     className="focus:outline-none border-2 border-secondary-blue h-10 text-lg rounded-tr-md rounded-br-md flex pl-2"
     type="text"
    />
   </div>
  </div>
 )
}

export default Galery
