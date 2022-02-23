
const monApp = Vue.createApp({
    data() {
        return {
            allFilms: [],
            myFilm: '',
        };
    },

    methods: {
        show(){
            this.allFilms.push(this.myFilm);
            this.myFilm = '';
        }
    }

});

monApp.mount('#app');  