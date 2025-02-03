import { create } from 'zustand'
import { fetchFiles } from '@/app/actions/fetchFiles'

type Props = {
  data: string[]
  updateUiAfterUpload: () => void
}

const globalStateUpdateUiAfterUpload = create<Props>((set) => ({
  data: [],
  updateUiAfterUpload: async () => {
    const { data } = await fetchFiles()
    set(() => ({
      data: data,
    }))
  },
}))

export default globalStateUpdateUiAfterUpload
