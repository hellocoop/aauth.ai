import "./globals.css"

export const metadata = {
  title: {
    template: '%s | AAuth',
    default: 'AAuth — Authentication & Authorization for Autonomous Agents',
  },
  description: 'AAuth is an authorization protocol for autonomous agents and headless systems — agent identity, resource access, and user delegation without pre-registration.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.aauth.dev',
    siteName: 'AAuth',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": ""}'
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
