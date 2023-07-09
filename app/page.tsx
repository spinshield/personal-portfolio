import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import Image from 'next/image'
import BlurImage from "@/components/blur-image"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
          <Link href={post.slug}>
          <div className="ease py-0 overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-1">
        <BlurImage
          src={post.images}
          alt={post.title ?? "Project Images"}
          width={500}
          height={400}
          className="h-[100%] hover:shadow-xl shadow-md rounded-2xl w-full object-cover"
        />
          </div>          
          </Link>
        <hr/>
        </article>
        
      ))}
    </div>
  )
}
