import HeroiconsHome from '~icons/heroicons/home'
import HeroiconsDocumentDuplicate from '~icons/heroicons/document-duplicate'
import HeroiconsShoppingCart from '~icons/heroicons/shopping-cart'
import HeroiconsBars3 from '~icons/heroicons/bars-3'
import HeroiconsBeaker from '~icons/heroicons/beaker'
import HeroiconsBookmark from '~icons/heroicons/bookmark'
import HeroiconsClipboard from '~icons/heroicons/clipboard'
import HeroiconsUserGroup from '~icons/heroicons/user-group'
import HeroiconsCog from '~icons/heroicons/cog'
import HeroiconsDocumentText from '~icons/heroicons/document-text'
import HeroiconsQuestionMarkCircle from '~icons/heroicons/question-mark-circle'
import HeroiconsFingerPrint from '~icons/heroicons/finger-print'
// import HeroiconsShieldCheck from '~icons/heroicons/shield-check'

interface NavigationItem {
  name: string
  href: string
  icon: any
  exact?: boolean
  permission?: string
}

export const useNavigation = () => {
  const adminItems: NavigationItem[] = [
    {
      name: 'Home',
      href: '/admin',
      icon: HeroiconsHome,

    },
    {
      name: 'Menus',
      icon: HeroiconsDocumentDuplicate,
      href: '/admin/menus',
    },
    {
      name: 'Orders',
      icon: HeroiconsShoppingCart,
      href: '/admin/orders',
    },
    {
      name: 'Items',
      icon: HeroiconsBars3,
      href: '/admin/items',
    },
    {
      name: 'Add-ons',
      icon: HeroiconsBeaker,
      href: '/admin/add_ons',
    },
    {
      name: 'Item Types',
      icon: HeroiconsBookmark,
      href: '/admin/item_types',
    },
    {
      name: 'Offers',
      icon: HeroiconsClipboard,
      href: '/admin/offers',
    },
  ]

  const miscItems: NavigationItem[] = [
    {
      name: 'Users',
      icon: HeroiconsUserGroup,
      href: '/admin/users',
      permission: 'user-list',
      exact: true,
    },
    {
      name: 'Roles',
      icon: HeroiconsFingerPrint,
      href: '/admin/roles',
      permission: 'role-list',
      exact: true,
    },
    // {
    //   name: 'Permissions',
    //   icon: HeroiconsShieldCheck,
    //   href: '/admin/permissions',
    // },
    {
      name: 'Settings',
      icon: HeroiconsCog,
      href: '/admin/settings',
    },
    {
      name: 'Information',
      icon: HeroiconsDocumentText,
      href: '/admin/pages',
    },
    {
      name: 'Help',
      icon: HeroiconsQuestionMarkCircle,
      href: '/admin/help',
    },
  ]

  const adminItemsGuarded = computed(() => {
    return adminItems.filter((item) => {
      if (item.permission)
        return useGate().can(item.permission)

      return true
    })
  })

  const miscItemsGuarded = computed(() => {
    return miscItems.filter((item) => {
      if (item.permission)
        return useGate().can(item.permission)

      return true
    })
  })

  return {
    adminItemsGuarded,
    miscItemsGuarded,
  }
}
