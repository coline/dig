sidebar = [
   {
     title: 'Le Programme',
     collapsable: true,
     children: [
       'accompagnement',
       'planning du programme'
     ]
   },
  {
     title: 'Ressources',
     collapsable: true,
     children: [
      'ecosysteme',
      'ingenerie-programme',
      'outils-refs',
      'reseau-eig'
     ]
   },
     {
     title: 'Bonnes pratiques',
     collapsable: true,
     children: [
      'preparer-defi',
      'indicateurs-impact',
      'concevoir',
      'ouvrir-publier',
      'communiquer',
      'documenter-defis'
     ]
   },
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
