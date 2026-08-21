"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface InstagramPost {
  id: string;
  image_url: string;
  alt_text: string | null;
  link: string | null;
}

export default function InstagramPosts() {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  const fetchInstagramPosts = async () => {
    try {
      const res = await fetch('/api/instagram-posts?limit=3');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();

      setInstagramPosts(data || []);
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
      // Fallback to empty array on error
      setInstagramPosts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative flex flex-col items-center overflow-hidden py-10 md:py-16 px-4 lg:px-8 bg-[#F5F5F5] w-full max-w-[1200px] mx-auto"
    >
      {/* Header Section */}
      <div className="w-full mb-6 md:mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-8">
          {/* Left - Title with vertical bar */}
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className="h-10 md:h-12 w-1 rounded-full"
              style={{ backgroundColor: "#EB702B" }}
            />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: "#1a1a1a" }}
            >
              Instagram Paylaşımları
            </h2>
          </div>

          {/* Right - Instagram Button */}
          <a
            href="https://www.instagram.com/aka_egitim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white font-semibold hover:opacity-90 transition-opacity px-4 py-2.5 md:px-6 md:py-3 text-sm md:text-base rounded-full"
            style={{
              backgroundColor: "#800020",
            }}
          >
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              width={20}
              height={20}
              className="w-4 h-4 md:w-5 md:h-5 object-contain brightness-0 invert"
            />
            @aka_egitim
          </a>
        </div>
      </div>

      {/* Image Cards Grid */}
      {loading ? (
        <div className="w-full flex justify-center items-center py-10 md:py-20">
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      ) : instagramPosts.length === 0 ? (
        <div className="w-full flex justify-center items-center py-10 md:py-20">
          <p className="text-gray-600">Henüz paylaşım bulunmamaktadır.</p>
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-lg overflow-hidden cursor-pointer w-full aspect-[3/4] sm:aspect-[3/4] md:aspect-[424/600]"
            >
              <Image
                src={post.image_url}
                alt={post.alt_text || "Instagram paylaşımı"}
                width={424}
                height={600}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay with Button - appears on hover */}
              {post.link && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full text-white font-semibold hover:opacity-90 transition-opacity px-4 py-2.5 md:px-8 md:py-3 text-sm md:text-base"
                    style={{
                      backgroundColor: "#F28E2B",
                    }}
                  >
                    Paylaşıma Git
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 md:w-[18px] md:h-[18px]"
                    >
                      <path
                        d="M2 21L23 12L2 3V10L17 12L2 14V21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
