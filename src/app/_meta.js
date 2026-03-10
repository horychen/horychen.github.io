export default {
  index: {
    type: 'page',
    title: 'Home'
  },
  courses: {
    type: 'page',
    title: 'Courses'
  },
  docs: {
    type: 'page',
    title: 'Docs'
  },
  alumni: {
    type: 'page',
    title: 'Alumni'
  },
  pi: {
    title: 'PI',
    type: 'page',
    href: '/#pi'
  },
  gallery: {
    type: 'page',
    title: 'Gallery',
    href: '/#gallery'
  },
  contact: {
    type: 'page',
    title: 'Contact',
    href: '/#contact'
  },
  motor: {
    title: 'Motor Demos',
    type: 'menu',
    items: {
      index: { title: 'All Demos', href: '/motor/' },
      'hand-skeleton-options': { title: 'WG110 Hand Skeleton', href: '/motor/hand-skeleton-options/' },
      'robot-hand-kinematic': { title: 'Wuji Dexterous Hand', href: '/motor/robot-hand-kinematic/' },
      'robot_glove_3d': { title: 'WUJI Glove 110 — 3D', href: '/motor/robot_glove_3d/' }
    }
  }
}
