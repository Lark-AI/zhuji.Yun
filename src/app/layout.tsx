import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '香港云主机 - 虚拟主机服务',
    template: '%s | 香港云主机',
  },
  description: '提供虚拟主机、香港空间、高防空间、金牌空间等各类主机服务，稳定可靠，性价比高',
  keywords: [
    '虚拟主机',
    '香港空间',
    '高防空间',
    '金牌空间',
    '云主机',
    '香港云主机',
    'Web hosting',
    'Cloud hosting'
  ],
  openGraph: {
    title: '香港云主机 - 专业虚拟主机服务',
    description: '提供虚拟主机、香港空间、高防空间、金牌空间等各类主机服务，稳定可靠，性价比高',
    siteName: '香港云主机',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="zh-CN" className="dark">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
