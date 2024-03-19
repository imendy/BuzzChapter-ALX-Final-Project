export default function About() {
  const gradientStyle = {
    backgroundImage: "linear-gradient(to left, cyan, blue, purple)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Bu
            <span style={gradientStyle}>zz</span>
            Chapter Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to BuzzChapterBlog! This blog is your go-to destination
              for a wide range of topics including technology, news, sports,
              lifestyle, and more. Our team at BuzzChapterBlog is dedicated to
              bringing you insightful articles and updates on the latest trends
              and happenings across various domains.
            </p>
            <p>
              Stay informed and entertained with our weekly articles covering a
              diverse range of topics. From in-depth analyses of tech
              innovations to the latest updates in the world of sports,
              BuzzChapterBlog has something for everyone.
            </p>
            <p>
              We encourage you to explore our content and engage with our
              community. Leave your thoughts and comments on our posts, interact
              with fellow readers, and be part of the conversation. At
              BuzzChapterBlog, we believe in the power of community-driven
              learning and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
