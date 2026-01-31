-- Programs Table (Programlar - Dil Kampı vb.)
CREATE TABLE IF NOT EXISTS programs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  school_name TEXT,
  duration_text TEXT,
  dates_text TEXT,
  highlights JSONB DEFAULT '[]'::jsonb,
  included_items JSONB DEFAULT '[]'::jsonb,
  extra_advantages JSONB DEFAULT '[]'::jsonb,
  contact_name TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Program Images (her program için birden fazla görsel)
CREATE TABLE IF NOT EXISTS program_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  program_id UUID NOT NULL REFERENCES programs(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  caption TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_images ENABLE ROW LEVEL SECURITY;

-- Public can read active programs
CREATE POLICY "Anyone can read active programs"
  ON programs FOR SELECT
  USING (is_active = true);

-- Public can read program images for active programs (via join or by program_id)
CREATE POLICY "Anyone can read program images"
  ON program_images FOR SELECT
  USING (true);

-- Authenticated users can manage programs
CREATE POLICY "Authenticated users can manage programs"
  ON programs FOR ALL
  USING (auth.role() = 'authenticated');

-- Authenticated users can manage program images
CREATE POLICY "Authenticated users can manage program images"
  ON program_images FOR ALL
  USING (auth.role() = 'authenticated');

CREATE INDEX IF NOT EXISTS idx_programs_order ON programs(order_index, is_active);
CREATE INDEX IF NOT EXISTS idx_program_images_program ON program_images(program_id, order_index);
