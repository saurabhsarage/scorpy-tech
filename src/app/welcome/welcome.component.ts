import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		
	}
	loadComponent = false;
	hidediv:any = false;
	open() {
		this.loadComponent = !this.loadComponent;
		this.hidediv = !this.hidediv;
	}

}
