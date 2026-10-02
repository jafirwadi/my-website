export default function SwapText({
  label,
  hoverLabel,
  icon: Icon,
  iconPosition = 'trailing',
  iconClassName = '',
}) {
  const hasLeadingIcon = Icon && iconPosition === 'leading'
  const hasTrailingIcon = Icon && iconPosition === 'trailing'

  // Special handling ONLY for the "Let's Talk" → "Start a Project" CTA.
  // All other SwapText buttons keep the original behavior.
  const isProjectCTA =
    label === "Let's Talk" && hoverLabel === "Start a Project"

  return (
    <span
      className={
        isProjectCTA
          ? 'relative inline-grid items-center justify-center overflow-hidden align-middle leading-none'
          : 'relative inline-flex items-center justify-center overflow-hidden align-middle leading-none'
      }
    >
      {/* Current label */}
      <span
        className={
          isProjectCTA
            ? 'col-start-1 row-start-1 flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 ease-editorial group-hover:-translate-y-full group-hover:opacity-0'
            : 'flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 ease-editorial group-hover:-translate-y-full group-hover:opacity-0'
        }
      >
        {hasLeadingIcon && <Icon className={`shrink-0 ${iconClassName}`} />}
        <span>{label}</span>
        {hasTrailingIcon && <Icon className={`shrink-0 ${iconClassName}`} />}
      </span>

      {/* Hover label */}
      <span
        className={
          isProjectCTA
            ? 'col-start-1 row-start-1 flex items-center justify-center gap-2 whitespace-nowrap translate-y-full opacity-0 transition-all duration-300 ease-editorial group-hover:translate-y-0 group-hover:opacity-100'
            : 'absolute inset-0 flex items-center justify-center gap-2 whitespace-nowrap translate-y-full opacity-0 transition-all duration-300 ease-editorial group-hover:translate-y-0 group-hover:opacity-100'
        }
      >
        {hasLeadingIcon && <Icon className={`shrink-0 ${iconClassName}`} />}
        <span>{hoverLabel}</span>
        {hasTrailingIcon && <Icon className={`shrink-0 ${iconClassName}`} />}
      </span>
    </span>
  )
}