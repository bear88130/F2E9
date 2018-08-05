import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  passiveSkill = [
    {
      'name': '基本技能',
      'point': 0,
      'preSkill': ['基本HTML', '基本JavaScript', '基本CSS'],
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'category',
      'content': '',
      'category': 'Basic',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': '基本工具',
      'point': 0,
      'preSkill': ['GIT 版本控制', '文字編輯器', '基本CMD'],
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'build',
      'content': '',
      'category': 'Basic',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': 'CSS框架',
      'point': 0,
      'preSkill': ['BootStrap*', 'UIKit', 'Foundation', 'Semantic UI'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'flip_to_front',
      'content': '',
      'category': 'CSS',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': 'CSS預處理器',
      'point': 0,
      'preSkill': ['Sass*', 'Less', 'Stylus', 'PostCSS'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'view_quilt',
      'content': '',
      'category': 'CSS',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': 'CSS架構',
      'point': 0,
      'preSkill': ['OOCSS', 'SMACSS', 'BEM'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'developer_board',
      'content': '',
      'category': 'CSS',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': 'RWD',
      'point': 0,
      'preSkill': ['初階RWD'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'devices',
      'content': '',
      'category': 'CSS',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': 'CSS版型',
      'point': 0,
      'preSkill': ['Grid', 'Flex'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'widgets',
      'content': '',
      'category': 'CSS',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': 'CSS動畫',
      'point': 0,
      'preSkill': ['初階CSS動畫'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '3d_rotation',
      'content': '',
      'category': 'CSS',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': '基本DOM',
      'point': 0,
      'preSkill': ['JQuery'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'hdr_strong',
      'content': '',
      'category': 'JavaScript',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': 'JS圖形繪製',
      'point': 0,
      'preSkill': ['SVG', 'Canvas', 'D3Js', 'ChartJs'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'gradient',
      'content': '',
      'category': 'JavaScript',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': 'JS更新語法',
      'point': 0,
      'preSkill': ['ES6'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'format_quote',
      'content': '',
      'category': 'JavaScript',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': 'JS更新語法',
      'point': 0,
      'preSkill': ['ES6'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'format_quote',
      'content': '',
      'category': 'JavaScript',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': 'JS框架',
      'point': 0,
      'preSkill': ['Vue', 'React', 'Angular'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'developer_mode',
      'content': '',
      'category': 'JavaScript',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': 'JS預處理器',
      'point': 0,
      'preSkill': ['TypeScript', 'Babel', 'CoffeeScript'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'nfc',
      'content': '',
      'category': 'JavaScript',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': '套件管理',
      'point': 0,
      'preSkill': ['NPM', 'YARN', 'Bower'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'device_hub',
      'content': '',
      'category': 'Managers',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': '工作流程管理',
      'point': 0,
      'preSkill': ['npm script', 'gulp', 'grunt'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'import_contacts',
      'content': '',
      'category': 'Managers',
      'relation': '',
      'nowPoint': 0
    }
    ,
    {
      'name': '打包工具',
      'point': 0,
      'preSkill': ['Webpack', 'Parcel'],
      'noChoice': 1,
      'canChoice': 0,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': 'table_chart',
      'content': '',
      'category': 'Managers',
      'relation': '',
      'nowPoint': 0
    }
  ];

  skill = [
    {
      'name': '基礎HTML',
      'point': 1,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '了解語法結構、知道html5結構、知道10個html元素(a、h1、span、img)',
      'category': 'Basic',
      'relation': '基本技能',
      'nowPoint': 0
    }
    ,
    {
      'name': '基本JavaScript',
      'point': 1,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '了解語法結構、知道DOM(抓取元件、修改值)',
      'category': 'Basic',
      'relation': '基本技能',
      'nowPoint': 0
    }
    ,
    {
      'name': '基本CSS',
      'point': 1,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '知道display的不同(flex、grid、block)，會換色修改大小',
      'category': 'Basic',
      'relation': '基本技能',
      'nowPoint': 0
    },
    {
      'name': 'GIT 版本控制',
      'point': 1,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '了解儲存版本和版本回朔使用',
      'category': 'Basic',
      'relation': '基本工具',
      'nowPoint': 0
    }
    ,
    {
      'name': '文字編輯器',
      'point': 1,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得打開檔案儲存',
      'category': 'Basic',
      'relation': '基本工具',
      'nowPoint': 0
    }
    ,
    {
      'name': '基本CMD',
      'point': 1,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '了解 cd ..cd cls',
      'category': 'Basic',
      'relation': '基本工具',
      'nowPoint': 0
    },
    {
      'name': 'BootStrap*',
      'point': 1,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '了解 cd ..cd cls',
      'category': 'CSS',
      'relation': 'CSS框架',
      'nowPoint': 0
    },
    {
      'name': 'UIKit',
      'point': 1,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '了解 cd ..cd cls',
      'category': 'CSS',
      'relation': 'CSS框架',
      'nowPoint': 0
    }
    , {
      'name': 'Foundation',
      'point': 1,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '了解 cd ..cd cls',
      'category': 'CSS',
      'relation': 'CSS框架',
      'nowPoint': 0
    }
    , {
      'name': 'Semantic UI',
      'point': 1,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '了解 cd ..cd cls',
      'category': 'CSS',
      'relation': 'CSS框架',
      'nowPoint': 0
    }
  ];
  nowShowSkill = '基本技能';
  showSkillArray = this.skill;
  basicArray = this.passiveSkill.filter((x) => x.category === 'Basic');
  cssArray = this.passiveSkill.filter((x) => x.category === 'CSS');
  javascriptArray = this.passiveSkill.filter((x) => x.category === 'JavaScript');
  managersArray = this.passiveSkill.filter((x) => x.category === 'Managers');
  nowSvgName: string;
  rankLevel: string;
  IsGroup = false;
  advancedSkill = true;
  totalPoint = 0;

  ngOnInit() {
    this.rankLevel = '初階新手';
    this.nowShowSkill = '基本技能';
    this.nowSvgName = 'category';
    this.IsShowItem('基本技能');
  }

  showSkill(skillName: HTMLDivElement, svgName: string) {
    this.nowShowSkill = skillName.title;
    this.nowSvgName = svgName;
    this.IsShowItem(skillName.title);
  }

  changeSkill(skillElement: HTMLAnchorElement, passiveSkillName: string) {
    // 顯示更換 skill 狀態 1 / 0
    let SkillArray = this.skill.filter((x) => x.name === skillElement.innerHTML.trim());
    let IsAdd = (SkillArray[0].nowPoint === 0) ? true : false;
    this.changeSkillState(SkillArray[0], IsAdd);

    let passiveSkillArray = this.passiveSkill.filter((x) => x.name === passiveSkillName);
    this.changePassiveSkillState(SkillArray[0], passiveSkillArray[0], IsAdd);
    this.countTotalPoint();
    this.unLockAdvanced();
  }

  // -----資料共用方法-----
  checkChoice(skill) {
    let nowChoice = ' ';
    if (skill.noChoice === 1) {
      nowChoice = 'noChoice';
      return nowChoice;
    } else if (skill.canChoice === 1) {
      nowChoice = 'canChoice';
      return nowChoice;
    } else if (skill.edChoice === 1) {
      nowChoice = 'edChoice';
      return nowChoice;
    } else if (skill.fullChoice === 1) {
      nowChoice = 'fullChoice';
      return nowChoice;
    } else {
      nowChoice = 'error';
      return nowChoice;
    }
  }

  changeSkillState(data, IsAdd) {
    let moveValue = (IsAdd) ? 1 : -1;
    const stateChoice = ['noChoice', 'canChoice', 'edChoice', 'fullChoice'];
    let nowChoice = '';
    let changeChoice = '';
    nowChoice = this.checkChoice(data);
    changeChoice = stateChoice[stateChoice.indexOf(nowChoice) + moveValue];
    data.noChoice = data.canChoice = data.edChoice = data.fullChoice = 0;
    data[changeChoice] = 1;
    data.nowPoint += moveValue;
  }

  changePassiveSkillState(skillData, passiveSkillName, IsAdd) {
    let stateChoice = ['noChoice', 'canChoice', 'edChoice', 'fullChoice'];
    let nowChoice = '';
    let changeChoice = '';
    if (IsAdd) {
      nowChoice = this.checkChoice(passiveSkillName);
      if (passiveSkillName.nowPoint === 0 || passiveSkillName.nowPoint < passiveSkillName.preSkill.length) {
        changeChoice = stateChoice[stateChoice.indexOf(nowChoice) + 1];
        passiveSkillName.noChoice = passiveSkillName.canChoice = passiveSkillName.edChoice = passiveSkillName.fullChoice = 0;
        passiveSkillName[changeChoice] = 1;
        passiveSkillName.nowPoint += 1;
        alert(passiveSkillName.noChoice + passiveSkillName.canChoice + passiveSkillName.edChoice + passiveSkillName.fullChoice);
      } else if (passiveSkillName.nowPoint === passiveSkillName.preSkill.length) {
        passiveSkillName.nowPoint = passiveSkillName.nowPoint;
      }
    } else {
      nowChoice = this.checkChoice(passiveSkillName);
      if (passiveSkillName.nowPoint > 0 && passiveSkillName.nowPoint <= passiveSkillName.preSkill.length) {
        passiveSkillName.nowPoint -= 1;
        changeChoice = stateChoice[stateChoice.indexOf(nowChoice) - 1];
        passiveSkillName.noChoice = passiveSkillName.canChoice = passiveSkillName.edChoice = passiveSkillName.fullChoice = 0;
        passiveSkillName[changeChoice] = 1;
      } else if (passiveSkillName.nowPoint === 0) {

      }
    }
  }

  countTotalPoint() {
    this.totalPoint = 0;
    let SkillArray = this.skill.filter((x) => x.edChoice === 1);
    SkillArray.forEach((x) => this.totalPoint += x.point);
  }

  unLockAdvanced() {
    this.advancedSkill = (this.totalPoint > 3) ? false : true;
    let passiveSkillArray = this.passiveSkill.filter((x) => x.name !== '基本工具');
    if (this.advancedSkill) {
      passiveSkillArray.forEach((element) => {
        element.noChoice = 1;
        element.canChoice = 0;
        element.edChoice = 0;
        element.fullChoice = 0;
      });
    } else {
      passiveSkillArray.forEach((element) => {
        element.noChoice = 0;
        element.canChoice = 1;
        element.edChoice = 0;
        element.fullChoice = 0;
      });
    }

  }

  // -----顯示共用方法-----
  IsShowItem(relation) {
    let boolean = false;
    boolean = (relation === this.nowShowSkill) ? false : true;
    return boolean;
  }

  upgradeEffect() {
    this.IsGroup = true;
    setTimeout(() => {
      this.IsGroup = false;
    }, 700);
  }

}
