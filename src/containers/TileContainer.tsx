import AppTiles from "../components/AppTiles"

type TileContainerProps = {
  tileInfo: string[]
  onOpenApp: (tileName: string) => void
}

const TileContainer = ({ tileInfo, onOpenApp }: TileContainerProps) => {
  const tileInfomapped = tileInfo.map((tileName: string) => (
    <AppTiles
      key={tileName}
      tileName={tileName}
      onOpen={() => onOpenApp(tileName)}
    />
  ))

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tileInfomapped}
    </div>
  )
}

export default TileContainer
