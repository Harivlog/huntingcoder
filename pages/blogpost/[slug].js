import React from 'react'
import {useRouter} from 'next/router'
const slug = () => {
    const router = useRouter();
    const data = router.query.slug
    console.log(data)
  return (
    <div>
      {data}
    </div>
  )
}

export default slug