import Navbar from '@/components/Navbar/Navbar'
import Home from '@/components/Home/Home'
import Portfolio from '@/components/Portfolio/Portfolio'
import About from '@/components/About/About'
import Resume from '@/components/Resume/Resume'
import Contact from '@/components/Contact/Contact'
import GsapEffects from '@/components/GsapEffects'
import Rain from '@/components/Rain'

export default function Page() {
  return <div className="min-h-screen overflow-x-clip site-shell"><Rain /><div className="site-content"><Navbar /><main className="site-main"><GsapEffects /><Home /><Portfolio /><About /><Resume /><Contact /></main><footer className="site-footer"><span>Designed &amp; built with care by Karan Sharma</span><span>Modern technical folio · Delhi, India</span></footer></div></div>
}
