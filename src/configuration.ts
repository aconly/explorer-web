interface Configuration {
  readonly apiUrl: string
  readonly dateFormat: string
  readonly dateTimeFormat: string
  readonly pagination: Pagination
  readonly useMockSigner: boolean
}

interface Pagination {
  readonly limit: number
  readonly visiblePageCount: number
}

export const Configuration: Configuration = require('Configuration')
