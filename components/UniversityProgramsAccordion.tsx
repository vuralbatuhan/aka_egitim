"use client";

import { useState } from "react";
import Link from "next/link";

type ProgramItem = {
  id: string;
  category: string;
  country: string;
  region: string;
  title: string;
  shortLabel: string;
  details: React.ReactNode;
};

const placeholderDetails = (
  <div className="text-sm sm:text-base text-gray-800 leading-relaxed">
    <p>Program detayları yakında eklenecektir.</p>
  </div>
);

const PROGRAMS: ProgramItem[] = [
  {
    id: "usa-general",
    category: "Amerika'da Eğitim Yabancı Dil, Üniversite / Genel",
    country: "America",
    region: "USA",
    title: "Amerika'da Eğitim ve Üniversite Programları",
    shortLabel: "Genel Bilgi",
    details: (
      <div className="space-y-5 text-sm sm:text-base text-gray-800 leading-relaxed">
        {/* Türkçe içerik */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900">
            İngilizce Öğrenmek veya Üniversite Programlarına Giriş
          </h4>
          <p>
            İngilizce öğrenmek istiyorsanız veya okul ya da iş için bir İkinci
            Dil Olarak İngilizce (ESL) programına katılmanız gerekiyorsa, size
            uygun kursları birlikte belirleyebiliriz. Kurs ücretleri haftalık
            yaklaşık 200 USD ile 600 USD arasında değişmektedir.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Üniversite veya Kolej Eğitimi
          </h4>
          <ol className="list-decimal list-inside space-y-1">
            <li>Seçeneklerinizi araştırın</li>
            <li>Öğreniminizi finanse edin</li>
            <li>Başvurunuzu tamamlayın</li>
            <li>Vizeniz için başvurun</li>
            <li>Varış için hazırlanın</li>
          </ol>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Genel Üniversite Kabul Koşulları
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>En az 2.5 GPA (100 üzerinden yaklaşık 77 ortalama)</li>
            <li>Minimum TOEFL 69 veya IELTS 5.5</li>
            <li>Minimum yıllık üniversite eğitim ücreti yaklaşık 10.400 USD</li>
            <li>
              Ön lisans bölümleri dönem başına yaklaşık 3.000 USD&apos;den
              başlar
            </li>
            <li>
              Gerekli şartları sağlayan öğrencilere sınavsız direkt giriş imkânı
            </li>
          </ul>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Burs Seçenekleri</h4>
          <p>
            Bizimle başvurularda yıllık yaklaşık 5.000 USD – 15.000 USD burs
            imkânı.
          </p>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Yaşam Maliyetleri</h4>
          <p>
            Şehre ve eyalete göre değişmekle birlikte aylık yaşam maliyetleri
            ortalama 1.200 USD ile 1.700 USD arasında değişmektedir.
          </p>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Çalışma Seçenekleri</h4>
          <p>Kampüs içinde part–time çalışma imkânları bulunabilmektedir.</p>
        </div>

        {/* İngilizce özet */}
        <div className="pt-3 border-t border-gray-200 space-y-2">
          <h4 className="font-semibold text-gray-900">Study English</h4>
          <p>
            If you want to learn English or need to join an English as a Second
            Language (ESL) program for school or work, you can choose courses
            that best match your goals. Typical tuition ranges from 200 USD to
            600 USD per week.
          </p>

          <h4 className="font-semibold text-gray-900 mt-3">
            Study University or College
          </h4>
          <ol className="list-decimal list-inside space-y-1">
            <li>Research your options</li>
            <li>Finance your studies</li>
            <li>Complete your application</li>
            <li>Apply for your visa</li>
            <li>Prepare for departure</li>
          </ol>

          <h4 className="font-semibold text-gray-900 mt-3">
            General University Admission Requirements
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Min 2.5 GPA</li>
            <li>Min TOEFL 69 or IELTS 5.5</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "canada-general",
    category: "Learn English and/or Attend College/University in Canada",
    country: "Canada",
    region: "Canada",
    title: "Learn English and/or Attend College/University in Canada",
    shortLabel: "University Admission",
    details: (
      <div className="space-y-5 text-sm sm:text-base text-gray-800 leading-relaxed">
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">Study English</h4>
          <p>
            If you want to learn English or need to join an English as a Second
            Language (ESL) program for school or work, please research for
            courses that suit you.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Study University or College
          </h4>
          <ol className="list-decimal list-inside space-y-1">
            <li>Research your options</li>
            <li>Finance your studies</li>
            <li>Complete your application</li>
            <li>Apply for your visa</li>
            <li>Prepare for departure</li>
          </ol>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            General University Admission Requirements
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Min TOEFL 79 or IELTS 6.0</li>
            <li>Min 2.0 GPA (73/100)</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">Scholarship Options</h4>
          <p>Average tuition: 9.106 CAD – 26.443 CAD</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900">Cost of Living</h4>

          <div className="space-y-1">
            <h5 className="font-semibold text-gray-900">Transportation</h5>
            <ul className="list-disc list-inside space-y-1">
              <li>Monthly Bus Pass (student) 70 CAD</li>
              <li>Bus Fare (one time) 2.50 CAD</li>
              <li>Bus Tickets (10 tickets) 20 CAD</li>
              <li>Airport Shuttle (one way) 22 CAD</li>
              <li>Taxi (15 min ride) 20 CAD</li>
              <li>Car Rental (weekend) 90 CAD</li>
              <li>1L of Gas 1.18 CAD</li>
            </ul>
          </div>

          <div className="space-y-1">
            <h5 className="font-semibold text-gray-900">Communication</h5>
            <ul className="list-disc list-inside space-y-1">
              <li>Cell Phone (monthly) 60 CAD</li>
              <li>Sim Card 10 CAD</li>
            </ul>
          </div>

          <div className="space-y-1">
            <h5 className="font-semibold text-gray-900">Independent Housing</h5>
            <ul className="list-disc list-inside space-y-1">
              <li>Food (monthly) 200 CAD</li>
              <li>Apartment (one bedroom) 900 CAD</li>
              <li>Room in Shared House 400–700 CAD</li>
              <li>Hot Water 30 CAD</li>
              <li>Electricity/Heating 150 CAD</li>
              <li>Internet (monthly) 90 CAD</li>
            </ul>
          </div>

          <div className="space-y-1">
            <h5 className="font-semibold text-gray-900">Homestay</h5>
            <p>
              225 CAD/week (235 CAD/week for minors) – includes 3 meals and
              airport pickup.
            </p>
          </div>

          <div className="space-y-1">
            <h5 className="font-semibold text-gray-900">
              Student Residence – Granville Hall
            </h5>
            <p>245 CAD – 265 CAD / week</p>
          </div>

          <div className="space-y-1">
            <h5 className="font-semibold text-gray-900">FREE Activities</h5>
            <ul className="list-disc list-inside space-y-1">
              <li>Local Parks</li>
              <li>Art Galleries</li>
              <li>Ice Skating</li>
              <li>Beach Day</li>
              <li>Halifax Central Library</li>
              <li>Observatory</li>
              <li>Farmer&apos;s Market</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "germany-general",
    category: "Almanya'da Üniversite ve Dil Eğitimi",
    country: "German Universities",
    region: "DE",
    title: "Almanya'da Üniversite ve Dil Eğitimi",
    shortLabel: "Genel Bilgi",
    details: (
      <div className="space-y-5 text-sm sm:text-base text-gray-800 leading-relaxed">
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Yüksek öğrenim için neden Almanya&apos;yı seçmelisiniz?
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Lisans, yüksek lisans ve doktora sırasında yarı zamanlı çalışma
              imkânı
            </li>
            <li>Eğitim sonrası 18 aylık çalışma izni</li>
            <li>Güvenli bir iş piyasasına kolay erişim</li>
            <li>Birinci sınıf eğitim ve uygun yaşam maliyetleri</li>
            <li>Birçok seçkin kurs ve üniversite seçeneği</li>
            <li>Dünya çapında tanınan diplomalar</li>
            <li>
              Canlı öğrencilik hayatı ve sunulan çok çeşitli aktivite imkânları
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Alman Üniversitelerine Giden Yol
          </h4>
          <ul className="list-none space-y-1">
            <li>&gt; Minimum 12 haftalık programlar</li>
            <li>&gt; TELC Almanca hazırlık</li>
            <li>&gt; Başvuru, vize ve üniversite yerleştirme desteği</li>
            <li>
              &gt; Uni-Assist ile 250&apos;den fazla devlet ve özel üniversiteye
              yerleştirme hizmeti
            </li>
            <li>
              &gt; Studienkolleg ve 300&apos;den fazla lisans, yüksek lisans ve
              doktora programlarına erişim
            </li>
          </ul>
        </div>

        <p className="text-sm text-gray-600 italic">
          * Daha fazla bilgi ve program detayları için lütfen danışmanlarımızla
          iletişime geçin.
        </p>
      </div>
    ),
  },
  {
    id: "bs-accountancy",
    category: "BS Accountancy",
    country: "Arizona State University, Tempe Campus",
    region: "USA",
    title: "BS Accountancy",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          Arizona State University is ranked <strong>#13 in the USA</strong> for
          undergraduate accounting (U.S. News &amp; World Report 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>W. P. Carey School of Business</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Entry requirements</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.4 GPA or equivalent</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "maccda-accountancy-data-analytics",
    category: "MACCDA Accountancy and Data Analytics",
    country: "Arizona State University, Tempe Campus",
    region: "USA",
    title: "MACCDA Accountancy and Data Analytics",
    shortLabel: "Yüksek Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          STEM-classified degree: graduates are eligible for{" "}
          <strong>3 years of Optional Practical Training (OPT)</strong> in the
          USA. Arizona State University is ranked{" "}
          <strong>#12 in the USA</strong> for graduate accounting programs (U.S.
          News Best Grad Schools 2022).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>W. P. Carey School of Business</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>9 months</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$42,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – 9 months</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 80 (IELTS 6.5, Pearson PTE 60)</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: August</li>
            <li>Application deadline: 09 June</li>
            <li>I-20 deadline: 18 July</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "bs-actuarial-science",
    category: "BS Actuarial Science",
    country: "Arizona State University, Tempe Campus",
    region: "USA",
    title: "BS Actuarial Science",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          STEM-classified degree: graduates are eligible for{" "}
          <strong>3 years of Optional Practical Training (OPT)</strong> in the
          USA. Arizona State University is ranked a{" "}
          <strong>world top 150 university for mathematics</strong> (Times
          Higher Education Rankings by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>The College of Liberal Arts and Sciences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: January</li>
            <li>Application deadline: 22 November</li>
            <li>I-20 deadline: 10 December</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "ms-actuarial-science",
    category: "MS Actuarial Science",
    country: "Arizona State University, Tempe Campus",
    region: "USA",
    title: "MS Actuarial Science",
    shortLabel: "Yüksek Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          STEM-classified degree: graduates are eligible for{" "}
          <strong>3 years of Optional Practical Training (OPT)</strong> in the
          USA. Arizona State University is ranked a{" "}
          <strong>world top 150 university for mathematics</strong> (Times
          Higher Education Rankings by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>The College of Liberal Arts and Sciences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>2 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$25,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 80 (IELTS 6.5, Pearson PTE 60)</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: January</li>
            <li>Application deadline: 02 November</li>
            <li>I-20 deadline: 10 December</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "bs-aero-mgmt-tech-atm",
    category: "BS Aeronautical Management Technology (Air Traffic Management)",
    country: "Arizona State University, Polytechnic Campus",
    region: "USA",
    title: "BS Aeronautical Management Technology (Air Traffic Management)",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          STEM-classified degree: graduates are eligible for{" "}
          <strong>3 years of Optional Practical Training (OPT)</strong> in the
          USA. This degree is accredited by the{" "}
          <strong>Aviation Accreditation Board International</strong>.
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>Ira A. Fulton Schools of Engineering</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: January</li>
            <li>Application deadline: 22 November</li>
            <li>I-20 deadline: 10 December</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "bs-aero-mgmt-tech-atm2",
    category:
      "BS Aeronautical Management Technology (Air Transportation Management)",
    country: "Arizona State University, Polytechnic Campus",
    region: "USA",
    title:
      "BS Aeronautical Management Technology (Air Transportation Management)",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          STEM-classified degree: graduates are eligible for{" "}
          <strong>3 years of Optional Practical Training (OPT)</strong> in the
          USA. This degree is accredited by the{" "}
          <strong>Aviation Accreditation Board International</strong>.
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>Ira A. Fulton Schools of Engineering</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Entry requirements</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "bs-aero-mgmt-tech-uas",
    category: "BS Aeronautical Management Technology (Unmanned Aerial Systems)",
    country: "Arizona State University, Polytechnic Campus",
    region: "USA",
    title: "BS Aeronautical Management Technology (Unmanned Aerial Systems)",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          STEM-classified degree: graduates are eligible for{" "}
          <strong>3 years of Optional Practical Training (OPT)</strong> in the
          USA. This degree is accredited by the{" "}
          <strong>Aviation Accreditation Board International</strong>.
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>Ira A. Fulton Schools of Engineering</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Entry requirements</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "ms-aerospace-engineering",
    category: "MS Aerospace Engineering",
    country: "Arizona State University, Polytechnic Campus",
    region: "USA",
    title: "MS Aerospace Engineering",
    shortLabel: "Yüksek Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          STEM-classified degree: graduates are eligible for{" "}
          <strong>3 years of Optional Practical Training (OPT)</strong> in the
          USA. Arizona State University is ranked{" "}
          <strong>#25 in the USA</strong> for graduate aerospace engineering
          programs (U.S. News Best Grad Schools 2022).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>Ira A. Fulton Schools of Engineering</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>2 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$26,100</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2</p>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Entry requirements</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 80 (IELTS 6.5, Pearson PTE 60)</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "ba-african-african-american-studies",
    category: "BA African and African American Studies",
    country: "Arizona State University, Tempe Campus",
    region: "USA",
    title: "BA African and African American Studies",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          Arizona State University is ranked <strong>#66 in the world</strong>{" "}
          for social sciences (Times Higher Education World University Rankings
          by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>The College of Liberal Arts and Sciences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Entry requirements</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "bs-american-indian-studies",
    category: "BS American Indian Studies",
    country: "Arizona State University, Tempe Campus",
    region: "USA",
    title: "BS American Indian Studies",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          Arizona State University is ranked <strong>#66 in the world</strong>{" "}
          for social sciences (Times Higher Education World University Rankings
          by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>The College of Liberal Arts and Sciences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Entry requirements</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "ms-american-indian-studies-rights",
    category:
      "MS American Indian Studies (Indigenous Rights and Social Justice)",
    country: "Arizona State University, Tempe Campus",
    region: "USA",
    title: "MS American Indian Studies (Indigenous Rights and Social Justice)",
    shortLabel: "Yüksek Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          Arizona State University is ranked <strong>#66 in the world</strong>{" "}
          for social sciences (Times Higher Education World University Rankings
          by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>The College of Liberal Arts and Sciences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>2 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$25,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 80 (IELTS 6.5, Pearson PTE 60)</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: January</li>
            <li>Application deadline: 02 November</li>
            <li>I-20 deadline: 10 December</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "ms-american-indian-studies-tribal",
    category: "MS American Indian Studies (Tribal Leadership and Governance)",
    country: "Arizona State University, Tempe Campus",
    region: "USA",
    title: "MS American Indian Studies (Tribal Leadership and Governance)",
    shortLabel: "Yüksek Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          Arizona State University is ranked <strong>#66 in the world</strong>{" "}
          for social sciences (Times Higher Education World University Rankings
          by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>The College of Liberal Arts and Sciences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>2 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$25,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 80 (IELTS 6.5, Pearson PTE 60)</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: January</li>
            <li>Application deadline: 02 November</li>
            <li>I-20 deadline: 10 December</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "ma-american-studies",
    category: "MA American Studies",
    country: "Arizona State University, Tempe Campus",
    region: "USA",
    title: "MA American Studies",
    shortLabel: "Yüksek Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          Professors have strengths in areas including critical ethnic studies,
          indigeneity studies, gender studies, Black studies, immigration
          studies, justice studies, disability studies, transborder studies, and
          Asian American studies.
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>The College of Liberal Arts and Sciences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>2 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$25,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 90 (IELTS 7.0, Pearson PTE 65)</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: August</li>
            <li>Application deadline: 09 June</li>
            <li>I-20 deadline: 18 July</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "ba-american-studies",
    category: "BA American Studies",
    country: "Arizona State University, Tempe Campus",
    region: "USA",
    title: "BA American Studies",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          Arizona State University is ranked <strong>#66 in the world</strong>{" "}
          for social sciences (Times Higher Education World University Rankings
          by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>The College of Liberal Arts and Sciences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: January</li>
            <li>Application deadline: 22 November</li>
            <li>I-20 deadline: 10 December</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "bs-anthropology",
    category: "BS Anthropology",
    country: "Arizona State University, Tempe Campus",
    region: "USA",
    title: "BS Anthropology",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          Arizona State University is ranked <strong>#35 in the world</strong>{" "}
          for anthropology (QS World University Rankings by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>The College of Liberal Arts and Sciences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: January</li>
            <li>Application deadline: 22 November</li>
            <li>I-20 deadline: 10 December</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "ba-anthropology",
    category: "BA Anthropology",
    country: "Arizona State University, Tempe Campus",
    region: "USA",
    title: "BA Anthropology",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          Arizona State University is ranked <strong>#35 in the world</strong>{" "}
          for anthropology (QS World University Rankings by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>The College of Liberal Arts and Sciences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: January</li>
            <li>Application deadline: 22 November</li>
            <li>I-20 deadline: 10 December</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "ms-applied-behavior-analysis",
    category: "MS Applied Behavior Analysis",
    country: "Arizona State University, Tempe Campus",
    region: "USA",
    title: "MS Applied Behavior Analysis",
    shortLabel: "Yüksek Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          Arizona State University is ranked <strong>#66 in the world</strong>{" "}
          for social sciences (Times Higher Education World University Rankings
          by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>The College of Liberal Arts and Sciences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>2 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$30,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 80 (IELTS 6.5, Pearson PTE 60)</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: August</li>
            <li>Application deadline: 09 June</li>
            <li>I-20 deadline: 18 July</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "ms-applied-biological-sciences",
    category: "MS Applied Biological Sciences",
    country: "Arizona State University, Polytechnic Campus",
    region: "USA",
    title: "MS Applied Biological Sciences",
    shortLabel: "Yüksek Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          STEM-classified degree: graduates are eligible for{" "}
          <strong>3 years of Optional Practical Training (OPT)</strong> in the
          USA. Arizona State University is ranked a{" "}
          <strong>world top 175 university for biological sciences</strong>{" "}
          (Times Higher Education World University Rankings by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>College of Integrative Sciences and Arts</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>2 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$25,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 80 (IELTS 6.5, Pearson PTE 60)</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: January</li>
            <li>Application deadline: 02 November</li>
            <li>I-20 deadline: 10 December</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "bs-applied-bio-sciences-general",
    category: "BS Applied Biological Sciences (Applied Biological Sciences)",
    country: "Arizona State University, Polytechnic Campus",
    region: "USA",
    title: "BS Applied Biological Sciences (Applied Biological Sciences)",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          STEM-classified degree: graduates are eligible for{" "}
          <strong>3 years of Optional Practical Training (OPT)</strong> in the
          USA. Arizona State University is ranked a{" "}
          <strong>world top 175 university for biological sciences</strong>{" "}
          (Times Higher Education World University Rankings by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>College of Integrative Sciences and Arts</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: January</li>
            <li>Application deadline: 22 November</li>
            <li>I-20 deadline: 10 December</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "bs-applied-bio-sciences-ecology",
    category: "BS Applied Biological Sciences (Natural Resource Ecology)",
    country: "Arizona State University, Polytechnic Campus",
    region: "USA",
    title: "BS Applied Biological Sciences (Natural Resource Ecology)",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          STEM-classified degree: graduates are eligible for{" "}
          <strong>3 years of Optional Practical Training (OPT)</strong> in the
          USA. Arizona State University is ranked a{" "}
          <strong>world top 175 university for biological sciences</strong>{" "}
          (Times Higher Education World University Rankings by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>College of Integrative Sciences and Arts</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: January</li>
            <li>Application deadline: 22 November</li>
            <li>I-20 deadline: 10 December</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "bs-applied-bio-sciences-prevet",
    category: "BS Applied Biological Sciences (Preveterinary Medicine)",
    country: "Arizona State University, Polytechnic Campus",
    region: "USA",
    title: "BS Applied Biological Sciences (Preveterinary Medicine)",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          STEM-classified degree: graduates are eligible for{" "}
          <strong>3 years of Optional Practical Training (OPT)</strong> in the
          USA. Arizona State University is ranked a{" "}
          <strong>world top 175 university for biological sciences</strong>{" "}
          (Times Higher Education World University Rankings by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>College of Integrative Sciences and Arts</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: January</li>
            <li>Application deadline: 22 November</li>
            <li>I-20 deadline: 10 December</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "bs-applied-bio-sciences-secondary-education",
    category: "BS Applied Biological Sciences (Secondary Education in Biology)",
    country: "Arizona State University, Polytechnic Campus",
    region: "USA",
    title: "BS Applied Biological Sciences (Secondary Education in Biology)",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          STEM-classified degree: graduates are eligible for{" "}
          <strong>3 years of Optional Practical Training (OPT)</strong> in the
          USA. Arizona State University is ranked a{" "}
          <strong>world top 175 university for biological sciences</strong>{" "}
          (Times Higher Education World University Rankings by Subject 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Academic college</h4>
          <p>College of Integrative Sciences and Arts</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>4 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>January, May, August</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>$31,200</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>Direct Admission – Year 1, Year 2, Year 3, Year 4</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Academic Year – Key Facts
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>English entry: TOEFL 61</li>
            <li>GPA entry: 3.0 GPA or equivalent</li>
            <li>Program dates: January</li>
            <li>Application deadline: 22 November</li>
            <li>I-20 deadline: 10 December</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "aerospace-engineering-uwe",
    category: "Aerospace Engineering BEng (Hons)",
    country: "UWE Bristol",
    region: "UK",
    title: "Aerospace Engineering BEng (Hons)",
    shortLabel: "Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          UWE Bristol is ranked <strong>21st in the UK</strong> for Aeronautical
          and Manufacturing Engineering (Times and Sunday Times Good University
          Guide 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Faculty</h4>
          <p>Faculty of Environment and Technology</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>3 years</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>September</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>£13,500</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            UWE Bristol Highlights
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Top 40 in the UK (Guardian University Guide 2022)</li>
            <li>
              Top 25 in the UK for student satisfaction (Guardian University
              Guide 2022)
            </li>
            <li>
              Home to GradLink, the award-winning careers website for
              international students
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Foundation Certificate</strong> – Year 1, Year 2, Year 3 –
              IELTS 5.5 (at least 4.5 in all skills)
            </li>
            <li>
              <strong>International Year One</strong> – Year 2, Year 3 – IELTS
              5.5 (at least 5.0 in all skills)
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "finance-investment-msc",
    category: "Finance and Investment MSc",
    country: "UWE Bristol",
    region: "UK",
    title: "Finance and Investment MSc",
    shortLabel: "Yüksek Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Faculty</h4>
          <p>Faculty of Business and Law</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>1 year</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>September</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>£13,500</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            UWE Bristol Highlights
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Top 40 in the UK (Guardian University Guide 2022)</li>
            <li>
              Top 25 in the UK for student satisfaction (Guardian University
              Guide 2022)
            </li>
            <li>
              Home to GradLink, the award-winning careers website for
              international students
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university
          </h4>
          <p>
            <strong>Pre-Master&apos;s</strong> – Year 1
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "brock-university",
    category: "Brock University",
    country: "Brock University",
    region: "Canada",
    title: "Brock University Programları",
    shortLabel: "Üniversite",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          Located in the historic Niagara region, Brock offers all the benefits
          of a young and modern university in a safe, community-minded city with
          beautiful natural surroundings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Number of students</h4>
            <p>18,462</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">
              International students
            </h4>
            <p>10%</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">UCP grade required</h4>
            <p>75%</p>
          </div>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Popular programs</h4>
          <p>Sport Management, Oenology and Viticulture, Accounting</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Faculty of Applied Health Sciences
          </h4>
          <p>
            Canadian Studies / Classics / Comparative Religion / Economics /
            English / Child Health BA / Community Health BA / Kinesiology BKin /
            Kinesiology BSc / Medical Sciences BSc / Nursing BScN / Physical
            Education BPhEd / Public Health BPH, Public Health BPH Co-op /
            Recreation and Leisure Studies BRLS / Sport Management BSM
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Faculty of Mathematics &amp; Science
          </h4>
          <p>
            Biological Sciences BSc / Biomedical Sciences BSc / Biophysics BSc /
            Physics BSc, Physics BSc Co-op / Sciences BSc / Game Programming BSc
            / Chemistry BSc, Chemistry BSc Co-op / Oenology and Viticulture BSc
            Co-op only / Biotechnology BSc, Biotechnology BSc Co-op /
            Biochemistry BSc, Biochemistry BSc Co-op / Computer Science BSc,
            Computer Science BSc Co-op / Neuroscience BSc, Neuroscience BSc
            Co-op / Earth Sciences BSc, Earth Sciences BSc Co-op / Computer
            Science and Mathematics BSc Co-op only / Computing and Business BCB,
            Computing and Business BCB Co-op / Computing and Network
            Communications BSc Co-op only / Computing and Solid State Device
            Technology BSc, Computing and Solid State Device Technology BSc
            Co-op / Environmental Geoscience BSc, Environmental Geoscience BSc
            Co-op / Mathematics and Statistics BSc; Mathematics and Statistics
            BSc Co-op / Mathematics and Statistics BSc – Accelerated Mathematics
            and Statistics Studies
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Goodman School of Business
          </h4>
          <p>
            Accounting BAcc, Accounting BAcc Co-op / Business Administration
            BBA, Business Administration BBA Co-op / Business Administration BBA
            – International Dual Degree Co-op only
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Admissions &amp; Deadlines
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Wait time for CLOA: 2 weeks</li>
            <li>Soft deadline 1 April for September intake</li>
            <li>Soft deadline 1 October for January intake</li>
            <li>Admission deposit: 1,000 CAD</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">Required documents</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>A completed online application form</li>
            <li>Application fee: 235 CAD (through OUAC)</li>
            <li>
              Official transcripts &amp; certificates from secondary and/or
              postsecondary institutions
            </li>
            <li>Passport copy</li>
            <li>ECLC&apos;s letter of acceptance</li>
          </ul>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Average tuition</h4>
          <p>26,443 CAD</p>
        </div>
      </div>
    ),
  },
  {
    id: "mechanical-engineering-nottingham",
    category: "Mechanical Engineering with Industrial Year MEng (Hons)",
    country: "University of Nottingham",
    region: "UK",
    title: "Mechanical Engineering with Industrial Year MEng (Hons)",
    shortLabel: "Yüksek Lisans / MEng Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          The University of Nottingham is ranked <strong>14th in the UK</strong>{" "}
          for Mechanical Engineering (Guardian University Guide 2021).
        </p>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">School / Department</h4>
          <p>
            Department of Mechanical, Materials and Manufacturing Engineering
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>5 years (including industrial year)</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>September</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>£26,500</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            University of Nottingham Highlights
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>
              International and Sports University of the Year 2019 (Times and
              Sunday Times Good University Guide)
            </li>
            <li>Top 20 in the UK (QS World University Rankings 2022)</li>
            <li>
              4th most-targeted UK university by graduate employers (High Fliers
              Research 2021)
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university – Your degree
          </h4>
          <p>
            <strong>Foundation Certificate</strong> – Year 1, Year 2, Year 3,
            Year 4, Year 5
          </p>
        </div>

        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">English entry</h4>
          <p>IELTS 5.5 (at least 4.5 in all skills)</p>
        </div>
      </div>
    ),
  },
  {
    id: "msc-finance-global-trading",
    category: "MSc Finance and Global Trading",
    country: "University of Essex",
    region: "UK",
    title: "MSc Finance and Global Trading",
    shortLabel: "Yüksek Lisans Programı",
    details: (
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <div className="space-y-1">
          <h4 className="font-semibold text-gray-900">Faculty</h4>
          <p>Faculty of Social Sciences, Essex Business School</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Degree duration</h4>
            <p>1 year</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Intake dates</h4>
            <p>October</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">Annual tuition fee</h4>
            <p>£20,350</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            University of Essex Highlights
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>University of the Year 2018 (Times Higher Education Awards)</li>
            <li>Top 30 in the UK (Complete University Guide 2022)</li>
            <li>
              3rd in the UK for investment in facilities and services (Times and
              Sunday Times Good University Guide 2022)
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            Your path to university
          </h4>
          <p>
            <strong>Pre-Master&apos;s</strong> – Year 1
          </p>
        </div>
      </div>
    ),
  },
];

export default function UniversityProgramsAccordion() {
  const [openId, setOpenId] = useState<string | null>(PROGRAMS[0]?.id ?? null);

  return (
    <section className="py-10 md:py-16" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
        {PROGRAMS.map((program) => {
          const isOpen = openId === program.id;

          return (
            <div
              key={program.id}
              className="rounded-2xl border border-transparent bg-[#F5F5F5]"
            >
              {/* Header row */}
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : program.id)}
                className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 rounded-2xl bg-[#F3F3F3] hover:bg-[#ECECEC] border border-[#E0E0E0] text-left transition-colors"
              >
                <div className="flex-1 text-xs sm:text-sm md:text-base font-medium text-gray-900">
                  {program.category}
                </div>
                <div className="hidden sm:flex items-center gap-6 text-xs sm:text-sm md:text-base text-gray-800">
                  <span>{program.country}</span>
                  <span>{program.region}</span>
                </div>
                <div className="ml-auto flex items-center gap-2 text-gray-700">
                  <span className="text-xs sm:text-sm md:text-base hidden sm:inline">
                    {program.country}
                  </span>
                  <svg
                    className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* Expanded content */}
              {isOpen && (
                <div className="mt-2 rounded-2xl border border-[#B71C1C] bg-white px-4 sm:px-6 py-6 md:py-7">
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                    {/* Left column – CTA area, no image */}
                    <div className="w-full lg:max-w-xs space-y-4">
                      <div className="space-y-1">
                        <p className="text-xs sm:text-sm text-gray-600">
                          {program.shortLabel}
                        </p>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                          {program.title}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <Link
                          href="/iletisim#contact-form"
                          className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:shadow-md transition-shadow"
                          style={{ backgroundColor: "#6A0B1C" }}
                        >
                          Başvur
                        </Link>
                        <div className="flex items-center justify-between gap-3 rounded-full border border-[#6A0B1C] px-4 py-2.5 text-xs sm:text-sm md:text-base text-[#6A0B1C]">
                          <span className="font-semibold">Telefon</span>
                          <span>+90 546 440 02 97</span>
                        </div>
                      </div>
                    </div>

                    {/* Right column – details */}
                    <div className="flex-1 border-t lg:border-t-0 lg:border-l border-gray-200 pt-4 lg:pt-0 lg:pl-6">
                      {program.details}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
