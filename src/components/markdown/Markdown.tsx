import styles from '@styles/app-markdown.module.css'
import { poppins } from '@styles/fonts/poppins'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

interface Props {
  children?: string | any
}

const MarkDown: React.FC<Props> = ({ children }) => {
  return (
    <ReactMarkdown
      className={styles.appMarkdown && poppins.className}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  )
}

export default MarkDown
