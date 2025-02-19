interface GameInfo {
  about_the_game: string
  background: string
  categories: Array<{ description: string; id: number }>
  developers: Array<string>
  header_image: string
  id: string
  movies: Array<{
    highlight: boolean
    id: string
    mp4: { 480: string; max: string }
    name: string
    thumbnail: string
    webm: { 480: string; max: string }
  }>
  name: string
  platforms: Array<{ linux: boolean; mac: boolean; windows: boolean }>
  price_overview: {
    currency: string
    discount_percent: number
    final: number
    initial: number
    initial_formatted: string
  }
  publishers: Array<string>
  release_date: { coming_soon: boolean; date: string }
  screenshots: Array<{ id: number; path_thumbnail: string; path_full: string }>
  short_description: string
}

interface Games extends Array<GameInfo> {}

interface Tab {
  title: string
  route: string
}

interface MenuItems {
  name: string
  settings: string
  logout: string
}

interface Button {
  installSteam: string
  close: string
}

interface Snackbar {
  steamInstall: string
  notification: string
  cart: string
}

interface Text {
  comingSoon: string
  footer: string
  errorText: string
  errorTitle: string
  actionText: string
  releaseDate: string
  developer: string
  publisher: string
  website: string
  discount: string
  oldPrice: string
  newPrice: string
}

interface PriceOverview {
  discount_percent?: number
  initial_formatted: string
  final_formatted: string
}
