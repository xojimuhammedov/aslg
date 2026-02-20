import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next";

export function CargoSection() {
  const { t } = useTranslation();

  const routes = [
    {
      title: t("СНГ"),
      description: t("Грузовые (\u2265100 кг.) перевозки по СНГ"),
      image: "https://cargo24.kz/assets/cache/images/main/city-in-russia-380x270-165.jpg",
      alt: "Панорама города СНГ региона",
    },
    {
      title: t("Европа"),
      description: t("Грузовые (\u2265100 кг.) перевозки Европа"),
      image: "https://cargo24.kz/assets/cache/images/main/city-in-europe-380x270-c58.jpg",
      alt: "Эйфелева башня в Париже",
    },
    {
      title: t("Азия"),
      description: t("Грузовые (\u2265100 кг.) перевозки Азия"),
      image: "https://cargo24.kz/assets/cache/images/main/asia-380x270-7da.jpg",
      alt: "Великая Китайская стена",
    },
    {
      title: t("Прибалтика"),
      description: t("Грузовые (\u2265100 кг.) перевозки Прибалтика"),
      image: "https://cargo24.kz/assets/cache/images/countries/baltic-region-380x270-8c8.jpg",
      alt: "Пейзаж Прибалтики",
    },
  ]
  return (
    <section id="routes" className="bg-secondary pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <span className="mb-3 inline-block rounded-full bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm">
            {t("Направления")}
          </span>
          <h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Грузовые Маршруты")}
          </h2>
        </div>

        {/* Routes Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {routes.map((route) => (
            <a
              key={route.title}
              href="#contact"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={route.image}
                  alt={route.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Text Content */}
              <div className="flex flex-1 items-start justify-between gap-4 p-5 sm:p-6">
                <div>
                  <h3
                    className="text-xl font-bold text-card-foreground sm:text-2xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {route.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-muted-foreground sm:text-base">
                    {route.description}
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all group-hover:bg-accent group-hover:text-accent-foreground">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
