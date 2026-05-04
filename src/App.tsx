import { useEffect, useState } from 'react'
import type { Models } from 'appwrite'
import AppWindow from './components/AppWindow'
import TileContainer from './containers/TileContainer'
import { appwriteDatabaseId, tablesDB } from './appwriteConfig'

type AppRow = Models.Row & {
  appName?: string
}

function App() {
  const [apps, setApps] = useState<string[]>([])
  const [openApp, setOpenApp] = useState<string | null>(null)
  const [isLoadingApps, setIsLoadingApps] = useState(true)
  const [appsError, setAppsError] = useState<string | null>(null)

  useEffect(() => {
    const loadApps = async () => {
      try {
        const response = await tablesDB.listRows<AppRow>({
          databaseId: appwriteDatabaseId,
          tableId: "apps",
        })

        const appNames = response.rows
          .map((row) => row.appName)
          .filter((appName): appName is string => Boolean(appName))

        setApps(appNames)
      } catch (error) {
        console.error("Failed to load apps from Appwrite", error)
        setAppsError("Could not load apps from Appwrite.")
      } finally {
        setIsLoadingApps(false)
      }
    }

    loadApps()
  }, [])

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-950">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="flex flex-col gap-3 border-b border-slate-200 pb-8">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Workspace
          </p>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
                Your Apps
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Quick access to your reporting tools.
              </p>
            </div>
            {/* <button className="w-fit rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
              New report
            </button> */}
          </div>
        </header>

        {isLoadingApps && (
          <p className="rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-500 shadow-sm">
            Loading apps...
          </p>
        )}

        {appsError && (
          <p className="rounded-lg border border-red-200 bg-red-50 p-5 text-sm text-red-700">
            {appsError}
          </p>
        )}

        {!isLoadingApps && !appsError && apps.length === 0 && (
          <p className="rounded-lg border border-slate-200 bg-white p-5 text-sm text-slate-500 shadow-sm">
            No apps found yet.
          </p>
        )}

        {!isLoadingApps && !appsError && apps.length > 0 && (
          <TileContainer tileInfo={apps} onOpenApp={setOpenApp} />
        )}
      </section>

      {openApp && (
        <AppWindow appName={openApp} onClose={() => setOpenApp(null)} />
      )}
    </main>
  )
}

export default App
