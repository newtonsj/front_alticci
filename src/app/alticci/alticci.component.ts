import { Component, OnInit } from '@angular/core';
import { AlticciService } from '../alticci.service';


@Component({
  selector: 'app-alticci',
  templateUrl: './alticci.component.html',
  styleUrls: ['./alticci.component.css']
})
export class AlticciComponent implements OnInit {

  resultado: number;

  constructor(private alticciService: AlticciService) { }

  ngOnInit(): void {
    this.callAlticci(2);
  }

  callAlticci(n : number){
    this.alticciService.callAlticci(n).subscribe(alticci => {
      this.resultado = alticci;
    }, err =>{
      console.log(err);
    });
  }
}
