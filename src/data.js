import ServiceOne from "./assets/service-1.webp";
import ServiceTwo from "./assets/service-2.avif";
import ServiceThree from "./assets/service-3.jpg";
import ServiceFour from "./assets/service-4.jpeg";

export const serviceData = [
  {
    id: 1,
    title_kz: "Халықаралық жүк тасымалы",
    title_ru: "Международные грузоперевозки",
    title_en: "International cargo transportation",
    name_ru:
      "Мы осуществляем грузоперевозки по странам СНГ, Европы и Китая, используя только привлеченные современные фуры, которые соответствуют всем международным стандартам.",
    name_kz:
      "Біз ТМД елдеріне, Еуропаға және Қытайға халықаралық тасымалдауды жүзеге асырамыз, барлық халықаралық стандарттарға сай заманауи жүк көліктерін қолданамыз.",
    name_en:
      "We provide international transportation to CIS countries, Europe, and China using modern trucks that meet all international standards.",
    text_en: `
- Road transportation: delivery of various types and volumes of cargo using a reliable fleet. <br />
- Multimodal transportation: optimal combination of various transport modes to reduce time and cost. <br />
- Express delivery: for urgent cargo requiring special attention.
    `,
    text_kz: `
- Автомобиль тасымалы: сенімді автопаркті пайдалана отырып, әртүрлі жүктің түрі мен көлемін жеткізу. <br />
- Мультимодаль тасымал: жеткізу мерзімі мен құнын қысқарту үшін көлік түрлерінің тиімді үйлесімі. <br />
- Экспресс жеткізу: ерекше назарды қажет ететін шұғыл жүктерге арналған.
    `,
    text_ru: `
- Автомобильные перевозки: доставка грузов различного типа и объема с использованием надежного автопарка. <br />
- Мультимодальные перевозки: оптимальное сочетание разных видов транспорта для сокращения сроков и стоимости доставки. <br />
- Экспресс-доставка: для срочных грузов, требующих особого внимания.
    `,
    image: ServiceOne,
  },
  {
    id: 2,
    title_kz: "Жүктерді сақтау және өңдеу",
    title_ru: "Складирование и обработка грузов",
    title_en: "Cargo storage and handling",
    name_ru:
      "Мы предлагаем современные складские мощности для хранения и обработки грузов:",
    name_kz:
      "Біз жүктерді сақтау және өңдеуге арналған заманауи қоймаларды ұсынамыз:",
    name_en:
      "We offer modern warehouse facilities for storing and handling goods:",
    text_en: `
- Short-term and long-term storage. <br />
- Loading and unloading operations. <br />
- Packaging, labeling, and consolidation. <br />
- Cargo condition monitoring and accounting.
    `,
    text_kz: `
- Қысқа және ұзақ мерзімді сақтау. <br />
- Жүктеу және түсіру жұмыстары. <br />
- Қаптау, таңбалау және біріктіру. <br />
- Жүк жағдайын бақылау және есепке алу.
    `,
    text_ru: `
- Короткосрочное и долгосрочное хранение. <br />
- Погрузочно-разгрузочные работы. <br />
- Упаковка, маркировка и консолидация. <br />
- Учет и контроль состояния груза.
    `,
    image: ServiceTwo,
  },
  {
    id: 3,
    title_kz: "Кедендік ресімдеу",
    title_ru: "Таможенное оформление",
    title_en: "Customs clearance",
    name_ru:
      "Мы обеспечиваем профессиональную поддержку при прохождении таможенных процедур:",
    name_kz: "Біз кедендік рәсімдерден өту кезінде кәсіби қолдау көрсетеміз:",
    name_en:
      "We provide professional support during customs clearance procedures:",
    text_en: `
- Preparation and processing of documents. <br />
- Support at all stages of customs clearance. <br />
- Consultations on international law issues.
    `,
    text_kz: `
- Құжаттарды дайындау және рәсімдеу. <br />
- Кедендік тазартудың барлық кезеңдерінде қолдау көрсету. <br />
- Халықаралық құқық мәселелері бойынша кеңес беру.
    `,
    text_ru: `
- Подготовка и оформление документов. <br />
- Сопровождение на всех этапах таможенной очистки. <br />
- Консультации по вопросам международного права.
    `,
    image: ServiceThree,
  },
  {
    id: 4,
    title_kz: "Логистикалық консалтинг",
    title_ru: "Логистический консалтинг",
    title_en: "Logistics consulting",
    name_ru:
      "Мы помогаем оптимизировать логистические процессы вашего бизнеса:",
    name_kz:
      "Біз сіздің бизнесіңіздегі логистикалық процестерді оңтайландыруға көмектесеміз:",
    name_en: "We help optimize the logistics processes of your business:",
    text_en: `
- Development of personalized delivery routes. <br />
- Reduction of logistics costs. <br />
- Advice on choosing the optimal transport and packaging.
    `,
    text_kz: `
- Жеткізудің жеке маршруттарын әзірлеу. <br />
- Логистикаға жұмсалатын шығындарды азайту. <br />
- Көлік пен қаптаманы таңдауға кеңес беру.
    `,
    text_ru: `
- Разработка индивидуальных маршрутов доставки. <br />
- Снижение затрат на логистику. <br />
- Консультации по выбору оптимального транспорта и упаковки.
    `,
    image: ServiceFour,
  },
];
