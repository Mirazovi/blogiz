import { Blogs } from '@/components/Types'
import BlogCard from '@/components/ui/BlogCard'
import LatestBlogCard from '@/components/ui/LatestBlogCard'
import React from 'react'

const LatestBlogs = ({blogs}:{blogs:Blogs[]}) => {
  return (
    <div className='w-[90%] mx-auto'>
        <h1 className='text-3xl text-center text-accent my-6'>LatestBlogs </h1>
        <p className='w-2/4 mx-auto text-gray-400 text-xl text-center'><i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>
        <div className='grid grid-cols-2 gap-4 mt-10'>
            {blogs?.slice(0,2).map((blog) => <LatestBlogCard key={blog.id} blog={blog}/>)}
        </div>
        <div className='grid grid-cols-3 gap-4 mt-10'>
            {blogs?.slice(2,5).map((blog) => <BlogCard key={blog.id} blog={blog}/>)}
        </div>
    </div>
  )
}

export default LatestBlogs