const index = r => require.ensure([], () => r(require('./pages/index')), 'index')
const home = r => require.ensure([], () => r(require('./pages/home')), 'home')
const main_home = r => require.ensure([], () => r(require('./components/home/main-home')), 'main_home')
const repository = r => require.ensure([], () => r(require('./pages/repository')), 'repository')
const code = r => require.ensure([], () => r(require('./components/repository/code')), 'code')
const code_file = r => require.ensure([], () => r(require('./components/repository/code/file')), 'file')
const options = r => require.ensure([], () => r(require('./components/repository/code/options')), 'options')
const commit = r => require.ensure([], () => r(require('./components/repository/code/options/commit')), 'commit')
const settings = r => require.ensure([], () => r(require('./components/repository/settings')), 'settings')
const _404 = r => require.ensure([], () => r(require('./pages/404')), '404')
export default [
    {
        path:'',
        component:index
    },
    {
        path:'/:id',
        component:home,
        children:[
            {
                path:'',
                component:main_home
            },
            {
                path:':repo',
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
        ]
    },
    
    {
        path:'*',
        component:_404,
        alias:'404'
    }
]