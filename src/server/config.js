const env = process.env;

export default {
  port: env.PORT || 1235,
  host: env.HOST || 'localhost',
  isDev: env.NODE_ENV !== 'production',
  isBrowser: typeof window !== 'undefined',
};
