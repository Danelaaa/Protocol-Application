import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.css']
})
export class ProtocolsComponent implements OnInit{
    cardsArray = [
      {
        id:1,
        header:'გადამხდელის შესახებ საჯარო ინფორმაცია',
        date:'განახლება: 02-თებ-2023',
      },
      {
        id:2,
        header:'duty-free სახემძღვანელო',
        date:'განახლება: 11-აგვ-2016',
      },
      {
        id:3,
        header:'საფოსტო გზავნილები',
        date:'განახლება: 22-ივნ-2018',
      },
      {
        id:4,
        header:'საგადასახადო დოკუმენტი',
        date:'განახლება: 02-თებ-2023',
      },
      {
        id:5,
        header:'Duty-free',
        date:'განახლება: 09-დეკ-2021',
      },
      {
        id:6,
        header:'დაქირავებული პირთა რეესტრი',
        date:'განახლება: 22-თებ-2022',
      },
      
      
  
    ]
  
  constructor(){}
  ngOnInit(): void {

  }
  searchText:string ='';
  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    // console.log(this.searchText);
  }
  visible = true;
  dismissible = true;
  alert(){
    alert("sagol shechema");
  }

  }

