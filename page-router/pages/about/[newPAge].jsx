import { useRouter } from 'next/router'
import {React } from 'react'

const Listid = () => {
    const router  = useRouter()
    const data = router.query;
    console.log(data)
    
  return (
    <div>all ids {router.pathname} & {data.newPAge} </div>
  )
}

export default Listid