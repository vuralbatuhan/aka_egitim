-- Migration: Fix RLS security and performance issues
-- Run this in Supabase SQL Editor or via Supabase CLI
--
-- Fixes:
-- 1. Security: contact_submissions INSERT - restrict WITH CHECK to required fields
-- 2. Performance: Replace auth.role() with (select auth.role()) in all policies
-- 3. Performance: Consolidate duplicate SELECT policies (single policy per table/action)

-- =============================================================================
-- CONTACT_SUBMISSIONS
-- =============================================================================

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can read contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can delete contact submissions" ON contact_submissions;

-- INSERT: Restrict to valid rows (required fields), not unrestricted true
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (
    first_name IS NOT NULL AND trim(first_name) != '' AND
    last_name IS NOT NULL AND trim(last_name) != '' AND
    phone IS NOT NULL AND trim(phone) != ''
  );

-- SELECT: Use (select auth.role()) for single evaluation per query
CREATE POLICY "Authenticated users can read contact submissions"
  ON contact_submissions
  FOR SELECT
  USING ((select auth.role()) = 'authenticated');

-- UPDATE
CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  USING ((select auth.role()) = 'authenticated');

-- DELETE
CREATE POLICY "Authenticated users can delete contact submissions"
  ON contact_submissions
  FOR DELETE
  USING ((select auth.role()) = 'authenticated');

-- =============================================================================
-- INSTAGRAM_POSTS (consolidate SELECT + fix auth.role performance)
-- =============================================================================

DROP POLICY IF EXISTS "Anyone can read active instagram posts" ON instagram_posts;
DROP POLICY IF EXISTS "Authenticated users can manage instagram posts" ON instagram_posts;

-- Single SELECT policy: public sees active, authenticated sees all
CREATE POLICY "Read instagram posts"
  ON instagram_posts
  FOR SELECT
  USING (
    is_active = true OR (select auth.role()) = 'authenticated'
  );

-- Authenticated: INSERT, UPDATE, DELETE only (no duplicate SELECT)
CREATE POLICY "Authenticated users can insert instagram posts"
  ON instagram_posts FOR INSERT
  WITH CHECK ((select auth.role()) = 'authenticated');

CREATE POLICY "Authenticated users can update instagram posts"
  ON instagram_posts FOR UPDATE
  USING ((select auth.role()) = 'authenticated');

CREATE POLICY "Authenticated users can delete instagram posts"
  ON instagram_posts FOR DELETE
  USING ((select auth.role()) = 'authenticated');

-- =============================================================================
-- PROGRAMS (consolidate SELECT + fix auth.role performance)
-- =============================================================================

DROP POLICY IF EXISTS "Anyone can read active programs" ON programs;
DROP POLICY IF EXISTS "Authenticated users can manage programs" ON programs;

-- Single SELECT policy
CREATE POLICY "Read programs"
  ON programs
  FOR SELECT
  USING (
    is_active = true OR (select auth.role()) = 'authenticated'
  );

CREATE POLICY "Authenticated users can insert programs"
  ON programs FOR INSERT
  WITH CHECK ((select auth.role()) = 'authenticated');

CREATE POLICY "Authenticated users can update programs"
  ON programs FOR UPDATE
  USING ((select auth.role()) = 'authenticated');

CREATE POLICY "Authenticated users can delete programs"
  ON programs FOR DELETE
  USING ((select auth.role()) = 'authenticated');

-- =============================================================================
-- PROGRAM_IMAGES (consolidate SELECT + fix auth.role performance)
-- =============================================================================

DROP POLICY IF EXISTS "Anyone can read program images" ON program_images;
DROP POLICY IF EXISTS "Authenticated users can manage program images" ON program_images;

-- Single SELECT policy (public read remains; no duplicate with authenticated)
CREATE POLICY "Read program images"
  ON program_images
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert program images"
  ON program_images FOR INSERT
  WITH CHECK ((select auth.role()) = 'authenticated');

CREATE POLICY "Authenticated users can update program images"
  ON program_images FOR UPDATE
  USING ((select auth.role()) = 'authenticated');

CREATE POLICY "Authenticated users can delete program images"
  ON program_images FOR DELETE
  USING ((select auth.role()) = 'authenticated');
