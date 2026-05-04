type AppWindowProps = {
  appName: string
  onClose: () => void
}

const AppWindow = ({ appName, onClose }: AppWindowProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <section
        className="flex h-[80vh] w-[90vw] max-w-5xl flex-col rounded-lg border border-slate-200 bg-white shadow-2xl sm:h-[75vh] sm:w-[82vw]"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              App window
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-normal text-slate-950">
              {appName}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex size-9 items-center justify-center rounded-md border border-slate-200 text-xl leading-none text-slate-500 transition hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            aria-label="Close app window"
          >
            x
          </button>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          <label className="flex max-w-sm flex-col gap-2 text-sm font-medium text-slate-700">
            Select option
            <select className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200">
              <option>Daily summary</option>
              <option>Weekly overview</option>
              <option>Monthly breakdown</option>
            </select>
          </label>
        </div>

        <footer className="flex justify-end border-t border-slate-200 px-6 py-4">
          <button
            type="button"
            className="rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            Execute
          </button>
        </footer>
      </section>
    </div>
  )
}

export default AppWindow
