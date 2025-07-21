// pages/posts.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard'; // Import PostCard
import { PostProps } from '@/interfaces'; // Import PostProps

// Define the props type for the Posts component
interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow p-8">
        <h1 className="text-5xl font-semibold text-red-700 text-center mb-10">All Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
              id={post.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

// getStaticProps to fetch data at build time
export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts: PostProps[] = await response.json();

    return {
      props: {
        posts,
      },
      revalidate: 60, // Re-generate the page every 60 seconds (optional)
    };
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return {
      props: {
        posts: [], // Return empty array on error
      },
      revalidate: 10, // Try to re-fetch soon
    };
  }
}

export default Posts;