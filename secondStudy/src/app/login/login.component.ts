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
  private message: string = "";
  styleArray = {'wrong_id':false, 'wrong_pwd':false};

  constructor() { }

  ngOnInit(): void {
  }

  tryToLogin() : void{
    if(this.id == 'admin' && this.pwd == '1234'){
      alert('로그인합니다!');
      this.visible1 = true;
      this.sendMyEvent.emit(this.visible1); // app컴포넌트에 전달
    } else if(this.id != 'admin'){
      this.setMessage = 'wrong id';
      this.styleArray.wrong_id = true;
      this.styleArray.wrong_pwd = false;
    } else if(this.pwd != '1234'){
      this.setMessage = 'wrong pwd';
      this.styleArray.wrong_id = false;
      this.styleArray.wrong_pwd = true;
    }
  }

  set setMessage(arg: string){  // 대입
    this.message = arg;
  }

  get getMessage() : any {  // 가져옴
    return this.message;
  }

  
  

}
