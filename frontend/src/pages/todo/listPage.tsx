import { useSearchParams } from 'react-router'

function ListPage() {
  const [queryParams] = useSearchParams()

  const page: string = queryParams.get('page') ?? '1'
  const size: string = queryParams.get('size') ?? '10'

  return (
    <div className="bg-white w-full p-2 m-2">
      <div className="text-3xl font-extrabold">
        Todo List Page Component {page} --- {size}
      </div>
    </div>
  )
}

export default ListPage
