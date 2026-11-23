// 전역 타입 (import 없이 어디서나 사용)

interface PageParam {
  page?: string | number
  size?: string | number
}

interface Todo {
  tno: number
  title: string
  writer: string
  dueDate: string | null
  complete: boolean
}

interface TodoAdd {
  title: string
  writer: string
  dueDate: string
}

interface TodoModify {
  tno: number
  title: string
  dueDate: string | null
  complete: boolean
}

interface PageRequestDTO {
  page: number
  size: number
}

interface PageResponseDTO<T> {
  dtoList: T[]
  pageNumList: number[]
  pageRequestDTO: PageRequestDTO | null
  prev: boolean
  next: boolean
  totalCount: number
  prevPage: number
  nextPage: number
  totalPage: number
  current: number
}

interface UseCustomMoveReturn {
  moveToList: (pageParam?: PageParam) => void
  moveToModify: (tno: number) => void
  moveToRead: (tno: number) => void
  page: number
  size: number
  refresh: boolean
}

interface ProductDTO {
  pno: number
  pname: string
  price: number
  pdesc: string
  uploadFileNames: string[]
  delFlag: boolean
}
