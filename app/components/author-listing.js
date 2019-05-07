import Component from '@ember/component';
import { task } from 'ember-concurrency';

export default Component.extend({
    /*()
    init(){
        this._super(...arguments);
        this.bookrecords(param);
    }
    */
   actions :{ 
       viewbooks(arg){
     let authbooks = this.actionauth;
     authbooks(arg).then((results)=>{
        this.set('booklist', results);
     });
   }
   }
});
