import { observable, action } from "mobx";


class PaginatorStore{
	@observable menuId = 0;


	@action changeStore(value:number) {
		this.menuId = 124
	}
}

const store = new PaginatorStore();

export default store;

