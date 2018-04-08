import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';

@Component({
  selector: 'page-favs',
  templateUrl: 'favs.html'
})

export class FavsPage {
	tasks:Array<any> = [];
	
	constructor(public navCtrl: NavController){
		this.tasks = [
			{title:'Myakka Pier', status: 'open'},
			{title:'Sanibel Causeway', status: 'open'},
			{title:'Matalcha Pier', status: 'open'},
			{title:'Charlotte Harbor', status: 'open'}
		];
	}
	addItem() {
		let theNewTask: string = prompt("New Task");
		if (theNewTask !== '') {
	this.tasks.push({ title: theNewTask, status: 'open' });
	}
	}
	
	markAsDone(slidingItem: ItemSliding, task: any) {
		task.status = "done";
	}
	
	removeTask(slidingItem: ItemSliding,task: any) {
		task.status = "removed";
		let index = this.tasks.indexOf(task);
		if (index > -1) {
			this.tasks.splice(index, 1);
		}
	}	
}