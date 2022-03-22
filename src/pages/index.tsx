import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const push = () => {
    router.push('/galery')
  }
  push()
  return (
    <div>
      <h1>BEM-VINDO</h1>
    </div>
  )
}

export default Home
