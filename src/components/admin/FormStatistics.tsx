'use client'

import { useState, useEffect } from 'react'
import { Card, CardBody } from '@heroui/react'
import { getAllContactSubmissions, ContactSubmission } from '@/lib/supabase'

interface Statistics {
  totalSubmissions: number
  byCountry: Record<string, { count: number; percentage: number }>
  byProgram: Record<string, { count: number; percentage: number }>
  byCity: Record<string, { count: number; percentage: number }>
  byStatus: Record<string, { count: number; percentage: number }>
  recentSubmissions: ContactSubmission[]
}

export default function FormStatistics() {
  const [stats, setStats] = useState<Statistics>({
    totalSubmissions: 0,
    byCountry: {},
    byProgram: {},
    byCity: {},
    byStatus: {},
    recentSubmissions: []
  })

  useEffect(() => {
    const loadStatistics = async () => {
      try {
        const submissions = await getAllContactSubmissions()
        
        const total = submissions.length
        
        // Country statistics
        const byCountry: Record<string, { count: number; percentage: number }> = {}
        submissions.forEach(sub => {
          const country = sub.country || 'Belirtilmemiş'
          byCountry[country] = {
            count: (byCountry[country]?.count || 0) + 1,
            percentage: 0
          }
        })
        Object.keys(byCountry).forEach(key => {
          byCountry[key].percentage = total > 0 ? (byCountry[key].count / total) * 100 : 0
        })

        // Program statistics
        const byProgram: Record<string, { count: number; percentage: number }> = {}
        submissions.forEach(sub => {
          const program = sub.program || 'Belirtilmemiş'
          byProgram[program] = {
            count: (byProgram[program]?.count || 0) + 1,
            percentage: 0
          }
        })
        Object.keys(byProgram).forEach(key => {
          byProgram[key].percentage = total > 0 ? (byProgram[key].count / total) * 100 : 0
        })

        // City statistics
        const byCity: Record<string, { count: number; percentage: number }> = {}
        submissions.forEach(sub => {
          const city = sub.city || 'Belirtilmemiş'
          byCity[city] = {
            count: (byCity[city]?.count || 0) + 1,
            percentage: 0
          }
        })
        Object.keys(byCity).forEach(key => {
          byCity[key].percentage = total > 0 ? (byCity[key].count / total) * 100 : 0
        })

        // Status statistics
        const byStatus: Record<string, { count: number; percentage: number }> = {}
        submissions.forEach(sub => {
          const status = sub.status || 'new'
          byStatus[status] = {
            count: (byStatus[status]?.count || 0) + 1,
            percentage: 0
          }
        })
        Object.keys(byStatus).forEach(key => {
          byStatus[key].percentage = total > 0 ? (byStatus[key].count / total) * 100 : 0
        })

        setStats({
          totalSubmissions: total,
          byCountry: byCountry,
          byProgram: byProgram,
          byCity: byCity,
          byStatus: byStatus,
          recentSubmissions: submissions.slice(0, 5)
        })
      } catch (error) {
        console.error('Error loading statistics:', error)
      }
    }

    loadStatistics()
    const interval = setInterval(loadStatistics, 5000)
    return () => clearInterval(interval)
  }, [])

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new': return 'Yeni'
      case 'contacted': return 'İletişimde'
      case 'completed': return 'Tamamlandı'
      default: return status
    }
  }

  const getProgramText = (program: string) => {
    const programMap: Record<string, string> = {
      'dil-okulu': 'Dil Okulu',
      'universite': 'Üniversite',
      'yuksek-lisans': 'Yüksek Lisans',
      'yaz-okulu': 'Yaz Okulu'
    }
    return programMap[program] || program
  }

  const getCountryText = (country: string) => {
    const countryMap: Record<string, string> = {
      'ingiltere': 'İngiltere',
      'almanya': 'Almanya',
      'malta': 'Malta',
      'irlanda': 'İrlanda',
      'kanada': 'Kanada',
      'hollanda': 'Hollanda',
      'diger': 'Diğer'
    }
    return countryMap[country] || country
  }

  const sortByCount = (a: [string, { count: number; percentage: number }], b: [string, { count: number; percentage: number }]) => {
    return b[1].count - a[1].count
  }

  return (
    <div className="p-6 space-y-6">
      {/* Summary Card */}
      <Card>
        <CardBody className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Genel Bakış</h2>
          <div className="flex items-center justify-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Toplam Başvuru</p>
              <p className="text-5xl font-bold text-primary">{stats.totalSubmissions}</p>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Country Statistics */}
        <Card>
          <CardBody className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ülkelere Göre Dağılım
            </h3>
            <div className="space-y-4">
              {Object.entries(stats.byCountry)
                .sort(sortByCount)
                .map(([country, data]) => (
                  <div key={country}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {getCountryText(country)}
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {data.count} ({data.percentage.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full transition-all duration-500" 
                        style={{ width: `${data.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              {Object.keys(stats.byCountry).length === 0 && (
                <p className="text-gray-500 text-center py-4">Henüz veri yok</p>
              )}
            </div>
          </CardBody>
        </Card>

        {/* Program Statistics */}
        <Card>
          <CardBody className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Programlara Göre Dağılım
            </h3>
            <div className="space-y-4">
              {Object.entries(stats.byProgram)
                .sort(sortByCount)
                .map(([program, data]) => (
                  <div key={program}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {getProgramText(program)}
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {data.count} ({data.percentage.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-success h-2.5 rounded-full transition-all duration-500" 
                        style={{ width: `${data.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              {Object.keys(stats.byProgram).length === 0 && (
                <p className="text-gray-500 text-center py-4">Henüz veri yok</p>
              )}
            </div>
          </CardBody>
        </Card>

        {/* City Statistics */}
        <Card>
          <CardBody className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Şehirlere Göre Dağılım
            </h3>
            <div className="space-y-4">
              {Object.entries(stats.byCity)
                .sort(sortByCount)
                .slice(0, 10)
                .map(([city, data]) => (
                  <div key={city}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {city}
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {data.count} ({data.percentage.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-warning h-2.5 rounded-full transition-all duration-500" 
                        style={{ width: `${data.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              {Object.keys(stats.byCity).length === 0 && (
                <p className="text-gray-500 text-center py-4">Henüz veri yok</p>
              )}
            </div>
          </CardBody>
        </Card>

        {/* Status Statistics */}
        <Card>
          <CardBody className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Durumlara Göre Dağılım
            </h3>
            <div className="space-y-4">
              {Object.entries(stats.byStatus)
                .sort((a, b) => {
                  const order = { 'new': 0, 'contacted': 1, 'completed': 2 }
                  return (order[a[0] as keyof typeof order] || 99) - (order[b[0] as keyof typeof order] || 99)
                })
                .map(([status, data]) => (
                  <div key={status}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {getStatusText(status)}
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {data.count} ({data.percentage.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full transition-all duration-500 ${
                          status === 'completed' ? 'bg-success' : status === 'contacted' ? 'bg-primary' : 'bg-warning'
                        }`}
                        style={{ width: `${data.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              {Object.keys(stats.byStatus).length === 0 && (
                <p className="text-gray-500 text-center py-4">Henüz veri yok</p>
              )}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Recent Submissions */}
      <Card>
        <CardBody className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Son Başvurular
          </h3>
          <div className="space-y-3">
            {stats.recentSubmissions.map((submission) => (
              <div key={submission.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{submission.name}</p>
                  <p className="text-sm text-gray-600">
                    {getProgramText(submission.program)} - {getCountryText(submission.country)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    {new Date(submission.created_at).toLocaleDateString('tr-TR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  <p className="text-xs text-gray-400">{submission.city}</p>
                </div>
              </div>
            ))}
            {stats.recentSubmissions.length === 0 && (
              <p className="text-gray-500 text-center py-4">Henüz başvuru yok</p>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

