'use client'

import { Button } from "@heroui/react";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, description, backgroundImage }: PageHeroProps) {
  return (
    <section 
      className="relative min-h-[400px] sm:min-h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg text-white">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 max-w-3xl mx-auto drop-shadow-md px-4">
          {subtitle}
        </p>
        {description && (
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-4xl mx-auto drop-shadow-md px-4 opacity-90">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button 
            as={Link}
            href="/iletisim"
            color="primary"
            size="lg"
            className="font-bold hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            radius="lg"
          >
            Ücretsiz Danışmanlık Al
          </Button>
          <Button 
            as={Link}
            href="/dil-okullari"
            size="lg"
            variant="bordered"
            className="border-white text-white font-bold hover:bg-white/10 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            radius="lg"
          >
            Programları İncele
          </Button>
        </div>
      </div>
    </section>
  );
}
