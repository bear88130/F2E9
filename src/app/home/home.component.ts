import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { async } from '../../../node_modules/@types/q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
      'preSkill': ['GIT版本控制', '文字編輯器', '基本CMD'],
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
      'preSkill': ['BootStrap*', 'UIKit', 'Foundation', 'SemanticUI'],
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
    },
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
      'preSkill': ['npmScript', 'gulp', 'grunt'],
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
      'name': '基本HTML',
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
      'point': 3,
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
      'point': 2,
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
      'name': 'GIT版本控制',
      'point': 3,
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
      'point': 2,
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
      'point': 2,
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
      'point': 7,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得整合並寫出想要的頁面',
      'category': 'CSS',
      'relation': 'CSS框架',
      'nowPoint': 0
    },
    {
      'name': 'UIKit',
      'point': 7,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得整合並寫出想要的頁面',
      'category': 'CSS',
      'relation': 'CSS框架',
      'nowPoint': 0
    }
    , {
      'name': 'Foundation',
      'point': 7,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得整合並寫出想要的頁面',
      'category': 'CSS',
      'relation': 'CSS框架',
      'nowPoint': 0
    }
    , {
      'name': 'SemanticUI',
      'point': 7,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得整合並寫出想要的頁面',
      'category': 'CSS',
      'relation': 'CSS框架',
      'nowPoint': 0
    }, {
      'name': 'Sass*',
      'point': 6,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得編譯出 css',
      'category': 'CSS',
      'relation': 'CSS預處理器',
      'nowPoint': 0
    }, {
      'name': 'Less',
      'point': 6,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得編譯出 css',
      'category': 'CSS',
      'relation': 'CSS預處理器',
      'nowPoint': 0
    }, {
      'name': 'Stylus',
      'point': 6,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得編譯出 css',
      'category': 'CSS',
      'relation': 'CSS預處理器',
      'nowPoint': 0
    }, {
      'name': 'PostCSS*',
      'point': 5,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得解決 autoprefixer 問題',
      'category': 'CSS',
      'relation': 'CSS預處理器',
      'nowPoint': 0
    }, {
      'name': 'OOCSS',
      'point': 4,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得結構和樣式分離，懂得容器和內容導向',
      'category': 'CSS',
      'relation': 'CSS架構',
      'nowPoint': 0
    }, {
      'name': 'SMACSS',
      'point': 4,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得使 CSS 更彈性',
      'category': 'CSS',
      'relation': 'CSS架構',
      'nowPoint': 0
    }, {
      'name': 'BEM',
      'point': 4,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得命名規範和CSS關係',
      'category': 'CSS',
      'relation': 'CSS架構',
      'nowPoint': 0
    }, {
      'name': '初階RWD',
      'point': 5,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得根據不同寬度設計 CSS',
      'category': 'CSS',
      'relation': 'RWD',
      'nowPoint': 0
    }, {
      'name': 'Grid',
      'point': 3,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '使用過 Grid 排版過',
      'category': 'CSS',
      'relation': 'CSS版型',
      'nowPoint': 0
    }, {
      'name': 'Flex',
      'point': 4,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '使用過 Flex 排版過',
      'category': 'CSS',
      'relation': 'CSS版型',
      'nowPoint': 0
    }, {
      'name': '初階CSS動畫',
      'point': 4,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得將物件做 旋轉、移動、縮放、時間控制',
      'category': 'CSS',
      'relation': 'CSS動畫',
      'nowPoint': 0
    }, {
      'name': 'JQuery',
      'point': 6,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '懂得JQuer的語法和版本差異',
      'category': 'JavaScript',
      'relation': '基本DOM',
      'nowPoint': 0
    }, {
      'name': 'SVG',
      'point': 3,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '曾畫出一個SVG圖片',
      'category': 'JavaScript',
      'relation': 'JS圖形繪製',
      'nowPoint': 0
    }, {
      'name': 'Canvas',
      'point': 6,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '曾用Canvas畫出 動畫',
      'category': 'JavaScript',
      'relation': 'JS圖形繪製',
      'nowPoint': 0
    }, {
      'name': 'D3Js',
      'point': 6,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '能畫出長條圖、圓餅圖、樞紐分析圖',
      'category': 'JavaScript',
      'relation': 'JS圖形繪製',
      'nowPoint': 0
    }, {
      'name': 'ChartJs',
      'point': 3,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '能畫出長條圖、圓餅圖',
      'category': 'JavaScript',
      'relation': 'JS圖形繪製',
      'nowPoint': 0
    }, {
      'name': 'ES6',
      'point': 4,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': ' 知道ES6更新項目 ',
      'category': 'JavaScript',
      'relation': 'JS更新語法',
      'nowPoint': 0
    }, {
      'name': 'Vue',
      'point': 6,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': ' 能利用 Vue 做出應用 ',
      'category': 'JavaScript',
      'relation': 'JS框架',
      'nowPoint': 0
    }, {
      'name': 'React',
      'point': 9,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': ' 能利用 React 做出應用 ',
      'category': 'JavaScript',
      'relation': 'JS框架',
      'nowPoint': 0
    }, {
      'name': 'Angular',
      'point': 8,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': ' 能利用 Angular 做出應用 ',
      'category': 'JavaScript',
      'relation': 'JS框架',
      'nowPoint': 0
    }, {
      'name': 'TypeScript',
      'point': 4,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': ' 知道 TypeScript 特性 ',
      'category': 'JavaScript',
      'relation': 'JS預處理器',
      'nowPoint': 0
    }, {
      'name': 'Babel',
      'point': 4,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': ' 轉譯成不同版本Js ',
      'category': 'JavaScript',
      'relation': 'JS預處理器',
      'nowPoint': 0
    }, {
      'name': 'CoffeeScript',
      'point': 4,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': ' 利用 CoffeeScript 寫 Code ',
      'category': 'JavaScript',
      'relation': 'JS預處理器',
      'nowPoint': 0
    }, {
      'name': 'NPM',
      'point': 4,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': ' 利用NPM安裝過東西 ',
      'category': 'Managers',
      'relation': '套件管理',
      'nowPoint': 0
    }, {
      'name': 'YARN',
      'point': 4,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': ' 利用YARN安裝過東西 ',
      'category': 'Managers',
      'relation': '套件管理',
      'nowPoint': 0
    }, {
      'name': 'Bower',
      'point': 3,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': ' 利用Bower安裝過東西 ',
      'category': 'Managers',
      'relation': '套件管理',
      'nowPoint': 0
    }, {
      'name': 'npmScript',
      'point': 5,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '有自訂自己的工作任務，並執行過',
      'category': 'Managers',
      'relation': '工作流程管理',
      'nowPoint': 0
    }, {
      'name': 'gulp',
      'point': 5,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '有自訂自己的工作任務，並執行過',
      'category': 'Managers',
      'relation': '工作流程管理',
      'nowPoint': 0
    }, {
      'name': 'grunt',
      'point': 4,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '有自訂自己的工作任務，並執行過',
      'category': 'Managers',
      'relation': '工作流程管理',
      'nowPoint': 0
    }, {
      'name': 'Webpack',
      'point': 6,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '有將需要檔案打包到資料夾的經驗',
      'category': 'Managers',
      'relation': '打包工具',
      'nowPoint': 0
    }, {
      'name': 'Parcel',
      'point': 4,
      'preSkill': '',
      'noChoice': 0,
      'canChoice': 1,
      'edChoice': 0,
      'fullChoice': 0,
      'svgName': '',
      'content': '有將需要檔案打包到資料夾的經驗',
      'category': 'Managers',
      'relation': '打包工具',
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
  rankImg: string;
  advancedSkill = true;
  totalPoint = 0;
  showId: Observable<string>;
  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.rankLevel = '你還可以賣雞排?確定要踏入嗎？勇士！';
    this.rankImg = './assets/img/img-ship-noob.png';
    this.nowShowSkill = '基本技能';
    this.nowSvgName = 'category';
    this.IsShowItem('基本技能');
    this.showId = this.route
      .queryParamMap
      .pipe(map(params => params.get('id') || ''));
    this.firstLoad();
  }

  firstLoad() {
    let IsArray = false;
    let IsLoad = false;
    const IsAdd = true;
    let InitString = '';
    let InitArray = [];

    this.showId.subscribe((value) => {
      InitString = value;
    });

    IsLoad = (InitString === '') ? false : true ;
    IsArray = (InitString.indexOf(',') === -1) ? false : true ;

    if (IsArray) {
      InitArray = InitString.split(',');
    } else {
      InitArray.push(InitString) ;
    }

    if (IsLoad) {
      InitArray.forEach((skillName) => {
        const SkillArray = this.skill.filter((x) => x.name === skillName);
        this.changeSkillState(SkillArray[0], IsAdd);

        const passiveSkillArray = this.passiveSkill.filter((x) => x.name === SkillArray[0].relation);
        this.changePassiveSkillState(passiveSkillArray[0], IsAdd);
        this.countTotalPoint();
        this.unLockAdvanced();
        this.changeRankName();
      });
    } else {

    }

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
    this.changePassiveSkillState(passiveSkillArray[0], IsAdd);
    this.countTotalPoint();
    this.unLockAdvanced();
    this.changeRankName();
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

  changePassiveSkillState(passiveSkillName, IsAdd) {
    let stateChoice = ['noChoice', 'canChoice', 'edChoice', 'fullChoice'];
    let nowChoice = '';
    let changeChoice = '';
    if (IsAdd) {
      nowChoice = this.checkChoice(passiveSkillName);
      if (passiveSkillName.nowPoint === 0) {
        if (passiveSkillName.nowPoint === 0 && passiveSkillName.preSkill.length === 1) {
          passiveSkillName.nowPoint += 1;
          passiveSkillName.noChoice = passiveSkillName.canChoice = passiveSkillName.edChoice = passiveSkillName.fullChoice = 0;
          passiveSkillName['fullChoice'] = 1;
        } else {
          // 顯示邏輯
          changeChoice = stateChoice[stateChoice.indexOf(nowChoice) + 1];
          passiveSkillName.noChoice = passiveSkillName.canChoice = passiveSkillName.edChoice = passiveSkillName.fullChoice = 0;
          passiveSkillName[changeChoice] = 1;
          // 加分
          passiveSkillName.nowPoint += 1;
        }

      } else if (passiveSkillName.nowPoint > 0 && passiveSkillName.nowPoint < passiveSkillName.preSkill.length) {
        if (passiveSkillName.nowPoint === passiveSkillName.preSkill.length - 1) {
          // 顯示邏輯 1  2
          changeChoice = stateChoice[stateChoice.indexOf(nowChoice) + 1];
          passiveSkillName.noChoice = passiveSkillName.canChoice = passiveSkillName.edChoice = passiveSkillName.fullChoice = 0;
          passiveSkillName[changeChoice] = 1;
          // 加分
          passiveSkillName.nowPoint += 1;
        } else {
          passiveSkillName.nowPoint += 1;
        }
      } else if (passiveSkillName.nowPoint === passiveSkillName.preSkill.length) {
        passiveSkillName.nowPoint = passiveSkillName.nowPoint;
      }

    } else {
      nowChoice = this.checkChoice(passiveSkillName);
      if (passiveSkillName.nowPoint > 0 && passiveSkillName.nowPoint < passiveSkillName.preSkill.length) {
        if (passiveSkillName.nowPoint === 1) {
          // 顯示邏輯
          changeChoice = stateChoice[stateChoice.indexOf(nowChoice) - 1];
          passiveSkillName.noChoice = passiveSkillName.canChoice = passiveSkillName.edChoice = passiveSkillName.fullChoice = 0;
          passiveSkillName[changeChoice] = 1;
          // 負分
          passiveSkillName.nowPoint -= 1;
        } else {
          passiveSkillName.nowPoint -= 1;
        }

      } else if (passiveSkillName.nowPoint === passiveSkillName.preSkill.length) {
        if (passiveSkillName.nowPoint === 1 && passiveSkillName.preSkill.length === 1) {
          passiveSkillName.nowPoint -= 1;
          passiveSkillName.noChoice = passiveSkillName.canChoice = passiveSkillName.edChoice = passiveSkillName.fullChoice = 0;
          passiveSkillName['canChoice'] = 1;
        } else {
          // 顯示邏輯
          changeChoice = stateChoice[stateChoice.indexOf(nowChoice) - 1];
          passiveSkillName.noChoice = passiveSkillName.canChoice = passiveSkillName.edChoice = passiveSkillName.fullChoice = 0;
          passiveSkillName[changeChoice] = 1;
          // 負分
          passiveSkillName.nowPoint -= 1;
        }

      } else if (passiveSkillName.nowPoint === 0) {

      }
    }
  }

  changeRankName() {
    let rankName = '';
    let rankImgSrc = '';
    if (this.totalPoint > 189) {
      rankName = '外掛之手';
      rankImgSrc = './assets/img/img-ship-master.png';
    } else if (this.totalPoint > 100) {
      rankName = '高階神手';
      rankImgSrc = './assets/img/img-ship-master.png';
    } else if (this.totalPoint > 40) {
      rankName = '中階能手';
      rankImgSrc = './assets/img/img-ship-developer.png';
    } else if (this.totalPoint > 7) {
      rankName = '初階新手';
      rankImgSrc = './assets/img/img-ship-noob.png';
    } else if (this.totalPoint > 0) {
      rankName = '準備入坑';
      rankImgSrc = './assets/img/img-ship-noob.png';
    } else if (this.totalPoint === 0) {
      rankName = '決定賣雞排了嗎？';
      rankImgSrc = './assets/img/img-ship-noob.png';
    } else {
      rankName = '出問題了！';
      rankImgSrc = '';
    }
    this.rankLevel = rankName;
    this.rankImg = rankImgSrc;
  }

  countTotalPoint() {
    this.totalPoint = 0;
    let SkillArray = this.skill.filter((x) => x.edChoice === 1);
    SkillArray.forEach((x) => this.totalPoint += x.point);
  }

  unLockAdvanced() {
    const passAdvancedSkill = this.advancedSkill;
    this.advancedSkill = (this.totalPoint > 3) ? false : true;
    let passiveSkillArray = this.passiveSkill.filter((x) => x.name !== '基本工具' && x.name !== '基本技能');
    const IsChange = (passAdvancedSkill !== this.advancedSkill) ? true : false;
    if (IsChange) {
      passiveSkillArray.forEach((element) => {
        element.noChoice = 0;
        element.canChoice = 1;
        element.edChoice = 0;
        element.fullChoice = 0;
      });
    } else {
      // passiveSkillArray.forEach((element) => {
      //   element.noChoice = 1;
      //   element.canChoice = 0;
      //   element.edChoice = 0;
      //   element.fullChoice = 0;
      // });
    }

  }

  // -----顯示共用方法-----
  IsShowItem(relation) {
    let boolean = false;
    boolean = (relation === this.nowShowSkill) ? false : true;
    return boolean;
  }

  IsIng(PassiveName) {
    const IsGroup = true;
    return IsGroup;
  }

}
