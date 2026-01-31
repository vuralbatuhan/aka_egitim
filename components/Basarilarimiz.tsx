"use client";

export default function Basarilarimiz() {
  const stats = [
    { value: "15+", label: "Yıllık Deneyim" },
    { value: "5000+", label: "Başarılı Öğrenci" },
    { value: "100+", label: "Partner Kurum" },
    { value: "%98", label: "Memnuniyet Oranı" },
  ];

  return (
    <section className="py-10 md:py-16 px-4 lg:px-8 w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="h-10 md:h-12 w-1 rounded-full" style={{ backgroundColor: "#800000" }} />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#1a1a1a" }}>
            Başarılarımız
          </h2>
        </div>
        <div
          className="rounded-2xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-0 border"
          style={{
            backgroundColor: "#FDF5F6",
            borderColor: "#B2616D",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center py-2 border-[#B2616D] ${
                index % 2 === 1 ? "border-l" : ""
              } ${index > 0 ? "md:border-l" : ""}`}
            >
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "#800000" }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm md:text-base font-normal"
                style={{ color: "#B2616D" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
