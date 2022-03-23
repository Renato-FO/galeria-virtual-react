import { useRouter } from 'next/router'

const topBar = () => {
 const menu = [
  {
   name: 'Galeria',
   route: '/galery',
  },
  {
   name: 'Sobre',
   route: '/about',
  },
  {
   name: 'Contato',
   route: '/contact',
  },
 ]
 const router = useRouter()
 return (
  <div className="flex justify-between items-center">
   <div className="flex h-16 items-center space-x-12 px-10">
    <p className="text-4xl font-semibold text-primary">Galeria virtual</p>
   </div>
   <div className="flex h-16 items-center space-x-12 px-10">
    {menu.map((item, index) => (
     <div className="" key={index}>
      <button
       onClick={() => router.push(item.route)}
       className="transition duration-150 ease-in-out hover:font-semibold"
      >
       {item.name}
      </button>
     </div>
    ))}
   </div>
  </div>
 )
}

export default topBar
