import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Card, CardBody, Chip } from '@heroui/react';
import { CityRepresentatives } from '@/lib/representatives-db';

interface RepresentativesModalProps {
  cityData: CityRepresentatives | null;
  isOpen: boolean;
  onClose: () => void;
}

const RepresentativesModal: React.FC<RepresentativesModalProps> = ({
  cityData,
  isOpen,
  onClose,
}) => {
  if (!cityData || !cityData.representatives || cityData.representatives.length === 0) return null;

  // Şehir bilgisini al
  const cityName = cityData.cityName || 'Bilinmeyen Şehir';

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="4xl"
      scrollBehavior="inside"
      backdrop="blur"
      classNames={{
        backdrop: "bg-black/50 backdrop-blur-md",
        base: "bg-white max-h-[90vh]",
        wrapper: "p-2 sm:p-3 items-center justify-center",
        body: "overflow-y-auto max-h-[calc(90vh-200px)]"
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-2 bg-gradient-to-r from-primary to-secondary p-4 sm:p-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{cityName}</h2>
              <p className="text-sm sm:text-base text-gray-700">Temsilcilerimiz ve İletişim Bilgileri</p>
            </ModalHeader>

            <ModalBody className="p-4 sm:p-5 overflow-y-auto">
              {/* Ofis Bilgileri */}
              {(cityData.officeAddress || cityData.officePhone) && (
                <Card className="mb-6 shadow-md focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                  <CardBody className="p-4 sm:p-6 bg-primary/5">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Ofis Bilgileri
                  </h3>
                  {cityData.officeAddress && (
                    <p className="text-gray-800 mb-3 flex items-start text-sm sm:text-base">
                      <svg
                        className="w-5 h-5 mr-2 mt-0.5 text-gray-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {cityData.officeAddress}
                    </p>
                  )}
                  {cityData.officePhone && (
                    <p className="text-gray-800 flex items-center text-sm sm:text-base">
                      <svg
                        className="w-5 h-5 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {cityData.officePhone}
                    </p>
                  )}
                  </CardBody>
                </Card>
              )}

              {/* Temsilciler */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6">
                  Temsilcilerimiz ({cityData.representatives.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {cityData.representatives.map((rep) => (
                    <Card
                      key={rep.id}
                      className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                      <CardBody className="p-4 sm:p-6">
                      {/* Avatar ve İsim */}
                      <div className="flex items-center mb-5">
                        {rep.avatar ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={rep.avatar}
                            alt={rep.name}
                            className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-primary/20 flex-shrink-0"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              const parent = target.parentElement
                              if (parent) {
                                target.style.display = 'none'
                                const existingFallback = parent.querySelector('.avatar-fallback')
                                if (!existingFallback) {
                                  const fallback = document.createElement('div')
                                  fallback.className = 'avatar-fallback w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg'
                                  fallback.textContent = rep.name.charAt(0)
                                  parent.insertBefore(fallback, target)
                                }
                              }
                            }}
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg">
                            {rep.name.charAt(0)}
                          </div>
                        )}
                        <div className="ml-4">
                          <h4 className="font-bold text-gray-900 text-lg sm:text-xl">{rep.name}</h4>
                          <p className="text-primary text-sm sm:text-base font-medium">{rep.title}</p>
                        </div>
                      </div>

                      {/* İletişim Bilgileri */}
                      <div className="space-y-3">
                        <a
                          href={`tel:${rep.phone}`}
                          className="flex items-center text-gray-800 hover:text-primary transition-colors group"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <span className="text-sm">{rep.phone}</span>
                        </a>

                        <a
                          href={`mailto:${rep.email}`}
                          className="flex items-center text-gray-800 hover:text-primary transition-colors group"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-sm">{rep.email}</span>
                        </a>

                        {rep.workingHours && (
                          <div className="flex items-center text-gray-700">
                            <svg
                              className="w-4 h-4 mr-2 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-sm">{rep.workingHours}</span>
                          </div>
                        )}

                        {rep.languages && rep.languages.length > 0 && (
                          <div className="flex items-center flex-wrap gap-1 mt-3">
                            {rep.languages.map((lang, index) => (
                              <Chip
                                key={index}
                                color="primary"
                                variant="flat"
                                size="sm"
                              >
                                {lang}
                              </Chip>
                            ))}
                          </div>
                        )}
                      </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
            </ModalBody>

            <ModalFooter className="bg-gray-50 border-t border-gray-200 p-3 sm:p-4">
              <p className="text-sm sm:text-base text-gray-700 text-center w-full">
                Detaylı bilgi ve randevu için temsilcilerimizle iletişime geçebilirsiniz.
              </p>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default RepresentativesModal;

