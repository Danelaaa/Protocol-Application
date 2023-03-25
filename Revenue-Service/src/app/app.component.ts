import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tabs: string[] = ['პროტოკოლები','აპლიკაციები'];
  activatedTabIndex: number  = 0;

  constructor(){}
  ngOnInit(): void {

  }
  tabChange(tabIndex:number){
    debugger;
    this.activatedTabIndex = tabIndex;
  }

}
