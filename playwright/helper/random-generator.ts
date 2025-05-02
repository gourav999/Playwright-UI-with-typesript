import chance from 'chance';
import currency from 'currency.js';

export class randomGenerator{
    private static chance=new chance();

    static get amount() {
        return this.chance.floating({ min:2000, max:2999,fixed: 2 });
    }   
    static get currencyAmount() {
        return currency(this.amount).format();
    }   
    static get first() {
        return this.chance.first({nationality: 'en'});
    }

}
