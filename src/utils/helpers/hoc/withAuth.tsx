import { useRouter } from 'next/router'
import React, { ComponentType, useEffect } from 'react'

interface WithAuthProps {
  allowedRoles: UserRole[]
}

/**
 * A higher-order component that performs role-based access control.
 *
 * @template P - The props for the wrapped component.
 * @param {React.ComponentType<P>} WrappedComponent - The component to be wrapped.
 * @param {WithAuthProps} options - The options for the higher-order component.
 * @param {UserRole[]} options.allowedRoles - The roles that are allowed to access the wrapped component.
 * @returns {React.FC<P>} A new component that wraps the `WrappedComponent`.
 * @example usage example:
import withAuth from '@utils/helpers/hoc/withAuth'
const MyApp = () => {
  return (
      <></>
    )
}
export default withAuth(MyApp, { allowedRoles: ['user'] })

 */
const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>,
  { allowedRoles }: WithAuthProps,
): React.FC<P> => {
  /**
   * The component that wraps the `WrappedComponent` and performs the role-based access control check.
   *
   * @param {P} props - The props for the wrapped component.
   * @returns {JSX.Element} The wrapped component with the props passed down to it.
   */
  const AuthComponent: React.FC<P> = (props: P): JSX.Element => {
    const router = useRouter()

    // Get the user's token from local storage or from a context provider
    const userToken = 'RANDOM_TOKEN'

    // Simulate authentication check. In a real-world application, you should
    // send the user's token to your backend to verify the user's role.
    const userRole: UserRole = 'super-admin'

    useEffect(() => {
      if (!userToken) {
        router.push('/unauthenticated')
      } else if (!allowedRoles.includes(userRole)) {
        router.push('/401')
      }
    }, [router, userRole, userToken])

    return <WrappedComponent {...props} />
  }

  return AuthComponent
}

export default withAuth
