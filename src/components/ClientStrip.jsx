import Marquee from './Marquee'
import { tickerItems } from '../data/content'

import buraqLab from '../assets/client-strip/buraq-lab.png'
import synsterPlatform from '../assets/client-strip/synster-platform.png'
import medicologyHealth from '../assets/client-strip/medicology-health.png'
import mentara from '../assets/client-strip/mentara.svg'
import trainMeConsulting from '../assets/client-strip/train-me-consulting.png'
import nextdim from '../assets/client-strip/nextdim.png'
import howtodiscuss from '../assets/client-strip/howtodiscuss.png'
import goldIra from '../assets/client-strip/gold-ira.png'
import richmondDenture from '../assets/client-strip/richmond-denture.png'


// Drop a replacement file with the SAME name into src/assets/client-strip/
// to swap in a real logo — no code change needed.
const logos = {
  'buraq-lab': buraqLab,
  'synster-platform': synsterPlatform,
  'medicology-health': medicologyHealth,
  'train-me-consulting': trainMeConsulting,
  'mentara': mentara,
  'nextdim': nextdim,
  'howtodiscuss': howtodiscuss,
  'gold-ira': goldIra,
  'richmond-denture': richmondDenture,

}

export default function ClientStrip() {
  return (
    <section aria-label="Selected clients and projects" className="relative isolate overflow-hidden bg-cream-paper py-6">
      <div className="relative z-10 mx-auto max-w-content">
        <Marquee
          className="client-strip-mask"
          items={tickerItems}
          renderItem={(item) => (
            <div className="flex items-center gap-3 px-8">
              <img
                src={logos[item.imageKey]}
                alt={`${item.name} logo`}
                className="h-8 w-8 shrink-0 rounded-full object-contain p-0.5"
              />
              <span className="whitespace-nowrap font-serif text-base text-forest/65">{item.name}</span>
            </div>
          )}
        />
      </div>
    </section>
  )
}
