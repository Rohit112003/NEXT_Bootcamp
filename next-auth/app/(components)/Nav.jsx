import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
const Nav =async  () => {
  const session  = await getServerSession(options)
  return (
    <header className='bg-gray-600 test-gray-100  '>
        <nav className='flex justify-between items-center w-full px-10 py-4'>
            <div>My Site</div>
        <div className='flex gap-10  text-white'>
            <Link href='/'>Home</Link>
            <Link href='/CreateUser'>Create User</Link>
            <Link href='/ClientMember'>CLient Member</Link>
            <Link href='/Member'>Member</Link>
            <Link href='/public'>Public</Link>
            {
              session?(<Link href='/api/auth/signout?callbackUrl=/'>LogOut</Link>):(
                <Link href='/api/auth/signin'>Login</Link>
              )
            }
        </div>
        </nav>
    </header>
  )
}

export default Nav