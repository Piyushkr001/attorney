import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <Image src='/images/IMG.jpg' alt='logo' width={700} height = {1000} />
      </div>
      <div className='flex items-center justify-center h-screen order-first md:order-last'>
        <SignUp />
      </div>
    </div>
  )
}