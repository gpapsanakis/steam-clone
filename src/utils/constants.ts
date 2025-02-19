import { Button, MenuItems, Snackbar, Tab, Text } from '@/types'

export const API_URL = 'https://frontend-assessment.hackthebox.eu/api/apps'

export const TABS: Tab[] = [
  {
    title: 'All',
    route: 'all',
  },
  {
    title: 'New and Trending',
    route: 'new_and_trending',
  },
  {
    title: 'Top Sellers',
    route: 'top_sellers',
  },
  {
    title: "What's Being Played",
    route: 'being_played',
  },
  {
    title: 'Upcoming',
    route: 'upcoming',
  },
]

export const MENU_ITEMS: MenuItems = {
  name: 'GP',
  settings: 'Settings',
  logout: 'Logout',
}

export const NAME = {
  wholeName: 'Giannis Papsanakis',
  welcomeName: 'Welcome, Giannis',
}

export const BUTTON: Button = {
  installSteam: 'Install Steam',
  close: 'Close',
}

export const SNACKBAR: Snackbar = {
  steamInstall: 'We must not install apps from unknown sources',
  notification: 'Notification error',
  cart: 'Cart error',
}

export const TEXT: Text = {
  comingSoon: 'Coming Soon',
  footer: '©2025 Giannis Papsanakis | All Rights Reserved.',
  errorText:
    'There might be a problem with your connection or our servers. Please check your internet connection or try again later. We appreciate your patience.',
  errorTitle: 'Something Went Wrong',
  actionText: 'Retry Request',
  releaseDate: 'RELEASE DATE',
  developer: 'DEVELOPER',
  publisher: 'PUBLISHER',
  website: 'WEBSITE',
  discount: 'DISCOUNT',
  oldPrice: 'OLD PRICE',
  newPrice: 'NEW PRICE',
}
