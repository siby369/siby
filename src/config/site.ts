import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://siby369.github.io",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
]

export const GITHUB_USERNAME = "siby369"
export const SOURCE_CODE_GITHUB_REPO = "siby369/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/siby369/portfolio"

export const UTM_PARAMS = {
  utm_source: "siby369.com",
}
