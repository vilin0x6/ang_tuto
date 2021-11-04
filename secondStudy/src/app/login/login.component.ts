import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() visible1 : boolean = true; // 받는 역할
  @Output() sendMyEvent : EventEmitter<any> = new EventEmitter(); // 보내는 역할
  id : string = "";
  pwd : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  tryToLogin() : void{
    if(this.id == 'admin' && this.pwd == '1234'){
      this.visible1 = true;
    } else {
      this.visible1 = false;
    }
    console.log(this.id, this.pwd, this.visible1);
    this.sendMyEvent.emit(this.visible1); // 보내기
  }

}
