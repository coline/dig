sidebar = [
  // {
  //   title: 'Programme EIG',
  //   collapsable: true,
  //   children: [
  //     'accompagnement',
  //     'animation',
  //     'contributions',
  //   ]
  // }
]

module.exports = {
  theme: 'gouv-fr',
  title: 'Documentation DIG',
  description: "La documentation interne du programme Designers d'Intérêt Général.",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#0053b3' }]
  ],
  themeConfig: {
    sidebar: sidebar,
    sidebarDepth: 1,
    docsDir: ".",
    repo: 'entrepreneur-interet-general/dig',
    repoLabel: 'Dépôt Git',
    editLinks: true,
    editLinkText: 'Modifier cette page',
    nav: [
      { text: 'Site web', link: 'https://entrepreneur-interet-general.etalab.gouv.fr' },
    ]
  }
}