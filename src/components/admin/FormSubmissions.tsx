'use client'

import { useState, useEffect } from 'react'
import { Card, CardBody, Button, Chip, Input } from '@heroui/react'
import { 
  getAllContactSubmissions, 
  updateSubmissionStatus, 
  deleteContactSubmission,
  ContactSubmission 
} from '@/lib/supabase'

export default function FormSubmissions() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Load submissions from Supabase
    const loadSubmissions = async () => {
      try {
        const data = await getAllContactSubmissions()
        setSubmissions(data)
      } catch (error) {
        console.error('Error loading submissions:', error)
      }
    }

    loadSubmissions()
    
    // Refresh every 5 seconds to catch new submissions
    const interval = setInterval(loadSubmissions, 5000)
    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'warning'
      case 'contacted':
        return 'primary'
      case 'completed':
        return 'success'
      default:
        return 'default'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new':
        return 'Yeni'
      case 'contacted':
        return 'İletişimde'
      case 'completed':
        return 'Tamamlandı'
      default:
        return status
    }
  }

  const handleUpdateStatus = async (id: string, status: 'new' | 'contacted' | 'completed') => {
    try {
      await updateSubmissionStatus(id, status)
      // Reload submissions
      const data = await getAllContactSubmissions()
      setSubmissions(data)
    } catch (error) {
      console.error('Error updating status:', error)
      alert('Durum güncellenirken bir hata oluştu!')
    }
  }

  const handleDeleteSubmission = async (id: string) => {
    if (!confirm('Bu başvuruyu silmek istediğinizden emin misiniz?')) return
    
    try {
      await deleteContactSubmission(id)
      // Reload submissions
      const data = await getAllContactSubmissions()
      setSubmissions(data)
      alert('Başvuru başarıyla silindi!')
    } catch (error) {
      console.error('Error deleting submission:', error)
      alert('Başvuru silinirken bir hata oluştu!')
    }
  }

  const filteredSubmissions = submissions.filter(sub =>
    sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.city.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">
        <Input
          label="Arama"
          placeholder="Arama mail veya şehir ile ara..."
          labelPlacement="outside-top"
          value={searchTerm}
          onValueChange={(value) => setSearchTerm(value)}
          variant="bordered"
          className="w-full sm:max-w-md"
          classNames={{
            input: "bg-white focus:outline-none focus:ring-0",
            base: "group",
            label: "text-sm font-medium",
            inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
          }}
        />
        <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
          <Chip 
            color="warning" 
            variant="flat"
            className="text-sm sm:text-base font-medium"
          >
            Yeni: {submissions.filter(s => s.status === 'new').length}
          </Chip>
          <Chip 
            color="primary" 
            variant="flat"
            className="text-sm sm:text-base font-medium"
          >
            İletişimde: {submissions.filter(s => s.status === 'contacted').length}
          </Chip>
        </div>
      </div>

      {/* Submissions List */}
      <div className="space-y-4 sm:space-y-6">
        {filteredSubmissions.map((submission) => (
          <Card key={submission.id} className="hover:shadow-lg transition-shadow border border-gray-200">
            <CardBody className="p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 sm:gap-6">
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{submission.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{new Date(submission.created_at).toLocaleString('tr-TR')}</p>
                    </div>
                    <Chip 
                      color={getStatusColor(submission.status)} 
                      variant="flat"
                      className="text-xs sm:text-sm font-medium w-fit"
                    >
                      {getStatusText(submission.status)}
                    </Chip>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-700 break-all">{submission.email}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-700">{submission.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-700">{submission.city}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg flex-wrap">
                      <Chip 
                        size="sm" 
                        variant="flat" 
                        color="primary"
                        className="text-xs sm:text-sm font-medium"
                      >
                        {submission.program}
                      </Chip>
                      <Chip 
                        size="sm" 
                        variant="flat" 
                        color="secondary"
                        className="text-xs sm:text-sm font-medium"
                      >
                        {submission.country}
                      </Chip>
                    </div>
                  </div>

                  {submission.message && (
                    <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
                      <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">&ldquo;{submission.message}&rdquo;</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 w-full sm:w-auto sm:min-w-[160px] lg:min-w-[180px]">
                  <Button
                    size="sm"
                    color="primary"
                    variant="flat"
                    className="flex-1 sm:flex-none sm:w-full text-xs sm:text-sm font-semibold"
                    onClick={() => handleUpdateStatus(submission.id, 'contacted')}
                  >
                    <span className="hidden sm:inline">İletişime Geçildi</span>
                    <span className="sm:hidden">İletişimde</span>
                  </Button>
                  <Button
                    size="sm"
                    color="success"
                    variant="flat"
                    className="flex-1 sm:flex-none sm:w-full text-xs sm:text-sm font-semibold"
                    onClick={() => handleUpdateStatus(submission.id, 'completed')}
                  >
                    Tamamlandı
                  </Button>
                  <Button
                    size="sm"
                    color="danger"
                    variant="light"
                    className="flex-1 sm:flex-none sm:w-full text-xs sm:text-sm font-semibold"
                    onClick={() => handleDeleteSubmission(submission.id)}
                  >
                    Sil
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}

        {filteredSubmissions.length === 0 && (
          <Card className="border border-gray-200">
            <CardBody className="p-8 sm:p-12 lg:p-16 text-center">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4 sm:mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-sm sm:text-base text-gray-600 font-medium">Henüz form başvurusu bulunmuyor</p>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  )
}

