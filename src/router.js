const home = r => require.ensure([], () => r(require('./pages/home')), 'home')
const repository = r => require.ensure([], () => r(require('./pages/repository')), 'repository')
const _404 = r => require.ensure([], () => r(require('./pages/404')), '404')
export default [
    {
        path:'/:id',
        component:home,
    },
    {
        path:'/:id/:repo',
        component:repository,
        children:[
            {
                path:'*'
            }
        ]   
    },
    {
        path:'*',
        component:_404,
        alias:'404'
    }
]