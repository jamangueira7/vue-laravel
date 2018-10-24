import HelloWorld from '@/components/HelloWorld'
import AccountsList from '../components/Accounts/List'
import AccountsView from '../components/Accounts/View'
import AccountsCreate from '../components/Accounts/Create'
import AccountsEdit from '../components/Accounts/Edit'
const routes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path: '/contas', component: AccountsList},
    {path: '/contas/novo', component: AccountsCreate},
    {path: '/contas/:id/editar', component: AccountsEdit},
    {path: '/contas/:id', component: AccountsView}
  ]

export default routes
