

export function pickPagination<P extends {
  current?: number
  pageSize?: number
}>(params: P) {
  return {
    current: params.current || 1,
    pageSize: params.pageSize || 10
  }
}