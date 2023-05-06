'use client'

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = (): JSX.Element => {
  return (
    <svg className="animate-spin h-10 w-10 mr-3 ..." viewBox="0 0 24 24"></svg>
  )
}

export default Loader
