import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'hu', 'sk', 'es', 'nl', 'it', 'cs', 'de'],
  defaultLocale: 'hu'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};