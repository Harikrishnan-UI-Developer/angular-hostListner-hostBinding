import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  value: string;
  users = [{name:"hari", gender:"m"}, {name:"krishnan", gender:"m"}, {name:"suganya", gender:"f"}, {name:"mikul", gender:"m"}, {name:"sai", gender:"m"}]

// date$ - it means to show this 'date$' property is observable. not a mandatory one.
date$ = interval(1000).pipe( map(x => new Date()),take(10));

jsonData = this.http.get('https://jsonplaceholder.typicode.com/todos/1')

constructor(public http: HttpClient){

}
addUser(_data){
  this.users = [...this.users,{name: _data, gender:"m"}]
  console.log("this.users", this.users)
}

}
