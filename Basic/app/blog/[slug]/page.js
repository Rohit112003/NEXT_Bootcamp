export default function BlogPostPage({params}){
    return(
        //this square bracket thing here simply tells NextJs that we want to have some path segment after blog in this case but we don't know the exact value of the segment yet
        <main>
            <h1>Blog Post</h1>
            <p>{params.slug}</p>
        </main>
    )
}