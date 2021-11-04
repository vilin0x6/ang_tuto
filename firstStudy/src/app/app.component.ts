import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 컴포넌트의 고유 이름, 다른 컴포넌트에서 셀렉터를 이용해 해당 컴포넌트 파일 내용을 불러올 수 있음
  templateUrl: './app.component.html',  // 화면에 보여질 html 파일 경로
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  id : string = '';
  pwd : string = '';
  visible : boolean = true;
  visible1 : boolean = false;
  visible2 : boolean = false;

  tryToLogin() : void{
    console.log(this.id, this.pwd);
    if(this.id == 'admin' && this.pwd == '1234'){
      this.visible = false;
      this.visible1 = true;
    } else if(this.id == 'root' && this.pwd == '1234'){
      this.visible = false;
      this.visible2 = true;
    }
  }

}
