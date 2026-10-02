// Duplicates the item list once so the CSS animation (translateX -50%)
// loops seamlessly. `renderItem` controls how each entry is drawn.
export default function Marquee({ items, renderItem, className = '', trackClassName = '' }) {
  const doubled = [...items, ...items]
  return (
    <div className={`overflow-hidden ${className}`} role="list" aria-label="Selected clients and projects">
      <div className={`marquee-track ${trackClassName}`}>
        {doubled.map((item, i) => (
          <div role="listitem" key={i} aria-hidden={i >= items.length ? 'true' : undefined}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  )
}
