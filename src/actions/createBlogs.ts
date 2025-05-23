'use server'

import { Blogs } from "@/components/Types";

export const createBlogs = async (data:Blogs) =>{
        const res = await fetch('http://localhost:5000/blogs',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data),
            cache:'no-store'
        })
        const blogInfo = await res.json()
    return blogInfo;
}