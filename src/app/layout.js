import './globals.css'


export const metadata = {
  title: 'Satzhan',
  description: 'Ilon Mask',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
