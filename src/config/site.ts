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
  {
    title: "Projects",
    href: "/projects",
  },
]

export const GITHUB_USERNAME = "siby369"
export const X_USERNAME = "siby369"
export const SOURCE_CODE_GITHUB_REPO = "siby369/siby"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/siby369/siby"
export const SPONSORSHIP_URL = "https://github.com/sponsors/siby369"

export const UTM_PARAMS = {
  utm_source: "siby369.com",
}
