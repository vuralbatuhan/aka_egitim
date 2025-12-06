import AdminDashboard from '@/components/admin/AdminDashboard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard - Aka Eğitim',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DashboardPage() {
  return <AdminDashboard />
}

