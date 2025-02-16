import { deleteFile } from '@/app/actions/deleteFile'

export const getBase64 = async (downloadUrl: URL): Promise<string | null> => {
  try {
    const response = await fetch(downloadUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch the file: ${response.statusText}`)
    }

    const blob = await response.blob()

    return new Promise((resolve, reject) => {
      const reader = new FileReader()

      reader.onerror = () => {
        reader.abort()
        reject(new Error('Problem parsing input file.'))
      }

      reader.onloadend = () => {
        resolve(reader.result ? (reader.result as string) : null)
      }

      reader.readAsDataURL(blob)
    })
  } catch (error) {
    console.error('Error fetching or converting image to Base64:', error)
    return null
  }
}

export const deleteFileHandler = async (
  sha: String,
  path: String,
): Promise<[string | null, number | null]> => {
  try {
    const isDeleted: { message: string; status: number } = await deleteFile({
      sha,
      path,
    })

    return [isDeleted.message, isDeleted.status]
  } catch (error) {
    console.error('Error deleting file:', error)
    return [null, null]
  }
}
