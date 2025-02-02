import CircularProgress from '@mui/material/CircularProgress'
type Props = {
  className?: string
  changeHeight?: boolean
}

const SpinerLoader = ({ className, changeHeight }: Props) => {
  return (
    <div className={`flex items-center justify-center ${!changeHeight && 'h-full'} ${className}`}>
      <CircularProgress />
    </div>
  )
}

export default SpinerLoader
