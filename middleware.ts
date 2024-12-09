import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'hu', 'sk'],
  defaultLocale: 'hu'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};