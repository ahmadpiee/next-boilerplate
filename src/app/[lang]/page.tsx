// 'use client'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { useGetAboutDataQuery } from '@store/slice/about-us'
import { motion } from 'framer-motion'
import { pageAnimation } from '@components/animations'
import Splashscreen from '@components/splashscreen/Splashscreen'
import { getDictionary } from 'get-dictionary'
import { Locale } from 'i18n-config'
import Counter from '@components/counter'
import LocaleSwitcher from '@components/locale-switcher'

const Container = dynamic(() => import('@components/layout/Container'), {
  ssr: false,
  loading: () => <p>Loading Container...</p>,
})
const MarkDown = dynamic(() => import('@components/markdown/Markdown'), {
  ssr: false,
  loading: () => <p>Loading MarkDown...</p>,
})

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  // const { data: aboutData, isLoading: aboutLoading } =
  //   useGetAboutDataQuery('strapi')
  // const pathname = usePathname()
  // const isHome = pathname === '/'
  // const [isLoading, setIsLoading] = useState<Boolean>(isHome)
  // useEffect(() => {
  //   if (isLoading) {
  //     return
  //   }
  // }, [isLoading])

  return (
    <main>
      <div>
        <LocaleSwitcher />
        <p>Current locale: {lang}</p>
        <p>
          This text is rendered on the server:{' '}
          {dictionary['server-component'].welcome}
        </p>
        <Counter dictionary={dictionary.counter} />
      </div>
      {/* {isLoading && isHome ? (
        <Splashscreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <motion.div
          style={{ minHeight: '80vh' }}
          initial="hidden"
          animate="show"
          variants={pageAnimation}
        >
          <Container>
            {aboutLoading ? (
              <p>Loading RTK...</p>
            ) : (
              <>
                <MarkDown>{aboutData?.data?.attributes?.description}</MarkDown>
              </>
            )}
          </Container>
        </motion.div>
      )} */}
    </main>
  )
}
