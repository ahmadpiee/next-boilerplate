'use client'

import dynamic from 'next/dynamic'
import { useGetAboutDataQuery } from '@store/slice/about-us'
import { motion } from 'framer-motion'
import { pageAnimation } from '@components/animations'

const Container = dynamic(() => import('@components/layout/Container'), {
  ssr: false,
  loading: () => <p>Loading Container...</p>,
})
const MarkDown = dynamic(() => import('@components/markdown/Markdown'), {
  ssr: false,
  loading: () => <p>Loading MarkDown...</p>,
})

const Home = () => {
  const { data, isLoading } = useGetAboutDataQuery('strapi')
  return (
    <main>
      <motion.div
        style={{ minHeight: '80vh' }}
        initial="hidden"
        animate="show"
        variants={pageAnimation}
      >
        <Container>
          {isLoading ? (
            <p>Loading RTK...</p>
          ) : (
            <MarkDown>{data?.data?.attributes?.description}</MarkDown>
          )}
        </Container>
      </motion.div>
    </main>
  )
}

export default Home
