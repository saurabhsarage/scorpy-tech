import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from "@angular/common";
@Component({
	selector: 'app-first',
	templateUrl: './first.component.html',
	styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

	constructor(private location : Location) { }
	ngOnInit(): void {
	}
	hidediv:boolean = false;
	@Output() parentComponent:EventEmitter<any> = new EventEmitter();
	back() : void{
		this.location.back();
		
		this.parentComponent.emit(this.hidediv);
	}

}
