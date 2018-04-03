// import { Injectable } from '@angular/core';
//
// @Injectable()
// export class LayoutService {
//   nav =[
//     {
//       id: 1,
//       name: '前端代码规范',
//       subNav: [
//
//       ]
//     },
//     {
//       id: 2,
//       name: 'SHOWCASE',
//       link: '/showcase',
//       subNav: [
//         {
//           id: 21,
//           name: '基础',
//           link: '',
//           subNav: [
//             {
//               id: 211,
//               name: '按钮',
//               link: '/showcase/button'
//             },
//             {
//               id: 212,
//               name: '表单',
//               link: '/showcase/form'
//             },
//             {
//               id: 213,
//               name: '动画',
//               link: '/showcase/animation'
//             },
//
//           ]
//         },
//         {
//           id: 22,
//           name: '表单',
//           subNav: [
//             {
//               id: 224,
//               name: '表格',
//               link: '/showcase/table'
//             },
//             {
//               id: 225,
//               name: '图标',
//               link: '/showcase/icon'
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: 3,
//       name: '组件／插件',
//       subNav: [
//         {
//           id: 11,
//           name: 'input',
//           link: '/control/controlInput',
//           subNav: []
//         },
//         {
//           id: 12,
//           name: 'select',
//           link: '/control/controlSelect',
//           subNav: []
//         }
//       ]
//     },
//     {
//       id: 4,
//       name: 'API',
//       subNav: [
//         {
//           id: 21,
//           name: 'api1',
//           link: '/api/api1'
//         },
//         {
//           id: 22,
//           name: 'api2',
//           link: '/api/api2'
//         }
//       ]
//     }
//   ];
//   currentNav;
//
//   getNav() {
//     return this.nav;
//   }
//   getSubNav() {
//     return this.currentNav;
//
//   }
//   setSubNav(id) {
//     console.log(this.currentNav);
//     this.currentNav = this.nav.filter(item => {
//       return item.id == id;
//     });
//     console.log(this.currentNav.name)
//   }
// }
