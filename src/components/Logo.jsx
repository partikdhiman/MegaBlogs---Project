import React from 'react'

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-lg font-bold text-white">
        M
      </div>
      <span className="whitespace-nowrap text-lg font-bold text-slate-800">
        MegaBlogs
      </span>
    </div>
  )
}

export default Logo