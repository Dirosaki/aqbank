type BadgeProps = {
  children: string
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded border border-neutral-300 bg-white px-[2px] text-xs leading-[18px] tracking-[0.5px]">
      {children}
    </span>
  )
}
