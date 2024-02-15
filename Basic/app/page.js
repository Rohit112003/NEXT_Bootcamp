import Link from "next/link";
//@ points the root of the project
import Header from "@/components/Header";
export default function Home() {
  return (
    //it is a regular react components but it  treated in a special way
// NextJS ensures that this component is actually rendered on the server,that this component function is executed on the server.


//it is treated as a server component and executed on the server ans its then returned jsx code

    <main>
      <Header/>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p> <Link href="/about">About us</Link></p>
    </main>
  );
}
