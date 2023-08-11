import React from 'react'
import { useSearchParams } from 'next/navigation'
import BlogPost2 from '../../../../Components/BlogPost/BlogPost';

export default function Workout() {
  const id = useSearchParams().toString().slice(3);
  return (
    <div>
        <BlogPost2 id = {id} />
    </div>
  )
}
