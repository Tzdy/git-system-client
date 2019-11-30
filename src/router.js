const home = r => require.ensure([], () => r(require('./pages/home')), 'home')
const repository = r => require.ensure([], () => r(require('./pages/repository')), 'repository')
const code = r => require.ensure([], () => r(require('./components/repository/code')), 'code')
const code_file = r => require.ensure([], () => r(require('./components/repository/code/file')), 'file')
const options = r => require.ensure([], () => r(require('./components/repository/code/options')), 'options')
const commit = r => require.ensure([], () => r(require('./components/repository/code/options/commit')), 'commit')
const settings = r => require.ensure([], () => r(require('./components/repository/settings')), 'settings')
const _404 = r => require.ensure([], () => r(require('./pages/404')), '404')
export default [
    {
        path:'/:id',
        component:home,
    },
    {
        path:'/:id/:repo/',
        component:repository,
        children:[
            {
                path:'',
                component:code,
                children:[
                    {
                        path:'',
                        components:{
                            default:code_file,
                            options:options
                        },
                        children:[
                            {
                                path:'tree/*',
                            },
                            
                        ]
                    },
                    {
                        path:'options/commit',
                        component:commit
                    }
                    
                ]
            },
            {
                path:'settings',
                component:settings
            }
            
        ]   
    },
    {
        path:'*',
        component:_404,
        alias:'404'
    }
]