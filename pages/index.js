import Chat from '@/components/Chat'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <main className='w-full h-screen flex items-center justify-center'>
      <Chat />
    </main>
  )
}
