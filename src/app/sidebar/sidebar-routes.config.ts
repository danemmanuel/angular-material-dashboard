export const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
    { path: 'profile', title: 'Perfil de Usuário', icon: 'person', children: null },
    { path: 'table', title: 'Tabela', icon: 'content_paste', children: null },
    { path: '#component', id: 'component', title: 'Componentes', icon: 'apps', children: [
        {path: 'components/panels', title: 'Painéis', icon: 'P'},
        {path: 'components/wizard', title: 'Wizard', icon: 'W'},
      ]},
    { path: 'notification', title: 'Notificações', icon: 'notifications', children: null },
    { path: 'alert', title: 'Alertas', icon: 'warning', children: null },
    { path: 'settings', title: 'Configurações', icon: 'settings', children: null },
];
