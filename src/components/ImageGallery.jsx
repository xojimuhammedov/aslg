import { useTranslation } from "react-i18next";

export function ImageGallery() {
  const { t } = useTranslation();

  const galleryImages = [
    {
      src: "https://cargo24.kz/assets/images/fulfillment/fulfillment.jpg",
      alt: t("Складское хранение"),
    },
    {
      src: "https://cargo24.kz/assets/images/fulfillment/cargo-wharehouse-company-name-gtl-for-autotraspor-4.jpg",
      alt: t("Контейнерный терминал"),
    },
    {
      src: "https://cargo24.kz/assets/images/fulfillment/fulfillment-by-operator-fbo-1.jpg",
      alt: t("Конвейерная система"),
    },
    {
      src: "https://cargo24.kz/assets/images/fulfillment/fulfillment-by-operator-fbo.jpg",
      alt: t("Работники склада"),
    },
  ];
  return (
    <section className="bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/20" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-primary/80 backdrop-blur-sm px-3 py-2 transition-transform duration-300 group-hover:translate-y-0 sm:px-4 sm:py-3">
                <p className="text-xs font-medium text-primary-foreground sm:text-sm">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
