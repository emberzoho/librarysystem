import Service from '@ember/service';

export default Ember.Service.extend({
    count:1,
    bookidConstant: function(){
        this.set('count',this.count+1);
        return this.count;
    },
});