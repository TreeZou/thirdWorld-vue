/*This is a place that some routers*/
const routers = [
    {
        id: '10000',
        parentsId: ['10000'],
        menuUrl: 'home',
        title: '首页',
        icon: 'ios-cafe-outline',
        hasChild: false
    },   {
        id: '1000',
        parentsId: ['1001'],
        menuUrl: '',
        title: '控制台',
        icon: 'ios-easel',
        hasChild: true,
        child: [{
            id: '1002',
            menuUrl: 'console',
            title: '控制台',
            icon: 'ios-speedometer-outline',
            hasChild: false,
            parentId: '1001'
        }, {
            id: '1003',
            menuUrl: 'dashbroad',
            title: 'dashbroad',
            icon: 'ios-speedometer-outline',
            hasChild: false,
            parentId: '1001'
        }]
    }, {
        id: '10001',
        parentsId: ['10001'],
        menuUrl: '',
        title: '基础信息',
        icon: 'ios-person-outline',
        hasChild: true,
        child: [{
            id: '10002',
            menuUrl: 'basicInfo',
            title: '个人信息',
            icon: 'ios-person-outline',
            hasChild: false,
            parentId: '10001'
        }]
    }, {
        id: '100003',
        parentsId: ['100003'],
        menuUrl: '',
        title: '表格',
        icon: 'md-grid',
        hasChild: true,
        child: [{
            id: '100004',
            menuUrl: 'commonTable',
            title: '基础表格',
            icon: 'ios-grid-outline',
            hasChild: false,
            parentId: '100003'
        }]
    }, {
        id: '1',
        parentsId: ['1'],
        menuUrl: '',
        title: '编辑器',
        icon: 'md-grid',
        hasChild: true,
        child: [{
            id: '2',
            menuUrl: 'commonTable',
            title: 'Markdom',
            icon: 'ios-grid-outline',
            hasChild: false,
            parentId: '1'
        }, {
            id: '3',
            menuUrl: 'commonTable',
            title: '普通编辑器',
            icon: 'ios-grid-outline',
            hasChild: false,
            parentId: '1'
        }]
    }, {
        id: '10',
        parentsId: ['11'],
        menuUrl: '',
        title: '图片化妆',
        icon: 'md-images',
        hasChild: true,
        child: [{
            id: '12',
            menuUrl: 'commonTable',
            title: '图片裁剪',
            icon: 'ios-images-outline',
            hasChild: false,
            parentId: '11'
        }]
    }, {
        id: '100',
        parentsId: ['101'],
        menuUrl: '',
        title: '微信',
        icon: 'ios-chatbubbles',
        hasChild: true,
        child: [{
            id: '102',
            menuUrl: 'commonTable',
            title: '微信',
            icon: 'ios-chatbubbles',
            hasChild: false,
            parentId: '101'
        }]
    },
    {
        id: '100000',
        parentsId: ['100001'],
        menuUrl: '',
        title: '调色板',
        icon: 'logo-rss',
        hasChild: true,
        child: [{
            id: '100002',
            menuUrl: '',
            title: '主题换色',
            icon: 'ios-outlet',
            hasChild: false,
            parentId: '100001'
        }]
    },
    {
        id: '9999',
        parentsId: ['9999'],
        menuUrl: 'github',
        title: 'github',
        icon: 'logo-github',
        hasChild: false
    }
];
export default routers;
