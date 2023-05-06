import { useRouter } from 'next/router'

/**
 * @desc hooks for matching the routes
 */

export const useBlogRoute = () => {
  const router = useRouter()
  const productsPattern = new RegExp(/\/blog\/.*/g)
  const matchProductRoutes = productsPattern.test(router?.pathname) === true
  return { matchProductRoutes }
}

export const useAdminRoute = () => {
  const router = useRouter()
  const patternSuperAdmin = new RegExp(/\/super-admin\.*/g)
  const patternAdmin = new RegExp(/\/admin\.*/g)
  const matchAdminRoutes =
    patternAdmin?.test(router?.pathname) === true ||
    patternSuperAdmin?.test(router?.pathname) === true
  return { matchAdminRoutes }
}
