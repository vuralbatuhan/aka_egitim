-- Instagram Posts Table
CREATE TABLE IF NOT EXISTS instagram_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  link TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT,
  program_type TEXT,
  program TEXT,
  message TEXT,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable Row Level Security (RLS)
ALTER TABLE instagram_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read active instagram posts
CREATE POLICY "Anyone can read active instagram posts"
  ON instagram_posts
  FOR SELECT
  USING (is_active = true);

-- Policy: Anyone can insert contact submissions
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only authenticated users can manage instagram posts
CREATE POLICY "Authenticated users can manage instagram posts"
  ON instagram_posts
  FOR ALL
  USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can read all contact submissions
CREATE POLICY "Authenticated users can read contact submissions"
  ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can update contact submissions
CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_instagram_posts_order ON instagram_posts(order_index, is_active);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_read ON contact_submissions(is_read);
