import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="bg-white dark:bg-slate-800 text-[#fff]">
      <Head />
      <body>
        <Main />
        <NextScript />

        <script src="https://cdn.tailwindcss.com"></script>
      </body>
    </Html>
  )
}
