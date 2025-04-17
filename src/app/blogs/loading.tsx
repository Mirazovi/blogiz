import { Blogs } from "@/components/Types";
import LoadingCard from "@/components/ui/LoadingCard";


const LoadingPage = async () => {
    const res = await fetch('http://localhost:5000/blogs')
    const blogs = await res.json();
  return (
    <div>
        <div className="grid grid-cols-3 gap-4">
            {blogs.map((blog:Blogs) => <LoadingCard key={blog.id}/>)}
        </div>
    </div>
  )
}

export default LoadingPage