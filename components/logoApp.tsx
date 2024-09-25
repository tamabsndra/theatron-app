import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      width={150}
      height={10}
      alt="Logo"
      className={cn(className)}
    />
  )
}