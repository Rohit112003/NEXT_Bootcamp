import Link from "next/link";

const page = () => {
  return (
    //a route which we only define once but which is then capable of rendering different page for different blog posts
    <main>
      <h1>The Blog</h1>
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post 1</Link>
      </p>
    </main>
  );
};

export default page;
