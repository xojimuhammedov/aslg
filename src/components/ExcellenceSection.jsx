import { CircleCheck } from "lucide-react"
import { useTranslation } from "react-i18next";



export function ExcellenceSection() {
  const { t } = useTranslation();

  const consolidationPoints = [
    t("Стратегическое расположение склада"),
    t("Глобальная сеть партнеров"),
    t("Логистическая экспертиза"),
  ]
  
  const cargoPoints = [
    t("Стратегическое расположение склада"),
    t("Глобальная сеть партнеров"),
    t("Логистическая экспертиза"),
  ]
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="mb-3 inline-block rounded-full bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm">
            {t("Почему мы")}
          </span>
          <h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("Превосходство в логистике")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg lg:mt-6">
            {t("Ощутите превосходство, которое дает выбор в пользу глобальной транспортной логистики. Наша приверженность инновациям, надежности и удовлетворенности клиентов принесла нам признание в отрасли. Сотрудничайте с нами, чтобы улучшить свои логистические операции.")}
          </p>
        </div>

        {/* Two-column checklist */}
        <div className=" grid gap-6 sm:mt-14 sm:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3
              className="text-lg font-bold text-card-foreground sm:text-xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("Консолидация грузов")}
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              {consolidationPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 shrink-0" />
                  <span className="text-sm text-muted-foreground sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3
              className="text-lg font-bold text-card-foreground sm:text-xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {t("CARGO")}
              <sup className="">24</sup>
              {t("это")}
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              {cargoPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CircleCheck className="h-5 w-5 shrink-0" />
                  <span className="text-sm text-muted-foreground sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Paragraph */}
        <div className="max-w-3xl rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:mt-14 sm:p-8">
          <p className="text-base leading-relaxed text-foreground sm:text-lg">
            {t("Готовы оптимизировать свою логистику с помощью консолидации грузов в Алматы? Выберите CARGO<sup>24</sup> для рационального, экономичного и устойчивого подхода. Свяжитесь с нами сегодня, чтобы обсудить, как наши услуги по консолидации грузов могут принести пользу вашему бизнесу.")}
          </p>
          <a
            href={"tel:+77789821945"}
            target="_blank"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 sm:text-base"
          >
            {t("Связаться с нами")}
          </a>
        </div>
      </div>
    </section>
  )
}
