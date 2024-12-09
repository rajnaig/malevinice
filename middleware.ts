import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'hu', 'sk', 'es', 'nl'],
  defaultLocale: 'hu'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};