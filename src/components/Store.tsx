import { observable, action } from "mobx";


export class PaginatorStore{
	@observable menuId = 0;

	
	@action changeStore(value:number) {
		this.menuId = value
	}
}

interface IStore {
  [key: string]: any;
}

export const store: IStore = {
  PaginatorStore: new PaginatorStore(),
};
