export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edfcab34d65ae7e4371e9aa',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mdc4t3fm',
                  apiId: 'ef86bff7-bd94-4828-a615-aabbbe642632'
                },
                {
                  buildHookId: '5edfcab3675adf8062963575',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fu3gm7px',
                  apiId: '1b974ffd-8ea2-4173-9204-cd660996cee2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tcbyrd/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fu3gm7px.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
