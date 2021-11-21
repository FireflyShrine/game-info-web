interface NavigationItem {
  href: string
  icon: React.ReactNode
  title: string
  tip?: string
}

export interface Navigation {
  topic: string
  children: NavigationItem[]
}
