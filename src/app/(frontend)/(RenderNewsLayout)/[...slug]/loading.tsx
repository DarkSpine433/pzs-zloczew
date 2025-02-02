import SpinerLoader from '@/app/components/SpinerLoader'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <SpinerLoader className="container py-28" changeHeight />
}
