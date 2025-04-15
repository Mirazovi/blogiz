import { Blogs } from "@/components/Types";
import BlogDetails from "@/components/ui/BlogDetails";

interface BlogId {
    params:{
        blogId:string
    }
}
export const generateStaticParams = async() => {
    const res = await fetch('http://localhost:5000/blogs')
    const blogs = await res.json();
    return blogs?.slice(0,3).map((blog:Blogs) => ({
        blogId:blog?.id
    }))
}

const BlogsPageDetails = async({params}:BlogId) => {
        const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`,{
            cache:'no-store'
        })
        const blogsDetails = await res.json();
    return (
    <div className="my-10">
        <BlogDetails blog={blogsDetails}/>
    </div>
  )
}

export default BlogsPageDetails