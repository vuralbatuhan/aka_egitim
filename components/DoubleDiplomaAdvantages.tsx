export default function DoubleDiplomaAdvantages() {
  return (
    <section className="py-10 md:py-16" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
        {/* Üst satır: Avantajlar + Amerikan / AP açıklamaları */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Avantajlar */}
          <div className="rounded-2xl bg-white/90 shadow-sm border border-gray-100 p-6 md:p-7 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-1 h-10 rounded-full"
                style={{ backgroundColor: "#6A0B1C" }}
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-wide">
                AVANTAJLAR
              </h2>
            </div>
            <div className="space-y-2 text-sm sm:text-base text-gray-800 leading-relaxed">
              {[
                "Partner üniversitelere direkt geçiş",
                "1000'DEN FAZLA ÜNİVERSİTEYE uluslararası kredi transferi imkânı",
                "Üniversitelere KABUL KOLAYLIĞI ve BURS imkânı",
                "Dünyanın herhangi bir yerinden RESMİ TRANSKRİPT ve DİPLOMA kazanma imkânı",
                "Akademik makale ve projelerin resmi platformlardan (İSTEAMC veya RESEARCHGATE) yayınlanması",
                "ZAMANDAN ve PARADAN tasarruf imkânı",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 inline-block h-2 w-2 rounded-full"
                    style={{ backgroundColor: "#6A0B1C" }}
                  />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Amerikan lise dersleri + AP dersleri */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-white/90 shadow-sm border border-gray-100 p-6 md:p-7 space-y-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                AMERİKAN LİSE DERSLERİ STANDART &amp; YÜKSEK SEVİYE
              </h3>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                Amerikan lise müfredatında yer alan dersler LİSANSLI EĞİTMENLER tarafından
                sağlanır ve öğrencilere ders sonunda RESMİ AMERİKAN TRANSKRİPTİ sağlanır.
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 shadow-sm border border-gray-100 p-6 md:p-7 space-y-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                AP (ADVANCED PLACEMENT) SEVİYE DERSLERİ
              </h3>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                Tüm AP dersleri LİSANSLI EĞİTMENLER tarafından verilir ve öğrencilerin
                ÜNİVERSİTE DÜZEYİ DERSLERE erkenden erişmesi sağlanır. Böylece öğrencilerin
                YÜKSEK PUAN alarak üniversite giriş şansının artırılması ve üniversitede o
                DERSLERDEN MUAF olmaları sağlanır.
              </p>
            </div>
          </div>
        </div>

        {/* Ders seçenekleri */}
        <div className="rounded-2xl bg-white/90 shadow-sm border border-gray-100 p-6 md:p-7 space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
            DERS SEÇENEKLERİ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base text-gray-800 leading-relaxed">
            <p>
              <span className="font-semibold">Math:</span> Algebra, Honors Algebra, Algebra II
              Trig, Honors Algebra II/Trig, Geometry, Honors Geometry, Algebra III, Honors
              Precalculus, Honors Calculus I, AP Calculus BC, Probability and Statistics, AP
              Statistics
            </p>
            <p>
              <span className="font-semibold">Art:</span> Digital Photography and Photoshop,
              Drawing, Painting, Interactive Multi-Media
            </p>
            <p>
              <span className="font-semibold">English:</span> English 9, 10, 11 &amp; 12, Honors
              English 9, 10, 11 &amp; 12, AP Language and Composition, AP Literature and
              Composition, Journalism, Public Speaking
            </p>
            <p>
              <span className="font-semibold">Business:</span> Business Communications, Business
              Principals and Strategies / Entrepreneurship, Macroeconomics, Accounting
            </p>
            <p>
              <span className="font-semibold">Science:</span> Physical Science, Honors Physical
              Science, Biology, Honors Biology, AP Biology, Chemistry, Honors Chemistry, AP
              Chemistry, Physics, Honors Physics, AP Physics, Honors Human Anatomy and Physiology
              I, AP Human Anatomy and Physiology II, Environmental Science, Health
            </p>
            <p>
              <span className="font-semibold">Computer and Technology:</span> Computer
              Fundamentals and Innovation, Computer Programming I, Computer Programming II, AP
              Computer Programming, Introduction to Cybersecurity, Web Design
            </p>
            <p>
              <span className="font-semibold">Social Studies:</span> World Issues, United States
              History, AP United States History, World History, AP World History,
              Government/Economics, AP Government/Politics/Economics, Psychology, Criminology
            </p>
          </div>
        </div>

        {/* Kabul koşulları */}
        <div className="rounded-2xl bg-gradient-to-r from-[#FBE9EC] to-white border border-[#F3C4CD] p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#6A0B1C]">
              KABUL KOŞULLARI
            </h3>
            <p className="text-xs sm:text-sm text-[#6A0B1C] mt-1">
              Programa katılmak için gereken minimum şartlar
            </p>
          </div>
          <div className="space-y-1.5 text-sm sm:text-base text-gray-900 leading-relaxed">
            <p>• En az 2,5 puan not ortalaması (4 üzerinden)</p>
            <p>• En az B2 seviyesi İngilizce</p>
            <p>• Mülakat (program danışmanı ile yapılacaktır)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

