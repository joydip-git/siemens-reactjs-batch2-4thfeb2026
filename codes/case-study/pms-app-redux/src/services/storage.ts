import { BehaviorSubject } from "rxjs";

export class Storage {
    private store = new BehaviorSubject<number>(0)
    storeObservable = this.store.asObservable()

    publish(value: number) {
        this.store.next(value)
    }
    // get() {
    //     return this.store.value
    // }

    private static instance: Storage | null = null
    private constructor() { }
    static create() {
        if (this.instance === null)
            this.instance = new Storage()

        return this.instance
    }
}

const StoreInstance = Storage.create()
export default StoreInstance