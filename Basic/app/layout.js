import './globals.css'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};
//the layout is wrapper around one or more oage and depending on which path you are , children will then
//simply be the content of the page js that's currently active
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
