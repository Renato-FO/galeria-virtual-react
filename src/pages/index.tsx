import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
 const router = useRouter()
 const push = () => {
  if (typeof window !== 'undefined') {
   router.push('/galery')
  }
 }
 push()
 return (
  <div>
  </div>
 )
}

export default Home
