import { withBasePath } from '../lib/utils';

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
    href: withBasePath('#pi')
  },
  gallery: {
    type: 'page',
    title: 'Gallery',
    href: withBasePath('#gallery')
  },
  contact: {
    type: 'page',
    title: 'Contact',
    href: withBasePath('#contact')
  }
}
