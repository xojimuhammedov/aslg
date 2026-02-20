import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslation } from "react-i18next"

const slides = [
  {
    src: "https://cargo24.kz/assets/images/fulfillment/fulfillment.jpg",
    alt: "Современный складской комплекс CARGO24",
  },
  {
    src: "https://cargo24.kz/assets/images/fulfillment/cargo-wharehouse-company-name-gtl-for-autotraspor-4.jpg",
    alt: "Организованное хранение грузов",
  },
  {
    src: "https://cargo24.kz/assets/images/fulfillment/fulfillment-by-operator-fbo-1.jpg",
    alt: "Автоматизированная сортировка",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const {t} = useTranslation()

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      {/* Slider */}
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2.5/1]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-slate-900/40" />
          </div>
        ))}

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-end pb-8 sm:pb-12 lg:pb-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="mb-3 inline-block rounded-full bg-yellow-400/95 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-slate-900 sm:text-sm">
                {t("Логистика нового уровня")}
              </span>

              <h1 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                 {t("Надёжная доставка грузов по всему Казахстану")}
              </h1>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-all hover:bg-white/30 sm:left-5 sm:h-12 sm:w-12"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white transition-all hover:bg-white/30 sm:right-5 sm:h-12 sm:w-12"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:bottom-5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-yellow-400"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
