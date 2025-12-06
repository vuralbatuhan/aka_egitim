'use client'

import { useState, useEffect } from 'react'
import { Card, CardBody, Button, Input, Select, SelectItem, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Chip } from '@heroui/react'
import { 
  getAllCities,
  getAllRepresentatives, 
  addCity,
  updateCity,
  addRepresentative, 
  updateRepresentative, 
  deleteRepresentative,
  RepresentativeWithCity,
  CityRepresentative,
  supabase
} from '@/lib/supabase'
// Ülkeler listesi
const COUNTRIES = [
  { code: 'tr', name: 'Türkiye', flag: '🇹🇷' },
  { code: 'de', name: 'Almanya', flag: '🇩🇪' },
  { code: 'be', name: 'Belçika', flag: '🇧🇪' },
  { code: 'it', name: 'İtalya', flag: '🇮🇹' },
  { code: 'kz', name: 'Kazakistan', flag: '🇰🇿' },
  { code: 'nl', name: 'Hollanda', flag: '🇳🇱' }
]

// Türkiye şehirleri listesi
const TURKEY_CITIES = [
  'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
  'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa',
  'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan',
  'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkâri', 'Hatay', 'Isparta',
  'Mersin', 'İstanbul', 'İzmir', 'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir',
  'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla',
  'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya', 'Samsun', 'Siirt',
  'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak',
  'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman',
  'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'
]

