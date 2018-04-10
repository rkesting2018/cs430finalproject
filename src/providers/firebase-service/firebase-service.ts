import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class FirebaseService {

  constructor(public afd: AngularFireDatabase) {}
	
	getSpotItems(){
		return this.afd.list('/spotItems/');
	}
	
	addItem(){
		this.afd.list('/spotItems/').push(name);
	}
	
	removeItem(id){
		this.afd.list('/spotItems/').remove(id);
	}

}
