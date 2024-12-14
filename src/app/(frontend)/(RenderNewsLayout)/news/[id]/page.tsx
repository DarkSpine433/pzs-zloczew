import dynamic from 'next/dynamic'

const FetchContent = dynamic(() => import('./FetchContent'))

type Params = Promise<{ id: string }>
const page = async (props: { params: Params }) => {
  const params = await props.params

  return (
    <>
      <div className="flex flex-col min-h-full">
        <FetchContent id={params.id} />
      </div>
    </>
  )
}

export default page
