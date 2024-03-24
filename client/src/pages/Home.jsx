import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <div className='flex  justify-center gap-4 items-center max-[700px]:flex-col border-b-2 border-indigo-600 max-[700px]:border-b-[0]:border-none'>
       <div>
       <h1 className='text-3xl font-bold lg:text-6xl '>Welcome to BuzzChapter Blog</h1>
        <p className='text-gray-500 text-md sm:text-sm mt-4 font-medium mb-6 min-[700px]:w-[300px]'>
        Your go-to destination
              for a wide range of topics including technology, news, sports,
              lifestyle, and more.
        </p>
        <Link
          to='/search'
          className='text-md sm:text-sm bg-indigo-600 py-2 px-4 rounded-md text-white  font-bold hover:bg-transparent hover:text-indigo-600 border border-indigo-600'
        >
          View all posts
        </Link>
       </div>

       <div className='w-[300px] min-[960px]:w-[350px] max-[700px]:mt-8'>
       <img
              src='/landing-page.png' 
              alt='hero'
              className='object-cover w-full h-full'
            />
       </div>
        </div>
      </div>
     

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-center  sm:text-md mt-4 text-indigo-600  font-bold  hover:text-indigo-800 '
            >
              View all posts
            </Link>
          </div>
        )}
      </div>

      <div className='p-3 mb-20 max-w-4xl mx-auto w-full'>
        <CallToAction />
      </div>
    </div>
  );
}