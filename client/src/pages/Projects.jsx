
import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>Stay informed and entertained with our weekly articles covering a diverse range of topics. From in-depth analyses of tech innovations to the latest updates in the world of sports, BuzzChapterBlog has something for everyone.</p>
      <CallToAction />
    </div>
  )
}