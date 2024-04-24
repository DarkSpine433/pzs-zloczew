import '../globals.css'
import Footer from '@/app/components/mainLayout/Footer'
import Nav from '@/app/components/mainLayout/Nav'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function mainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="backdrop-blur-sm bg-foreground/80  shadow-md shadow-black/10 text-background sticky top-0 left-0 z-50">
        <div className=" max-w-[1440px] mx-auto">
          <Nav />
        </div>
      </nav>
      <div className="w-full absolute top-0 left-0 bg-gradient-to-b from-primary/30 to-transparent h-dvh pointer-events-none -z-50"></div>
      <div className=" max-w-[1440px] mx-auto  pb-10 pt-5">
        <main>{children}</main>
      </div>

      <footer className="bg-foreground text-background z-50">
        <div className=" max-w-[1440px] mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  )
}
