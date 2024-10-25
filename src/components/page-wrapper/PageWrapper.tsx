import React, { ReactNode } from 'react'

function PageWrapper({ children }: {
    children: ReactNode;
}) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        {children}
      </main>
    </div>
  )
}

export default PageWrapper