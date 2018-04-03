import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let categoryNav = [
      {
        id: 'showcase',
        data: [
          {
            id: 'jichu',
            name: '基础',
            subNav: [
              {
                id: 'button',
                name: 'button',
                subNav: []
              },
              {
                id: 'table',
                name: 'table',
                subNav: [
                  {
                    id: 'table1',
                    name: 'table1',
                    subNav: []
                  }
                ]
              }
            ]
          },
          {
            id: 'biaodan',
            name: '表单',
            subNav: [
              {
                id: 'biaodan1',
                name: 'biaodan1',
                subNav: []
              }
            ]
          }
        ]
      },
      {
        id: 'api',
        data: [
          {
            id: 'api1',
            name: 'api1',
            subNav: [
              {
                id: 'api11',
                name: 'api11',
                subNav: []
              },
              {
                id: 'api12',
                name: 'api12',
                subNav: []
              }
            ]
          },
          {
            id: 'api2',
            name: 'api2',
            subNav: [
              {
                id: 'api21',
                name: 'api21',
                subNav: []
              }
            ]
          }
        ]
      },
      {
        id: 'rule',
        data: [
          {
            id: 'rule1',
            name: 'rule1',
            subNav: [
              {
                id: 'rule11',
                name: 'rule11',
                subNav: []
              },
              {
                id: 'rule12',
                name: 'rule12',
                subNav: []
              }
            ]
          },
          {
            id: 'rule2',
            name: 'rule2',
            subNav: [
              {
                id: 'rule21',
                name: 'rule21',
                subNav: []
              }
            ]
          }
        ]
      },
      {
        id: 'plugin',
        data: [
          {
            id: 'plugin1',
            name: 'plugin1',
            subNav: [
              {
                id: 'plugin11',
                name: 'plugin11',
                subNav: []
              },
              {
                id: 'plugin12',
                name: 'plugin12',
                subNav: []
              }
            ]
          },
          {
            id: 'plugin2',
            name: 'plugin2',
            subNav: [
              {
                id: 'plugin21',
                name: 'plugin21',
                subNav: []
              }
            ]
          }
        ]
      }
    ];
    let hero = [
      {
        name: 'aaa',
        id: 1111
      }
    ];
    return {categoryNav, hero};
  }
}
