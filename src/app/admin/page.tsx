import AdminLogin from '@/components/admin/AdminLogin'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Girişi - Aka Eğitim',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLoginPage() {
  return <AdminLogin />
}

