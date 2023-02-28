import Link from "next/link"


const PageNotFound = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <h3>Page not found!</h3>
        <Link href='/home'>Click here to go back home</Link>
    </div>
  )
}

export default PageNotFound