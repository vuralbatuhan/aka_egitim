import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types matching your Supabase schema
export interface CityRepresentative {
  id: string
  city_name: string
  office_address?: string
  office_phone?: string
  created_at?: string
  updated_at?: string
}

export interface Representative {
  id: string
  name: string
  title: string
  phone: string
  email: string
  avatar?: string
  languages?: string[]
  working_hours?: string
  city_id: string
  created_at?: string
  updated_at?: string
}

// Extended type with city info for UI
export interface RepresentativeWithCity extends Representative {
  city_representatives?: CityRepresentative
}

// Contact Submission Types
export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  city: string
  program: string
  country: string
  message?: string
  status: 'new' | 'contacted' | 'completed'
  created_at: string
}

// Form submission CRUD operations
export async function submitContactForm(data: {
  name: string
  email: string
  phone: string
  city: string
  program: string
  country: string
  message?: string
}) {
  const newSubmission = {
    ...data,
    status: 'new' as const,
  }

  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([newSubmission])
    .select()
    .single()

  if (error) {
    console.error('Error submitting form:', error)
    throw error
  }

  return result as ContactSubmission
}

export async function getAllContactSubmissions() {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching submissions:', error)
    return []
  }

  return data as ContactSubmission[]
}

export async function updateSubmissionStatus(id: string, status: 'new' | 'contacted' | 'completed') {
  const { data, error } = await supabase
    .from('contact_submissions')
    .update({ status })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating submission:', error)
    throw error
  }

  return data as ContactSubmission
}

export async function deleteContactSubmission(id: string) {
  const { error } = await supabase
    .from('contact_submissions')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting submission:', error)
    throw error
  }

  return true
}

export async function getTotalSubmissionsCount() {
  const { count, error } = await supabase
    .from('contact_submissions')
    .select('*', { count: 'exact', head: true })

  if (error) {
    console.error('Error counting submissions:', error)
    return 0
  }

  return count || 0
}

// City CRUD operations
export async function getAllCities() {
  const { data, error } = await supabase
    .from('city_representatives')
    .select('*')
    .order('city_name', { ascending: true })

  if (error) {
    console.error('Error fetching cities:', error)
    return []
  }

  return data as CityRepresentative[]
}

export async function getCityById(cityId: string) {
  const { data, error } = await supabase
    .from('city_representatives')
    .select('*')
    .eq('id', cityId)
    .single()

  if (error) {
    console.error('Error fetching city:', error)
    return null
  }

  return data as CityRepresentative
}

export async function addCity(city: { city_name: string; office_address?: string; office_phone?: string }) {
  const { data, error } = await supabase
    .from('city_representatives')
    .insert([city])
    .select()
    .single()

  if (error) {
    console.error('Error adding city:', error)
    throw error
  }

  return data as CityRepresentative
}

export async function updateCity(id: string, updates: Partial<CityRepresentative>) {
  const { data, error } = await supabase
    .from('city_representatives')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating city:', error)
    throw error
  }

  return data as CityRepresentative
}

export async function deleteCity(id: string) {
  // First, delete all representatives in this city
  await supabase
    .from('representatives')
    .delete()
    .eq('city_id', id)

  // Then delete the city
  const { error } = await supabase
    .from('city_representatives')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting city:', error)
    throw error
  }

  return true
}

// Representative CRUD operations
export async function getAllRepresentatives() {
  const { data, error } = await supabase
    .from('representatives')
    .select(`
      *,
      city_representatives (*)
    `)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching representatives:', error)
    return []
  }

  return data as RepresentativeWithCity[]
}

export async function getRepresentativesByCity(cityId: string) {
  const { data, error } = await supabase
    .from('representatives')
    .select(`
      *,
      city_representatives (*)
    `)
    .eq('city_id', cityId)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching representatives:', error)
    return []
  }

  return data as RepresentativeWithCity[]
}

export async function addRepresentative(representative: { 
  name: string
  title?: string
  phone: string
  email: string
  city_id: string
  avatar?: string
  languages?: string[]
  working_hours?: string
}) {
  // Generate UUID for id if Supabase doesn't auto-generate
  // Using crypto.randomUUID() which is available in modern browsers
  const generateUUID = () => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID()
    }
    // Fallback UUID v4 generator
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }

  // Get current timestamp in ISO format
  const now = new Date().toISOString()

  // Explicitly create data object with generated UUID
  // Also exclude any undefined values to avoid issues
  const dataToInsert: Record<string, unknown> = {
    id: generateUUID(), // Manually generate UUID
    name: representative.name,
    phone: representative.phone,
    email: representative.email,
    city_id: representative.city_id,
    created_at: now, // Add created_at timestamp
    updated_at: now, // Add updated_at timestamp
  }

  // Add optional fields only if they exist
  if (representative.title) {
    dataToInsert.title = representative.title
  } else {
    // Title is required in database, set default
    dataToInsert.title = 'Temsilci'
  }
  
  if (representative.avatar) {
    dataToInsert.avatar = representative.avatar
  }
  if (representative.languages && representative.languages.length > 0) {
    dataToInsert.languages = representative.languages
  }
  if (representative.working_hours) {
    dataToInsert.working_hours = representative.working_hours
  }
  
  console.log('Inserting representative data:', dataToInsert)
  
  const { data, error } = await supabase
    .from('representatives')
    .insert([dataToInsert])
    .select(`
      *,
      city_representatives (*)
    `)
    .single()

  if (error) {
    console.error('Error adding representative:', error)
    console.error('Error details:', JSON.stringify(error, null, 2))
    throw error
  }

  return data as RepresentativeWithCity
}

export async function updateRepresentative(id: string, updates: Partial<Representative>) {
  const { data, error } = await supabase
    .from('representatives')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select(`
      *,
      city_representatives (*)
    `)
    .single()

  if (error) {
    console.error('Error updating representative:', error)
    throw error
  }

  return data as RepresentativeWithCity
}

export async function deleteRepresentative(id: string) {
  const { error } = await supabase
    .from('representatives')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting representative:', error)
    throw error
  }

  return true
}

// Get total representatives count
export async function getTotalRepresentativesCount() {
  const { count, error } = await supabase
    .from('representatives')
    .select('*', { count: 'exact', head: true })

  if (error) {
    console.error('Error counting representatives:', error)
    return 0
  }

  return count || 0
}

// Get active cities count
export async function getActiveCitiesCount() {
  const { count, error } = await supabase
    .from('city_representatives')
    .select('*', { count: 'exact', head: true })

  if (error) {
    console.error('Error counting cities:', error)
    return 0
  }

  return count || 0
}

