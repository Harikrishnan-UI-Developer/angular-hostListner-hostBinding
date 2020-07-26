import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  value: string;
  users = [{name:"hari", gender:"m"}, {name:"krishnan", gender:"m"}, {name:"suganya", gender:"f"}, {name:"mikul", gender:"m"}, {name:"sai", gender:"m"}]

addUser(_data){
  this.users = [...this.users,{name: _data, gender:"m"}]
  console.log("this.users", this.users)
}

}
