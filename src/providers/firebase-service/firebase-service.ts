import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class FirebaseService {

  constructor(public afd: AngularFireDatabase) {}
	
	getItems(){
		return this.afd.list('/Items/');
	}
	
	addItem(){
		this.afd.list('/Items/').push(name);
	}
	
	removeItem(id){
		this.afd.list('/Items/').remove(id);
	}

}