// Representative Card Component
function RepresentativeCard({ rep, onEdit, onDelete }: { 
  rep: RepresentativeWithCity
  onEdit: () => void
  onDelete: () => void
}) {
  const [avatarError, setAvatarError] = useState(false)

  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-md">
      <CardBody className="p-6">
        {/* Header with Avatar and Name */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            {rep.avatar && !avatarError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={rep.avatar}
                alt={rep.name}
                className="w-16 h-16 rounded-2xl object-cover shadow-lg border-2 border-primary/20"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary-600 to-primary-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {rep.name.charAt(0)}
              </div>
            )}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-xl text-gray-900 mb-1">{rep.name}</h4>
            <p className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full inline-block">
              {rep.title}
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">{rep.phone}</span>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">{rep.email}</span>
          </div>

          {rep.working_hours && (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">{rep.working_hours}</span>
            </div>
          )}
        </div>

        {/* Languages */}
        {rep.languages && rep.languages.length > 0 && (
          <div className="mb-6">
            <h5 className="text-sm font-semibold text-gray-600 mb-2">Konuştuğu Diller</h5>
            <div className="flex flex-wrap gap-2">
              {rep.languages.map((lang, idx) => (
                <Chip 
                  key={idx} 
                  size="sm" 
                  variant="flat" 
                  color="primary"
                  className="bg-primary/10 text-primary font-medium"
                >
                  {lang}
                </Chip>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4 border-t border-gray-100">
          <Button
            size="sm"
            color="primary"
            variant="flat"
            className="flex-1 font-semibold"
            startContent={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            }
            onClick={onEdit}
          >
            Düzenle
          </Button>
          <Button
            size="sm"
            color="danger"
            variant="light"
            className="font-semibold"
            startContent={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            }
            onClick={onDelete}
          >
            Sil
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default function RepresentativeManager() {
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [selectedCityId, setSelectedCityId] = useState<string>('')
  const [selectedCityName, setSelectedCityName] = useState<string>('')
  const [citySearchTerm, setCitySearchTerm] = useState<string>('')
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 })
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isAddCityModalOpen, setIsAddCityModalOpen] = useState(false)
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false)
  const [isCityModalOpen, setIsCityModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [editingRep, setEditingRep] = useState<RepresentativeWithCity | null>(null)
  const [editAvatarFile, setEditAvatarFile] = useState<File | null>(null)
  const [editAvatarPreview, setEditAvatarPreview] = useState<string>('')
  const [cities, setCities] = useState<CityRepresentative[]>([])
  const [allRepresentatives, setAllRepresentatives] = useState<RepresentativeWithCity[]>([])
  const [loading, setLoading] = useState(false)
  const [newRep, setNewRep] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    languages: '',
    working_hours: 'Pzt-Cum 09:00-18:00',
    city_id: '',
    avatar: ''
  })
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string>('')
  const [newCity, setNewCity] = useState({
    city_name: '',
    office_address: '',
    office_phone: ''
  })
  const [isEditingOfficeInfo, setIsEditingOfficeInfo] = useState(false)
  const [editingOfficeInfo, setEditingOfficeInfo] = useState({
    office_address: '',
    office_phone: ''
  })

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Load data from Supabase
  useEffect(() => {
    loadData()
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isCityDropdownOpen && !target.closest('.city-dropdown-container')) {
        setIsCityDropdownOpen(false)
      }
    }

    if (isCityDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isCityDropdownOpen])

  const loadData = async () => {
    setLoading(true)
    try {
      const [citiesData, repsData] = await Promise.all([
        getAllCities(),
        getAllRepresentatives()
      ])
      setCities(citiesData)
      setAllRepresentatives(repsData)
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  // Get representatives for selected city
  const selectedCityReps = selectedCityId 
    ? allRepresentatives.filter(rep => rep.city_id === selectedCityId)
    : []

  const selectedCity = cities.find(c => c.id === selectedCityId)

  const selectedCityData = selectedCity ? {
    cityName: selectedCity.city_name,
    representatives: selectedCityReps,
    officeAddress: selectedCity.office_address,
    officePhone: selectedCity.office_phone
  } : null

  // Handle country selection
  const handleCountrySelection = (countryCode: string) => {
    setSelectedCountry(countryCode)
    setSelectedCityId('')
    setSelectedCityName('')
  }

  // Handle city selection from dropdown
  const handleCitySelection = (cityName: string) => {
    setSelectedCityName(cityName)
    setCitySearchTerm('')
    setIsCityDropdownOpen(false)
    const existingCity = cities.find(c => c.city_name === cityName)
    if (existingCity) {
      setSelectedCityId(existingCity.id)
    } else {
      setSelectedCityId('')
    }
  }

  // Normalize Turkish characters for search
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .replace(/ı/g, 'i')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/İ/g, 'i')
      .replace(/Ğ/g, 'g')
      .replace(/Ü/g, 'u')
      .replace(/Ş/g, 's')
      .replace(/Ö/g, 'o')
      .replace(/Ç/g, 'c')
  }

  // Filter cities based on search term (case-insensitive and Turkish character insensitive)
  const filteredCities = citySearchTerm
    ? TURKEY_CITIES.filter(city => 
        normalizeText(city).includes(normalizeText(citySearchTerm.trim()))
      )
    : TURKEY_CITIES

  const handleAddCity = async () => {
    if (!newCity.city_name) {
      alert('Lütfen şehir adını girin!')
      return
    }

    setLoading(true)
    try {
      await addCity(newCity)
      await loadData()
      setIsAddCityModalOpen(false)
      setNewCity({
        city_name: '',
        office_address: '',
        office_phone: ''
      })
      alert('Şehir başarıyla eklendi!')
    } catch (error) {
      console.error('Error adding city:', error)
      alert('Şehir eklenirken bir hata oluştu!')
    } finally {
      setLoading(false)
    }
  }

  const handleAvatarUpload = async (file: File): Promise<string | null> => {
    try {
      // Check if file is too large (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Dosya boyutu çok büyük. Maksimum 5MB olmalıdır.')
        return null
      }

      const fileExt = file.name.split('.').pop()
      const timestamp = Date.now()
      const randomStr = Math.random().toString(36).substring(2, 15)
      const fileName = `${timestamp}-${randomStr}.${fileExt}`
      const filePath = `avatars/${fileName}`

      // Try to upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('representatives')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) {
        console.error('Upload error:', uploadError)
        // If bucket doesn't exist or other storage error, use base64 as fallback
        if (uploadError.message?.includes('Bucket not found') || uploadError.message?.includes('The resource already exists')) {
          alert('Storage bucket bulunamadı veya dosya zaten mevcut. Lütfen Supabase Storage\'da "representatives" bucket\'ını oluşturun.')
          return null
        }
        // For other errors, try base64 fallback
        return await convertToBase64(file)
      }

      const { data: urlData } = supabase.storage
        .from('representatives')
        .getPublicUrl(filePath)

      const publicUrl = urlData.publicUrl
      console.log('Avatar uploaded successfully:', publicUrl)
      return publicUrl
    } catch (error) {
      console.error('Error uploading avatar:', error)
      // Fallback to base64 if storage fails
      try {
        return await convertToBase64(file)
      } catch (base64Error) {
        console.error('Base64 conversion error:', base64Error)
        alert('Fotoğraf yüklenirken bir hata oluştu. Lütfen tekrar deneyin.')
        return null
      }
    }
  }

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result)
        } else {
          reject(new Error('Base64 conversion failed'))
        }
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const handleAddRepresentative = async () => {
    // Validate required fields
    if (!newRep.name?.trim()) {
      alert('Lütfen ad soyad girin!')
      return
    }
    if (!newRep.email?.trim()) {
      alert('Lütfen e-posta adresi girin!')
      return
    }
    if (!newRep.phone?.trim()) {
      alert('Lütfen telefon numarası girin!')
      return
    }
    if (!newRep.city_id) {
      alert('Lütfen bir şehir seçin!')
      return
    }

    setLoading(true)
    try {
      let avatarUrl = newRep.avatar
      
      // Upload avatar if file is selected
      if (avatarFile) {
        try {
          const uploadedUrl = await handleAvatarUpload(avatarFile)
          if (uploadedUrl) {
            avatarUrl = uploadedUrl
          } else {
            // If upload failed but user wants to continue, proceed without avatar
            const continueWithoutAvatar = confirm('Fotoğraf yüklenemedi. Avatar olmadan devam etmek ister misiniz?')
            if (!continueWithoutAvatar) {
              setLoading(false)
              return
            }
          }
        } catch (error) {
          console.error('Avatar upload error:', error)
          const continueWithoutAvatar = confirm('Fotoğraf yüklenirken bir hata oluştu. Avatar olmadan devam etmek ister misiniz?')
          if (!continueWithoutAvatar) {
            setLoading(false)
            return
          }
        }
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(newRep.email)) {
        alert('Lütfen geçerli bir e-posta adresi girin!')
        setLoading(false)
        return
      }

      // Validate phone format (basic validation)
      const phoneRegex = /^[\d\s\+\-\(\)]+$/
      if (!phoneRegex.test(newRep.phone) || newRep.phone.trim().length < 10) {
        alert('Lütfen geçerli bir telefon numarası girin!')
        setLoading(false)
        return
      }

      // Prepare data for insertion - explicitly exclude id to let Supabase generate it
      const representativeData: {
        name: string
        phone: string
        email: string
        city_id: string
        title?: string
        avatar?: string
        languages?: string[]
        working_hours?: string
      } = {
        name: newRep.name.trim(),
        phone: newRep.phone.trim(),
        email: newRep.email.trim(),
        city_id: newRep.city_id,
      }

      // Add optional fields only if they have values
      if (newRep.title?.trim()) {
        representativeData.title = newRep.title.trim()
      } else {
        // If title is required in database, set a default value
        representativeData.title = 'Temsilci'
      }

      if (newRep.languages?.trim()) {
        representativeData.languages = newRep.languages.split(',').map(l => l.trim()).filter(Boolean)
      }

      if (newRep.working_hours?.trim()) {
        representativeData.working_hours = newRep.working_hours.trim()
      }

      if (avatarUrl) {
        representativeData.avatar = avatarUrl
      }

      // Call addRepresentative - it will handle id exclusion
      await addRepresentative(representativeData)

      await loadData()
      setIsAddModalOpen(false)
      setNewRep({
        name: '',
        title: '',
        phone: '',
        email: '',
        languages: '',
        working_hours: 'Pzt-Cum 09:00-18:00',
        city_id: '',
        avatar: ''
      })
      setAvatarFile(null)
      setAvatarPreview('')
      alert('Temsilci başarıyla eklendi!')
    } catch (error: unknown) {
      console.error('Error adding representative:', error)
      
      // Show more detailed error message
      let errorMessage = 'Temsilci eklenirken bir hata oluştu!'
      
      if (error && typeof error === 'object' && 'message' in error) {
        const errorMsg = String(error.message)
        if (errorMsg.includes('duplicate') || errorMsg.includes('unique')) {
          errorMessage = 'Bu e-posta adresi zaten kullanılıyor. Lütfen farklı bir e-posta adresi girin.'
        } else if (errorMsg.includes('foreign key') || errorMsg.includes('city_id')) {
          errorMessage = 'Geçersiz şehir seçimi. Lütfen tekrar deneyin.'
        } else if (errorMsg.includes('required') || errorMsg.includes('not null')) {
          errorMessage = 'Lütfen tüm zorunlu alanları doldurun!'
        } else {
          errorMessage = `Hata: ${errorMsg}`
        }
      }
      
      alert(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleEditRepresentative = async () => {
    if (!editingRep) return

    setLoading(true)
    try {
      let avatarUrl: string | undefined = editingRep.avatar
      
      // Check if avatar was removed (preview is empty but there was an avatar before)
      const avatarRemoved = !editAvatarPreview && editingRep.avatar && !editAvatarFile
      
      // Upload new avatar if file is selected
      if (editAvatarFile) {
        try {
          const uploadedUrl = await handleAvatarUpload(editAvatarFile)
          if (uploadedUrl) {
            avatarUrl = uploadedUrl
          } else {
            // If upload failed but user wants to continue, keep existing avatar
            const continueWithExisting = confirm('Fotoğraf yüklenemedi. Mevcut fotoğraf ile devam etmek ister misiniz?')
            if (!continueWithExisting) {
              setLoading(false)
              return
            }
          }
        } catch (error) {
          console.error('Avatar upload error:', error)
          const continueWithExisting = confirm('Fotoğraf yüklenirken bir hata oluştu. Mevcut fotoğraf ile devam etmek ister misiniz?')
          if (!continueWithExisting) {
            setLoading(false)
            return
          }
        }
      } else if (avatarRemoved) {
        // Avatar was removed by user
        avatarUrl = undefined
      }

      const updatedRep = await updateRepresentative(editingRep.id, {
        name: editingRep.name,
        title: editingRep.title,
        phone: editingRep.phone,
        email: editingRep.email,
        languages: editingRep.languages,
        working_hours: editingRep.working_hours,
        city_id: editingRep.city_id,
        avatar: avatarUrl
      })

      console.log('Representative updated with avatar:', updatedRep?.avatar)
      await loadData()
      
      // Force re-render by updating selectedCityId state
      if (selectedCityId) {
        const currentCityId = selectedCityId
        setSelectedCityId('')
        setTimeout(() => setSelectedCityId(currentCityId), 100)
      }
      
      setIsEditModalOpen(false)
      setEditingRep(null)
      setEditAvatarFile(null)
      setEditAvatarPreview('')
      alert('Temsilci başarıyla güncellendi!')
    } catch (error) {
      console.error('Error updating representative:', error)
      alert('Temsilci güncellenirken bir hata oluştu!')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteRepresentative = async (repId: string) => {
    if (!confirm('Bu temsilciyi silmek istediğinizden emin misiniz?')) return

    setLoading(true)
    try {
      await deleteRepresentative(repId)
      await loadData()
      alert('Temsilci başarıyla silindi!')
    } catch (error) {
      console.error('Error deleting representative:', error)
      alert('Temsilci silinirken bir hata oluştu!')
    } finally {
      setLoading(false)
    }
  }

  const handleEditOfficeInfo = () => {
    if (selectedCityData) {
      setEditingOfficeInfo({
        office_address: selectedCityData.officeAddress || '',
        office_phone: selectedCityData.officePhone || ''
      })
      setIsEditingOfficeInfo(true)
    }
  }

  const handleSaveOfficeInfo = async () => {
    if (!selectedCityId) return

    setLoading(true)
    try {
      await updateCity(selectedCityId, {
        office_address: editingOfficeInfo.office_address || undefined,
        office_phone: editingOfficeInfo.office_phone || undefined
      })
      await loadData()
      setIsEditingOfficeInfo(false)
      alert('Ofis bilgileri başarıyla güncellendi!')
    } catch (error) {
      console.error('Error updating office info:', error)
      alert('Ofis bilgileri güncellenirken bir hata oluştu!')
    } finally {
      setLoading(false)
    }
  }

  const handleCancelEditOfficeInfo = () => {
    setIsEditingOfficeInfo(false)
    setEditingOfficeInfo({
      office_address: '',
      office_phone: ''
    })
  }

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Temsilci Yönetimi</h2>
          <p className="text-sm sm:text-base text-gray-600">Şehir seçerek temsilcileri görüntüleyin ve yönetin</p>
        </div>
        <Button
          color="primary"
          size="sm"
          className="w-full sm:w-auto font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => setIsAddCityModalOpen(true)}
          startContent={
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          }
        >
          <span className="hidden sm:inline">Yeni Şehir Ekle</span>
          <span className="sm:hidden">Şehir Ekle</span>
        </Button>
      </div>

      {/* Country Selection */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
        <CardBody className="p-4 sm:p-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center justify-between">
            <div className="flex-1 w-full md:w-auto">
              <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ülke Seçimi
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">Temsilcilerini yönetmek için önce bir ülke seçin</p>
            </div>
            <div className="w-full md:w-auto md:max-w-xs">
              {isMobile ? (
                <>
                  <Button
                    variant="bordered"
                    className="w-full justify-between bg-white h-14 text-left font-normal text-gray-500"
                    onPress={() => setIsCountryModalOpen(true)}
                    endContent={
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    }
                  >
                    {selectedCountry ? COUNTRIES.find(c => c.code === selectedCountry)?.name || "Ülke seçiniz" : "Ülke seçiniz"}
                  </Button>
                  
                  {/* Country Selection Modal */}
                  <Modal 
                    isOpen={isCountryModalOpen} 
                    onClose={() => setIsCountryModalOpen(false)}
                    size="full"
                    scrollBehavior="inside"
                    classNames={{
                      backdrop: "bg-black/50 backdrop-blur-md",
                      base: "bg-white",
                      wrapper: "p-0",
                    }}
                  >
                    <ModalContent>
                      <ModalHeader className="flex flex-col gap-1 p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900">Ülke Seçin</h2>
                        <p className="text-sm text-gray-600">Temsilcilerini yönetmek için bir ülke seçin</p>
                      </ModalHeader>
                      <ModalBody className="p-0">
                        <div className="divide-y divide-gray-200">
                          {COUNTRIES.map((country) => (
                            <button
                              key={country.code}
                              onClick={() => {
                                handleCountrySelection(country.code)
                                setIsCountryModalOpen(false)
                              }}
                              className={`w-full p-4 text-left hover:bg-primary/5 transition-colors ${
                                selectedCountry === country.code ? 'bg-primary/10' : ''
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{country.flag}</span>
                                <span className="text-lg font-medium text-gray-900">{country.name}</span>
                                {selectedCountry === country.code && (
                                  <svg className="w-5 h-5 text-primary ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </>
              ) : (
                <Select
                  placeholder="Ülke seçiniz"
                  selectedKeys={selectedCountry ? [selectedCountry] : []}
                  onSelectionChange={(keys) => {
                    const selectedKey = Array.from(keys)[0] as string
                    if (selectedKey) {
                      handleCountrySelection(selectedKey)
                    }
                  }}
                  variant="bordered"
                  size="lg"
                  className="w-full"
                  classNames={{
                    value: "text-gray-900 pl-3",
                    trigger: "bg-white pl-3 focus:outline-none focus:ring-0 data-[focus=true]:ring-0",
                    selectorIcon: "absolute end-3 text-gray-500",
                    innerWrapper: "w-[calc(100%-theme(spacing.8))]",
                    popoverContent: "bg-white border border-gray-200 shadow-lg rounded-lg",
                    listboxWrapper: "p-2",
                    base: "focus:outline-none focus:ring-0",
                  }}
                >
                  {COUNTRIES.map((country, index) => (
                    <SelectItem 
                      key={country.code} 
                      textValue={country.name}
                      classNames={{
                        base: `rounded-md hover:bg-primary/10 cursor-pointer ${index < COUNTRIES.length - 1 ? 'border-b border-gray-200' : ''}`
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span>{country.flag}</span>
                        <span>{country.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </Select>
              )}
            </div>
          </div>
        </CardBody>
      </Card>

      {/* City Selection - Only for Turkey */}
      {selectedCountry === 'tr' && (
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardBody className="p-4 sm:p-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center justify-between">
              <div className="flex-1 w-full md:w-auto">
                <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Türkiye Şehirleri
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">Türkiye&apos;de temsilcilerini görmek için bir şehir seçin</p>
              </div>
              <div className="w-full md:w-auto md:max-w-xs">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Şehir
                </label>
                {isMobile ? (
                  <>
                    <Button
                      variant="bordered"
                      className="w-full justify-between bg-white h-14 text-left font-normal text-gray-500"
                      onPress={() => setIsCityModalOpen(true)}
                      endContent={
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      }
                    >
                      {selectedCityName || "Şehir seçiniz"}
                    </Button>
                    
                    {/* City Selection Modal */}
                    <Modal 
                      isOpen={isCityModalOpen} 
                      onClose={() => {
                        setIsCityModalOpen(false)
                        setCitySearchTerm('')
                      }}
                      size="full"
                      scrollBehavior="inside"
                      classNames={{
                        backdrop: "bg-black/50 backdrop-blur-md",
                        base: "bg-white",
                        wrapper: "p-0",
                      }}
                    >
                      <ModalContent>
                        <ModalHeader className="flex flex-col gap-1 p-6 border-b border-gray-200">
                          <h2 className="text-2xl font-bold text-gray-900">Şehir Seçin</h2>
                          <p className="text-sm text-gray-600">Türkiye&apos;de temsilcilerini görmek için bir şehir seçin</p>
                        </ModalHeader>
                        <ModalBody className="p-0">
                          {/* Search Input */}
                          <div className="p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
                            <Input
                              placeholder="Şehir ara..."
                              value={citySearchTerm}
                              onValueChange={(value) => setCitySearchTerm(value)}
                              variant="bordered"
                              size="lg"
                              startContent={
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                              }
                              classNames={{
                                input: "bg-white focus:outline-none focus:ring-0",
                                base: "group",
                                inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                              }}
                            />
                          </div>
                          {/* City List */}
                          <div className="divide-y divide-gray-200">
                            {filteredCities.length > 0 ? (
                              filteredCities.map((city) => (
                                <button
                                  key={city}
                                  onClick={() => {
                                    handleCitySelection(city)
                                    setIsCityModalOpen(false)
                                    setCitySearchTerm('')
                                  }}
                                  className={`w-full p-4 text-left hover:bg-primary/5 transition-colors ${
                                    selectedCityName === city ? 'bg-primary/10' : ''
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-lg font-medium text-gray-900">{city}</span>
                                    {selectedCityName === city && (
                                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                    )}
                                  </div>
                                </button>
                              ))
                            ) : (
                              <div className="px-4 py-8 text-center text-gray-500 text-sm">
                                Şehir bulunamadı
                              </div>
                            )}
                          </div>
                        </ModalBody>
                      </ModalContent>
                    </Modal>
                  </>
                ) : (
                  <div className="relative city-dropdown-container">
                    <Button
                      variant="bordered"
                      className="w-full justify-between bg-white h-14 text-left font-normal text-gray-500 city-dropdown-button"
                      onPress={() => {
                        if (!isCityDropdownOpen) {
                          const button = document.querySelector('.city-dropdown-button') as HTMLElement
                          if (button) {
                            const rect = button.getBoundingClientRect()
                            const viewportHeight = window.innerHeight
                            const dropdownHeight = 280 // max-h-[280px] + padding
                            const spaceBelow = viewportHeight - rect.bottom
                            const spaceAbove = rect.top
                            
                            // Calculate position - prefer below, but if not enough space, show above
                            let top: number
                            if (spaceBelow >= dropdownHeight || spaceBelow > spaceAbove) {
                              // Show below button
                              top = rect.bottom + window.scrollY + 8
                            } else {
                              // Show above button
                              top = rect.top + window.scrollY - dropdownHeight - 8
                            }
                            
                            // Ensure dropdown doesn't go off screen
                            const maxTop = window.scrollY + viewportHeight - dropdownHeight - 8
                            const minTop = window.scrollY + 8
                            
                            setDropdownPosition({
                              top: Math.max(minTop, Math.min(top, maxTop)),
                              left: rect.left + window.scrollX,
                              width: rect.width
                            })
                          }
                        }
                        setIsCityDropdownOpen(!isCityDropdownOpen)
                      }}
                      endContent={
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      }
                    >
                      {selectedCityName || "Şehir seçiniz"}
                    </Button>
                    
                    {isCityDropdownOpen && (
                      <>
                        {/* Backdrop */}
                        <div 
                          className="fixed inset-0 z-[9998]" 
                          onClick={() => setIsCityDropdownOpen(false)}
                        />
                        {/* Dropdown */}
                        <div 
                          className="fixed z-[9999] bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden max-h-[280px]"
                          style={{
                            top: `${dropdownPosition.top}px`,
                            left: `${dropdownPosition.left}px`,
                            width: `${dropdownPosition.width}px`,
                            maxWidth: 'calc(100vw - 32px)', // Ensure it doesn't overflow on mobile
                          }}
                        >
                        {/* Search Input */}
                        <div className="p-3 border-b border-gray-200">
                          <Input
                            placeholder="Şehir ara..."
                            value={citySearchTerm}
                            onValueChange={(value) => setCitySearchTerm(value)}
                            variant="bordered"
                            size="sm"
                            startContent={
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            }
                            classNames={{
                              input: "bg-white focus:outline-none focus:ring-0",
                              base: "group",
                              inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Escape') {
                                setIsCityDropdownOpen(false)
                              }
                            }}
                          />
                        </div>
                        
                        {/* City List */}
                        <div className="max-h-[280px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                          {filteredCities.length > 0 ? (
                            filteredCities.map((city, index) => (
                              <button
                                key={city}
                                onClick={() => handleCitySelection(city)}
                                className={`w-full text-left px-4 py-3 text-sm text-gray-900 hover:bg-primary/10 transition-colors ${
                                  index < filteredCities.length - 1 ? 'border-b border-gray-200' : ''
                                } ${selectedCityName === city ? 'bg-primary/5 font-semibold' : ''}`}
                              >
                                {city}
                              </button>
                            ))
                          ) : (
                            <div className="px-4 py-8 text-center text-gray-500 text-sm">
                              Şehir bulunamadı
                            </div>
                          )}
                        </div>
                      </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
      )}

      {/* Selected City Info */}
      {selectedCityData && (
        <>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {selectedCityData.cityName}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                {selectedCityData.representatives.length} temsilci • 
                <span className="text-primary font-medium ml-1">Aktif</span>
              </p>
            </div>
            <Button
              color="primary"
              size="sm"
              className="w-full sm:w-auto font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                setNewRep({...newRep, city_id: selectedCityId})
                setIsAddModalOpen(true)
              }}
              startContent={
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              }
            >
              <span className="hidden sm:inline">Yeni Temsilci Ekle</span>
              <span className="sm:hidden">Temsilci Ekle</span>
            </Button>
          </div>

          {/* Office Info */}
          <Card>
            <CardBody className="p-4 sm:p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-base sm:text-lg">Ofis Bilgileri</h4>
                {!isEditingOfficeInfo && (
                  <Button
                    size="sm"
                    color="primary"
                    variant="flat"
                    className="font-semibold"
                    startContent={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    }
                    onClick={handleEditOfficeInfo}
                  >
                    <span className="hidden sm:inline">Düzenle</span>
                    <span className="sm:hidden">Düzenle</span>
                  </Button>
                )}
              </div>

              {isEditingOfficeInfo ? (
                <div className="space-y-4">
                  <Input
                    label="Adres"
                    placeholder="Ofis adresini girin"
                    labelPlacement="outside-top"
                    value={editingOfficeInfo.office_address}
                    onValueChange={(value) => setEditingOfficeInfo({...editingOfficeInfo, office_address: value})}
                    variant="bordered"
                    classNames={{
                      input: "bg-white focus:outline-none focus:ring-0",
                      base: "group",
                      label: "text-sm font-medium",
                      inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                    }}
                  />
                  <Input
                    label="Telefon"
                    placeholder="+90 212 345 67 89"
                    labelPlacement="outside-top"
                    value={editingOfficeInfo.office_phone}
                    onValueChange={(value) => setEditingOfficeInfo({...editingOfficeInfo, office_phone: value})}
                    variant="bordered"
                    classNames={{
                      input: "bg-white focus:outline-none focus:ring-0",
                      base: "group",
                      label: "text-sm font-medium",
                      inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                    }}
                  />
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      color="primary"
                      variant="flat"
                      className="flex-1 font-semibold"
                      onClick={handleSaveOfficeInfo}
                      isLoading={loading}
                      startContent={
                        !loading && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )
                      }
                    >
                      Kaydet
                    </Button>
                    <Button
                      size="sm"
                      color="default"
                      variant="bordered"
                      className="flex-1 font-semibold"
                      onClick={handleCancelEditOfficeInfo}
                      isDisabled={loading}
                      startContent={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      }
                    >
                      İptal
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-sm">
                  {selectedCityData.officeAddress ? (
                    <p className="text-gray-700"><strong>Adres:</strong> {selectedCityData.officeAddress}</p>
                  ) : (
                    <p className="text-gray-500 italic">Adres bilgisi eklenmemiş</p>
                  )}
                  {selectedCityData.officePhone ? (
                    <p className="text-gray-700"><strong>Telefon:</strong> {selectedCityData.officePhone}</p>
                  ) : (
                    <p className="text-gray-500 italic">Telefon bilgisi eklenmemiş</p>
                  )}
                  {!selectedCityData.officeAddress && !selectedCityData.officePhone && (
                    <p className="text-gray-500 italic text-center py-2">Ofis bilgileri henüz eklenmemiş. Düzenle butonuna tıklayarak ekleyebilirsiniz.</p>
                  )}
                </div>
              )}
            </CardBody>
          </Card>

          {/* Representatives List */}
          {loading ? (
            <div className="text-center py-8 sm:py-12">
              <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-sm sm:text-base text-gray-600">Temsilciler yükleniyor...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {selectedCityData.representatives.map((rep) => (
                <RepresentativeCard key={rep.id} rep={rep} onEdit={() => {
                  setEditingRep(rep)
                  setEditAvatarPreview(rep.avatar || '')
                  setEditAvatarFile(null)
                  setIsEditModalOpen(true)
                }} onDelete={() => handleDeleteRepresentative(rep.id)} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Country Representatives - For non-Turkey countries */}
      {selectedCountry && selectedCountry !== 'tr' && !selectedCityId && (
        <Card className="bg-gradient-to-br from-green-50 to-green-100">
          <CardBody className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  {COUNTRIES.find(c => c.code === selectedCountry)?.flag}
                  {COUNTRIES.find(c => c.code === selectedCountry)?.name} Temsilcileri
                </h3>
                <p className="text-gray-600">Bu ülke için temsilcileri yönetin</p>
              </div>
              <Button
                color="primary"
                size="lg"
                onClick={() => {
                  setNewRep({...newRep, city_id: selectedCountry})
                  setIsAddModalOpen(true)
                }}
                startContent={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                }
              >
                Yeni Temsilci Ekle
              </Button>
            </div>
            
            <div className="text-center py-12">
              <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Henüz Temsilci Yok</h3>
              <p className="text-gray-500 mb-4">Bu ülke için henüz temsilci eklenmemiş</p>
              <Button
                color="primary"
                variant="flat"
                onClick={() => {
                  setNewRep({...newRep, city_id: selectedCountry})
                  setIsAddModalOpen(true)
                }}
                startContent={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                }
              >
                İlk Temsilciyi Ekle
              </Button>
            </div>
          </CardBody>
        </Card>
      )}

      {!selectedCountry && !loading && (
        <Card>
          <CardBody className="p-12 text-center">
            <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Ülke Seçin</h3>
            <p className="text-gray-500">Temsilcileri görüntülemek için yukarıdan bir ülke seçin</p>
          </CardBody>
        </Card>
      )}

      {selectedCountry === 'tr' && !selectedCityId && !loading && (
        <Card>
          <CardBody className="p-12 text-center">
            <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Şehir Seçin</h3>
            <p className="text-gray-500">Türkiye&apos;de temsilcileri görüntülemek için yukarıdan bir şehir seçin</p>
          </CardBody>
        </Card>
      )}

      {/* Add City Modal */}
      <Modal 
        isOpen={isAddCityModalOpen} 
        onClose={() => setIsAddCityModalOpen(false)} 
        size="2xl"
        classNames={{
          backdrop: "bg-black/50 backdrop-blur-md",
          base: "bg-white mx-2 sm:mx-4",
          wrapper: "p-2 sm:p-4 md:p-6"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2 bg-white border-b border-gray-200 p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Yeni Şehir Ekle</h2>
              </ModalHeader>
              <ModalBody className="p-6 sm:p-8">
                <div className="space-y-6">
                  <Input
                    label="Şehir Adı"
                    placeholder="Örn: İstanbul"
                    labelPlacement="outside-top"
                    value={newCity.city_name}
                    onValueChange={(value) => setNewCity({...newCity, city_name: value})}
                    variant="bordered"
                    isRequired
                    classNames={{
                      input: "bg-white focus:outline-none focus:ring-0",
                      base: "group",
                      label: "text-sm font-medium",
                      inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                    }}
                  />
                  <Input
                    label="Ofis Adresi"
                    placeholder="Ofis adresi (opsiyonel)"
                    labelPlacement="outside-top"
                    value={newCity.office_address}
                    onValueChange={(value) => setNewCity({...newCity, office_address: value})}
                    variant="bordered"
                    classNames={{
                      input: "bg-white focus:outline-none focus:ring-0",
                      base: "group",
                      label: "text-sm font-medium",
                      inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                    }}
                  />
                  <Input
                    label="Ofis Telefonu"
                    placeholder="Ofis telefonu (opsiyonel)"
                    labelPlacement="outside-top"
                    value={newCity.office_phone}
                    onValueChange={(value) => setNewCity({...newCity, office_phone: value})}
                    variant="bordered"
                    classNames={{
                      input: "bg-white focus:outline-none focus:ring-0",
                      base: "group",
                      label: "text-sm font-medium",
                      inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter className="bg-gray-50 border-t border-gray-200 p-6 sm:p-8">
                <div className="flex gap-3 w-full">
                  <Button 
                    color="default" 
                    variant="bordered" 
                    onPress={onClose}
                    className="flex-1 font-semibold text-gray-700 border-gray-300 hover:bg-gray-50"
                    startContent={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    }
                  >
                    İptal
                  </Button>
                  <Button 
                    color="default" 
                    onPress={handleAddCity} 
                    isLoading={loading}
                    className="flex-1 font-semibold bg-gray-900 text-white hover:bg-gray-800"
                    startContent={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    }
                  >
                    Şehir Ekle
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Add Representative Modal */}
      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        size="3xl"
        scrollBehavior="inside"
        backdrop="blur"
        classNames={{
          backdrop: "bg-black/50 backdrop-blur-md",
          base: "bg-white mx-2 sm:mx-4",
          wrapper: "p-2 sm:p-4 md:p-6"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2 bg-white border-b border-gray-200 p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Yeni Temsilci Ekle</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {selectedCity?.city_name ? `${selectedCity.city_name} için` : 'Yeni temsilci bilgilerini girin'}
                </p>
              </ModalHeader>
              <ModalBody className="p-6 sm:p-8">
                <div className="space-y-6">
                  {/* Avatar Upload */}
                  <div className="flex flex-col items-center gap-4 pb-6 border-b border-gray-200">
                    <div className="relative">
                      {avatarPreview ? (
                        <div className="relative">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={avatarPreview}
                            alt="Avatar preview"
                            className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setAvatarFile(null)
                              setAvatarPreview('')
                              setNewRep({...newRep, avatar: ''})
                            }}
                            className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white text-4xl font-bold border-4 border-primary shadow-lg">
                          {newRep.name ? newRep.name.charAt(0).toUpperCase() : '?'}
                        </div>
                      )}
                    </div>
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            setAvatarFile(file)
                            const reader = new FileReader()
                            reader.onloadend = () => {
                              setAvatarPreview(reader.result as string)
                            }
                            reader.readAsDataURL(file)
                          }
                        }}
                      />
                      <Button
                        as="span"
                        variant="bordered"
                        size="sm"
                        className="font-semibold"
                        startContent={
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        }
                      >
                        Fotoğraf Yükle
                      </Button>
                    </label>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Ad Soyad"
                      placeholder="Temsilcinin adı"
                      labelPlacement="outside-top"
                      value={newRep.name}
                      onValueChange={(value) => setNewRep({...newRep, name: value})}
                      variant="bordered"
                      isRequired
                      classNames={{
                        input: "bg-white focus:outline-none focus:ring-0",
                        base: "group",
                        label: "text-sm font-medium",
                        inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                      }}
                    />
                    <Input
                      label="Ünvan"
                      placeholder="Örn: Eğitim Danışmanı"
                      labelPlacement="outside-top"
                      value={newRep.title}
                      onValueChange={(value) => setNewRep({...newRep, title: value})}
                      variant="bordered"
                      isRequired
                      classNames={{
                        input: "bg-white focus:outline-none focus:ring-0",
                        base: "group",
                        label: "text-sm font-medium",
                        inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Telefon"
                      placeholder="+90 5xx xxx xx xx"
                      labelPlacement="outside-top"
                      value={newRep.phone}
                      onValueChange={(value) => setNewRep({...newRep, phone: value})}
                      variant="bordered"
                      isRequired
                      classNames={{
                        input: "bg-white focus:outline-none focus:ring-0",
                        base: "group",
                        label: "text-sm font-medium",
                        inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                      }}
                    />
                    <Input
                      label="E-posta"
                      type="email"
                      placeholder="email@akaegitim.com"
                      labelPlacement="outside-top"
                      value={newRep.email}
                      onValueChange={(value) => setNewRep({...newRep, email: value})}
                      variant="bordered"
                      isRequired
                      classNames={{
                        input: "bg-white focus:outline-none focus:ring-0",
                        base: "group",
                        label: "text-sm font-medium",
                        inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                      }}
                    />
                  </div>

                  <Input
                    label="Diller"
                    placeholder="Örn: Türkçe, İngilizce, Almanca (virgülle ayırın)"
                    labelPlacement="outside-top"
                    value={newRep.languages}
                    onValueChange={(value) => setNewRep({...newRep, languages: value})}
                    variant="bordered"
                    classNames={{
                      input: "bg-white focus:outline-none focus:ring-0",
                      base: "group",
                      label: "text-sm font-medium",
                      inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                    }}
                  />

                  <Input
                    label="Çalışma Saatleri"
                    placeholder="Örn: Pzt-Cum 09:00-18:00"
                    labelPlacement="outside-top"
                    value={newRep.working_hours}
                    onValueChange={(value) => setNewRep({...newRep, working_hours: value})}
                    variant="bordered"
                    classNames={{
                      input: "bg-white focus:outline-none focus:ring-0",
                      base: "group",
                      label: "text-sm font-medium",
                      inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter className="bg-gray-50 border-t border-gray-200 p-6 sm:p-8">
                <div className="flex gap-3 w-full">
                   <Button 
                     color="default" 
                     variant="bordered" 
                     onPress={onClose}
                     className="flex-1 font-semibold text-gray-700 border-gray-300 hover:bg-gray-50"
                     startContent={
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                       </svg>
                     }
                   >
                     İptal
                   </Button>
                   <Button 
                     color="default" 
                     onPress={handleAddRepresentative} 
                     isLoading={loading}
                     className="flex-1 font-semibold bg-gray-900 text-white hover:bg-gray-800"
                     startContent={
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                       </svg>
                     }
                   >
                     Temsilci Ekle
                   </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Edit Representative Modal */}
      <Modal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        size="3xl"
        scrollBehavior="inside"
        backdrop="blur"
        classNames={{
          backdrop: "bg-black/50 backdrop-blur-md",
          base: "bg-white mx-2 sm:mx-4",
          wrapper: "p-2 sm:p-4 md:p-6"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2 bg-white border-b border-gray-200 p-4 sm:p-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Temsilci Düzenle</h2>
                <p className="text-sm sm:text-base text-gray-600">Temsilci bilgilerini güncelleyin</p>
              </ModalHeader>
              <ModalBody className="p-4 sm:p-5">
                {editingRep && (
                  <div className="space-y-6">
                    {/* Avatar Upload */}
                    <div className="flex flex-col items-center gap-4 pb-6 border-b border-gray-200">
                      <div className="relative">
                        {(editAvatarPreview || editingRep.avatar) ? (
                          <div className="relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={editAvatarPreview || editingRep.avatar || ''}
                              alt="Avatar preview"
                              className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setEditAvatarFile(null)
                                setEditAvatarPreview('')
                              }}
                              className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white text-4xl font-bold border-4 border-primary shadow-lg">
                            {editingRep.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) {
                              setEditAvatarFile(file)
                              const reader = new FileReader()
                              reader.onloadend = () => {
                                setEditAvatarPreview(reader.result as string)
                              }
                              reader.readAsDataURL(file)
                            }
                          }}
                        />
                        <Button
                          as="span"
                          variant="bordered"
                          size="sm"
                          className="font-semibold"
                          startContent={
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          }
                        >
                          Fotoğraf Değiştir
                        </Button>
                      </label>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <Input
                         label="Ad Soyad"
                         placeholder="Temsilcinin adı"
                         labelPlacement="outside-top"
                         value={editingRep.name}
                         onValueChange={(value) => setEditingRep({...editingRep, name: value})}
                         variant="bordered"
                         classNames={{
                           input: "bg-white focus:outline-none focus:ring-0",
                           base: "group",
                           label: "text-sm font-medium",
                           inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                         }}
                       />
                       <Input
                         label="Ünvan"
                         placeholder="Örn: Eğitim Danışmanı"
                         labelPlacement="outside-top"
                         value={editingRep.title}
                         onValueChange={(value) => setEditingRep({...editingRep, title: value})}
                         variant="bordered"
                         classNames={{
                           input: "bg-white focus:outline-none focus:ring-0",
                           base: "group",
                           label: "text-sm font-medium",
                           inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                         }}
                       />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Telefon"
                        placeholder="+90 5xx xxx xx xx"
                        labelPlacement="outside-top"
                        value={editingRep.phone}
                        onValueChange={(value) => setEditingRep({...editingRep, phone: value})}
                        variant="bordered"
                        classNames={{
                          input: "bg-white focus:outline-none focus:ring-0",
                          base: "group",
                          label: "text-sm font-medium",
                          inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                        }}
                      />
                      <Input
                        label="E-posta"
                        type="email"
                        placeholder="email@akaegitim.com"
                        labelPlacement="outside-top"
                        value={editingRep.email}
                        onValueChange={(value) => setEditingRep({...editingRep, email: value})}
                        variant="bordered"
                        classNames={{
                          input: "bg-white focus:outline-none focus:ring-0",
                          base: "group",
                          label: "text-sm font-medium",
                          inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                        }}
                      />
                    </div>

                    <Input
                      label="Diller"
                      placeholder="Örn: Türkçe, İngilizce, Almanca (virgülle ayırın)"
                      labelPlacement="outside-top"
                      value={editingRep.languages?.join(', ') || ''}
                      onValueChange={(value) => setEditingRep({...editingRep, languages: value.split(',').map(l => l.trim()).filter(Boolean)})}
                      variant="bordered"
                      classNames={{
                        input: "bg-white focus:outline-none focus:ring-0",
                        base: "group",
                        label: "text-sm font-medium",
                        inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                      }}
                    />

                    <Input
                      label="Çalışma Saatleri"
                      placeholder="Örn: Pzt-Cum 09:00-18:00"
                      labelPlacement="outside-top"
                      value={editingRep.working_hours || ''}
                      onValueChange={(value) => setEditingRep({...editingRep, working_hours: value})}
                      variant="bordered"
                      classNames={{
                        input: "bg-white focus:outline-none focus:ring-0",
                        base: "group",
                        label: "text-sm font-medium",
                        inputWrapper: "focus-within:ring-0 focus-within:ring-offset-0",
                      }}
                    />
                  </div>
                )}
              </ModalBody>
              <ModalFooter className="bg-gray-50 border-t border-gray-200 p-3 sm:p-4">
                <div className="flex gap-3 w-full">
                   <Button 
                     color="default" 
                     variant="bordered" 
                     onPress={onClose}
                     className="flex-1 font-semibold text-gray-700 border-gray-300 hover:bg-gray-50"
                     startContent={
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                       </svg>
                     }
                   >
                     İptal
                   </Button>
                   <Button 
                     color="default" 
                     onPress={handleEditRepresentative} 
                     isLoading={loading}
                     className="flex-1 font-semibold bg-gray-900 text-white hover:bg-gray-800"
                     startContent={
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                       </svg>
                     }
                   >
                     Güncelle
                   </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
