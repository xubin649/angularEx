import {Component, OnInit} from 'angular2/core';
import {TestComponent} from "./test.component";

@Component({
    selector: 'my-comp',
    template: `
        <h2>My component</h2>
        Hi, I'm <span [style.color]="inputElement.value === 'yes' ? 'red' : ''">{{name}}</span>
        <span [class.is-good]="inputElement.value === 'yes'">Is it good ? </span>
        
        <br><br>
        <button [disabled]="inputElement.value !== 'yes'">Only enabled if yes was entered</button>
        <input type="text" #inputElement (keyup)="0">
        <test></test>
        `
    ,
    styleUrls:['src/css/mycomponent.css'],
    directives: [TestComponent]

})

export class MyComponent implements OnInit{
    name: string;
    
    ngOnInit():any {
        this.name = "BX";
    }
}