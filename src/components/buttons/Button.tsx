import { useMemo } from 'react'

const getSizeClasses = (size: any) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5'
    }
    case 'large': {
      return 'px-6 py-3'
    }
    default: {
      return 'px-5 py-2.5'
    }
  }
}

const getModeClasses = (isPrimary: any) =>
  isPrimary
    ? 'text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700'
    : 'text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white'

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-bold leading-none inline-block'

export interface ButtonProps {
  primary?: boolean
  size?: AppSize
  children?: React.ReactNode | string
}
/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  children,
  ...props
}): JSX.Element => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary)
    const sizeClass = getSizeClasses(size)

    return [modeClass, sizeClass].join(' ')
  }, [primary, size])

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
