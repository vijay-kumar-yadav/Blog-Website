import { websiteName } from '@/utils/constants'

import Link from 'next/link'

type TitleBarType = {
  className?: string;
}
function TitleBar({ className }: TitleBarType) {
  return (
    <Link className={`p-2 border-y-2 border-gray" ${className || ""}`} href="/">
      <h1 className="xl:text-9xl sm:text-8xl text-5xl text-center select-none uppercase font-bold">
        {websiteName}
      </h1>
    </Link>
  )
}

export default TitleBar