import { observable } from "mobx";


class PaginatorStore{
	@observable menuId = [0]
}

const store = new PaginatorStore();

export default store;

