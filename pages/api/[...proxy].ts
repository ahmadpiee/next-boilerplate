import { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

type ApiUrls = {
  [key: string]: string | undefined
  default: string | undefined
  strapi: string | undefined
  // Add more API URLs here as needed
}

const API_URLS: ApiUrls = {
  default: process.env.NEXT_PUBLIC_API_NEST,
  strapi: process.env.NEXT_PUBLIC_STRAPI_URL,
  // Add more API URLs here as needed
}

const proxy = httpProxy.createProxyServer()

// Make sure that we don't parse JSON bodies on this route:
export const config = {
  api: {
    bodyParser: false,
  },
}

/**
 * Handles incoming requests and proxies them to the target API.
 * @param {NextApiRequest} req - The incoming request object.
 * @param {NextApiResponse} res - The outgoing response object.
 * @returns {Promise<void>} A promise that resolves when the request has been successfully proxied, or rejects if there was an error.
 * @property {string} default - The default URL of your API
 * @property {string} strapi - The URL of the API for the 'strapi' target
 */

const handleProxyRequest = (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const target = API_URLS[req.query.target?.toString() || 'default']
  return new Promise<void>((resolve, reject) => {
    proxy.web(req, res, { target, changeOrigin: true }, (err) => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}

export default handleProxyRequest
