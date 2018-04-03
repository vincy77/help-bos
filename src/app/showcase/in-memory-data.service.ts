import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let categoryData = [
      {
        id: 'button',
        name: 'button',
        desc: '为 <input>、<textarea>、<select> 添加 form-control 类即可得到统一外观的表单控件。',
        list: [
          {
            id: 'button1',
            name: 'button1',
            templateType: 'type1',
            desc: '普通按钮',
            html: '<button class="btn btn-info">button</button>',
            css: '',
            core: '<button class="btn btn-info">button</button>'
          },
          {
            id: 'button2',
            name: 'button2',
            templateType: 'type1',
            desc: '成功按钮',
            html: '<button class="btn btn-success">button</button>',
            css: '',
            core: '<button class="btn btn-success">button</button>'
          },
          {
            id: 'button3',
            name: 'button3',
            templateType: 'type1',
            desc: '错误按钮',
            html: '<button class="btn btn-danger">button</button>',
            css: '',
            core: '<button class="btn btn-danger">button</button>'
          }
        ]
      },
      {
        id: 'table1',
        name: 'table1',
        desc: '',
        list: [
          {
            id: 'table1',
            name: 'table1',
            templateType: 'type1'
          },
          {
            id: 'table2',
            name: 'table2',
            templateType: 'type2'
          },
          {
            id: 'table3',
            name: 'table3',
            templateType: 'type2'
          }
        ]
      },
      {
        id: 'biaodan1',
        name: '表单',
        desc: '',
        list: [
          {
            id: 'table1',
            name: 'table1',
            templateType: 'type1',
            desc: '默认输入框',
            html: '<input type="text" />',
            css: '',
            core: '<input type="text" />'
          },
          {
            id: 'table2',
            name: 'table2',
            templateType: 'type1',
            desc: '默认checkbox',
            html: '<label><input type="checkbox" checked/>选中 <input type="checkbox" />未选中</label>',
            css: '',
            core: '<label><input type="checkbox" checked/>选中 <input type="checkbox" />未选中</label>'
          },
          {
            id: 'table3',
            name: 'table3',
            templateType: 'type1',
            desc: '默认radio',
            html: '<label><input type="radio" name="radio1" checked/>选中<input type="radio" name="radio1" />未选中</label>',
            css: '',
            core: '<label><input type="radio" name="radio1" checked/>选中<input type="radio" name="radio1" />未选中</label>'
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
    return {categoryData,hero};
  }
}
