import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rankLevel: string;
  IsGroup = false;

  ngOnInit() {
    this.rankLevel = '初階新手';
  }
  showSkill(skillName: HTMLDivElement) {
    alert(skillName.title);
  }
  showGroupUp() {
    this.IsGroup = true;
    setTimeout(() => {
      this.IsGroup = false;
    }, 700);
  }
}
