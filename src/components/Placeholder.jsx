// A clearly-marked stand-in for an image the user will add later.
// Swap it for a real <img> once assets are in src/assets.
export default function Placeholder({ label = 'Image', ratio = 'aspect-[4/5]', className = '' }) {
  return (
    <div
      className={`${ratio} ${className} flex items-center justify-center rounded-sm border border-dashed border-cream/25 bg-forest-deep`}
    >
      <span className="px-4 text-center font-sans text-xs uppercase tracking-wide2 text-cream/35">
        {label}
      </span>
    </div>
  )
}
