import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model(params){
        let temp=Number(params.author_id);
        console.log(typeof temp);
        return RSVP.hash({
            authorrecord: this.store.findRecord('author',temp),
            bookrecord: this.store.query('book',{filter:{'authorid':temp}})
        });
        
    }

});
