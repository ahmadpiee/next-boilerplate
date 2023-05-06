export {}
declare global {
  // API Interfaces
  export interface AboutData {
    data: {
      id: number
      attributes: {
        title: string
        description: string
        createdAt: string
        updatedAt: string
        publishedAt: string
        locale: string
        banner: {
          data: null | unknown
        }
        localizations: {
          data: unknown[]
        }
      }
    }
    meta: {}
  }

  //

  export interface AppGradient {
    from: AppColorList
    to: AppColorList
    deg?: number
  }

  export interface Window {
    gtag: any
    dataLayer: any
  }

  export interface ProductTypes {
    id: number
    attributes: {
      name: string
      slug: string
      departure_date: string
      category: string
      description: string
      status: string
      featured: string
      thumbnail: {
        data: [
          {
            id: number
            url: string
            width: number
            height: number
          },
        ]
      }
      itinerary: []
      hotel: [
        {
          id: number
          name: string
          hotel_star: number
          description: string
        },
      ]
      variant: [
        {
          id: number
          room_type: string
          price: string
          description: string
        },
      ]
    }
  }

  export interface PaginationType {
    page?: number
    pageSize?: number
    pageCount?: number
    total?: number
  }

  export interface ArticleTypes {
    id: number
    attributes: {
      title: string
      slug: string
      minutes_read: number
      author: string
      content: string
      categories: string
      publishedAt: string
      updatedAt: string
      publish: string
      author_avatar: {
        data: {
          id: number
          attribtues: {
            url: string
            formats: {
              thumbnail: {
                url: string
              }
            }
          }
        }
      }
      thumbnail: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    }
  }
}
