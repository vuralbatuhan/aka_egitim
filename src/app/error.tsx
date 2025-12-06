'use client'

import { useEffect } from 'react'
import { Button } from '@heroui/react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <svg
            className="w-20 h-20 mx-auto text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Bir şeyler yanlış gitti
        </h2>
        <p className="text-gray-600 mb-6">
          Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-primary text-white"
          >
            Tekrar Dene
          </Button>
          <Link href="/">
            <Button
              variant="bordered"
              className="text-gray-700"
            >
              Ana Sayfaya Dön
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

