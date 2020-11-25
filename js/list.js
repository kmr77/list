(function(){
    'use strict';

    var vm = new Vue({
        el: "#app",
        data: {
            prefs: [
                { name : 'りんご'},
                { name : 'みかん'},
                { name : 'ばなな'},
                { name : 'いちご'},
                { name : 'ぶどう'}
            ]
        },
        methods: {
            shuffle: function(){
                this.prefs = _.shuffle(this.prefs);
            }
        }
    }); 

})();