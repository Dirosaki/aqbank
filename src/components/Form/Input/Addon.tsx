type AddonProps = {
  label?: string
}

export function Addon({ label }: AddonProps) {
  return (
    <div className="flex max-h-11 rounded-l-xl border border-r-0 border-neutral-300 bg-neutral-50 px-4 py-3 ">
      <span className="font-inter text-sm leading-5 text-neutral-950">{label}</span>
    </div>
  )
}
