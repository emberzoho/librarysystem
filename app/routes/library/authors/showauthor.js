import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        return this.store.findRecord('author',params.author_id);
    },
   
        findBook: function(arg){
            //let showbooks;
        //console.log(arg);
        return this.store.query('book',{filter: {authorid:arg}}).then((results)=>{
                console.log(results);
                //let showbooks=results;
                //console.log(showbooks);
                
                return results;
        });
   
}

});
