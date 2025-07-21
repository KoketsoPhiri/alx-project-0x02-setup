// pages/posts/index.tsx
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal"; // Import PostModal
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces"; // Import PostData
import { useState } from "react"; // Import useState

// Update the interface for Posts component props to receive an array of PostProps
interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts: initialPosts }) => { // Rename to initialPosts to avoid naming conflict
  const [isModalOpen, setModalOpen] = useState(false);
  // Manage the list of posts locally, initialized with fetched posts
  const [currentPosts, setCurrentPosts] = useState<PostProps[]>(initialPosts);

  // This function handles adding a new post from the modal
  const handleAddPost = (newPost: PostData) => {
    // In a real application, you would send this to a backend API.
    // For now, we simulate adding it to the list.
    // Assign a temporary ID (in a real app, this would come from the server)
    const postId = currentPosts.length > 0 ? Math.max(...currentPosts.map(p => p.id)) + 1 : 1;
    const postToAdd: PostProps = { ...newPost, id: postId };
    setCurrentPosts((prevPosts) => [postToAdd, ...prevPosts]); // Add new post to the beginning
  };

  return (
    <div className="flex flex-col min-h-screen"> {/* Changed h-screen to min-h-screen */}
      <Header />
      <main className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-6 py-2 rounded-full text-white hover:bg-blue-800 transition-colors"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid */}
          {currentPosts?.map((post: PostProps) => ( // Iterate over currentPosts state
            <PostCard
              title={post.title}
              body={post.body}
              userId={post.userId}
              id={post.id}
              key={post.id} // Use post.id for key
            />
          ))}
        </div>
      </main>

      {/* Conditional rendering of PostModal */}
      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;