'use client'

import { useState, useEffect } from 'react'
import { Card, CardBody, Tabs, Tab, Button } from '@heroui/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import FormSubmissions from './FormSubmissions'
import RepresentativeManager from './RepresentativeManager'
import FormStatistics from './FormStatistics'
import { getTotalRepresentativesCount, getActiveCitiesCount, getTotalSubmissionsCount } from '@/lib/supabase'

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('statistics')
  const [stats, setStats] = useState({
    totalForms: 0,
    totalReps: 0,
    activeCities: 0
  })

  useEffect(() => {
    // Check authentication - only redirect if not authenticated
    const checkAuth = () => {
      const token = localStorage.getItem('admin_token')
      if (!token) {
        router.replace('/admin')
        return false
      }
      return true
    }

    if (!checkAuth()) {
      return
    }

    // Load stats
    const updateStats = async () => {
      try {
        // Supabase'den tüm istatistikleri çek
        const [totalForms, totalReps, activeCities] = await Promise.all([
          getTotalSubmissionsCount(),
          getTotalRepresentativesCount(),
          getActiveCitiesCount()
        ])
        
        setStats({
          totalForms: totalForms,
          totalReps: totalReps,
          activeCities: activeCities
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
    }

    updateStats()
    const interval = setInterval(updateStats, 5000)
    return () => clearInterval(interval)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    router.push('/admin')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-lg sm:w-12 sm:h-12"
              />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Admin Paneli</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Yönetim Sistemi</p>
              </div>
            </div>
            
            <Button
              color="danger"
              variant="flat"
              size="sm"
              className="text-xs sm:text-sm"
              onClick={handleLogout}
              startContent={
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              }
            >
              <span className="hidden sm:inline">Çıkış Yap</span>
              <span className="sm:hidden">Çıkış</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardBody className="p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-primary/10 rounded-lg p-2 sm:p-3">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Toplam Form</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">{stats.totalForms}</p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-success/10 rounded-lg p-2 sm:p-3">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Toplam Temsilci</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">{stats.totalReps}</p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-1">
            <CardBody className="p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-warning/10 rounded-lg p-2 sm:p-3">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">Aktif Şehir</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">{stats.activeCities}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Tabs */}
        <Card className="shadow-lg">
          <CardBody className="p-0">
            <Tabs
              selectedKey={activeTab}
              onSelectionChange={(key) => setActiveTab(key as string)}
              size="lg"
              variant="underlined"
              color="primary"
              classNames={{
                tabList: "gap-2 sm:gap-4 md:gap-6 w-full relative rounded-none p-0 border-b border-divider overflow-x-auto",
                cursor: "w-full bg-primary",
                tab: "max-w-fit px-3 sm:px-4 md:px-6 h-10 sm:h-12",
                tabContent: "group-data-[selected=true]:text-primary font-semibold text-gray-600 group-data-[selected=true]:font-bold text-xs sm:text-sm md:text-base"
              }}
            >
              <Tab
                key="statistics"
                title={
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span>İstatistikler</span>
                  </div>
                }
              >
                <FormStatistics />
              </Tab>
              
              <Tab
                key="forms"
                title={
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Form Başvuruları</span>
                  </div>
                }
              >
                <FormSubmissions />
              </Tab>
              
              <Tab
                key="representatives"
                title={
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Temsilci Yönetimi</span>
                  </div>
                }
              >
                <RepresentativeManager />
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

