export default defineI18nConfig(() => ({
  fallbackLocale: "en",
  datetimeFormats: {
    en: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      },
    },
    fr: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      },
    },
    es: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "2-digit",
        month: "short",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      },
    },
  },
}));
