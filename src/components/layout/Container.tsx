'use client'

export interface ContainerProps {
  children?: any
  variant?: AppSize
}

const Container: React.FC<ContainerProps> = ({
  children,
  variant,
}): JSX.Element => {
  return <div className={'flex-col'}>{children}</div>
}

export default Container
