'use client'

import { useState } from 'react'
import { Card, CardBody, Input, Button } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function AdminLogin() {
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Prevent double submission
    if (isLoading) return
    
    setIsLoading(true)
    setError('')

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Demo credentials
      if (credentials.username === 'admin' && credentials.password === 'admin123') {
        localStorage.setItem('admin_token', 'demo_token')
        // Use replace instead of push to prevent back button issues
        router.replace('/admin/dashboard')
      } else {
        setError('Kullanıcı adı veya şifre hatalı!')
        setIsLoading(false)
      }
    } catch {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo ve Başlık */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
            <Image
              src="/logo.jpg"
              alt="Aka Eğitim Logo"
              width={80}
              height={80}
              className="rounded-xl"
            />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Admin Paneli</h1>
          <p className="text-gray-600">Yönetim paneline giriş yapın</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-2xl">
          <CardBody className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <Input
                label="Kullanıcı Adı"
                placeholder="Kullanıcı adınızı girin"
                labelPlacement="outside-top"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                isRequired
                variant="bordered"
              />

              <Input
                label="Şifre"
                type="password"
                placeholder="Şifrenizi girin"
                labelPlacement="outside-top"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                isRequired
                variant="bordered"
              />

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full font-bold text-lg text-black"
                isLoading={isLoading}
              >
                {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
              </Button>
            </form>

            {/* Demo Credentials Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-600 text-center">
                <strong>Demo:</strong> admin / admin123
              </p>
            </div>
          </CardBody>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-gray-600 hover:text-primary">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  )
}

