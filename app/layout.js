export const metadata = {
  title: 'SGN Airport Fast Track Guide - Tan Son Nhat Immigration Services',
  description: 'Compare reputable fast track immigration services at Tan Son Nhat Airport (SGN) in Ho Chi Minh City. Reviews, pricing, and booking information.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
