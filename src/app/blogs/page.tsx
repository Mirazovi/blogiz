'use client'
import { Blogs } from '@/components/Types';
import BlogCard from '@/components/ui/BlogCard';
import { useGetBlogsQuery } from '@/redux/api/baseApi';
import React from 'react'

const BlogsPage = () => {
    const {data:blogs,isLoading,isError} = useGetBlogsQuery("")
  return (
    <div className='w-[90%] mx-auto'>
        <h1 className='text-3xl text-center text-accent my-6'>LatestBlogs All Blogs </h1>
        <p className='w-2/4 mx-auto text-gray-400 text-xl text-center'><i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>
        <div className='grid grid-cols-3 gap-4 mt-10'>
            {blogs?.map((blog :Blogs) => <BlogCard key={blog.id} blog={blog}/>)}
        </div>
    </div>
  )
}

export default BlogsPage