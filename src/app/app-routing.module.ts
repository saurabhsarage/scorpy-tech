import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { ThirdComponent } from "./third/third.component";
import { FourthComponent } from "./fourth/fourth.component";
import { LibraryComponent } from "./library/library.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
	{
		path:'welcome',
		component:WelcomeComponent,
		children : [
			{
				path:'first',
				component:FirstComponent
			},
			{
				path:'second',
				component: SecondComponent
			},
			{
				path:'third',
				component: ThirdComponent
			},
			{
				path:'fourth',
				component:FourthComponent
			},
		]
	},
	{
		path:'library',
		component: LibraryComponent
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
