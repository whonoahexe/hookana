export function FormField({
  label,
  help,
  children,
}: {
  label: string
  help: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-6">
      <p className="type-monospaced text-foreground uppercase">{label}</p>
      {children}
      <p className="font-mono text-xs leading-3.5 text-foreground">{help}</p>
    </div>
  )
}
