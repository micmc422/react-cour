import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { HeaderLogo } from './components/SvgIcons'

const config: DocsThemeConfig = {
  docsRepositoryBase: "https://github.com/micmc422/react-cour/tree/main/pages",
  head: (<link rel="shortcut icon" type="image" href="/favicon.ico" />),
  logo: <>
    <HeaderLogo style={{ height: "32px" }} />
    <span style={{ fontSize: "28px", textTransform: "uppercase", fontWeight: 700 }}>React</span> </>,
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  search: {
    placeholder: "Chercher dans le cours",
    emptyResult: "Aucun résultat",
    error: "Oups petit probléme... réessayez",
    loading: "Recherche en cours"
  },
  editLink: { text: null },
  toc: { title: "Sur cette page" },
  feedback: {
    content: "Une question ou un problème ?",
  },
  project: {
    link: 'https://codesandbox.io/p/devbox/jyxvnw',
    icon: <svg className="feather feather-codesandbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="7.5 4.21 12 6.81 16.5 4.21" /><polyline points="7.5 19.79 7.5 14.6 3 12" /><polyline points="21 12 16.5 14.6 16.5 19.79" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" x2="12" y1="22.08" y2="12" /></svg>
  },
  footer: {
    text: 'Champollion - TW3 - React - Bardy Michaël',
  },
  gitTimestamp: ({ timestamp }) => <>Dernière mise à jour {timestamp.toLocaleDateString()}</>
}

export default config

