
type AppTilesProps = {
  tileName: string
  onOpen: () => void
}

const AppTiles = ({ tileName, onOpen }: AppTilesProps) => {
  const initials = tileName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group rounded-lg border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 items-center justify-center rounded-md bg-slate-100 text-sm font-semibold text-slate-700">
          {initials}
        </div>
        <span className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-green-500">
          Ready
        </span>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold tracking-normal text-slate-950">
          {tileName}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Launch and manage this App.
        </p>
      </div>
    </button>
  )
}

export default AppTiles
