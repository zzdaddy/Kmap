import 'babel-polyfill';
import Vue from 'vue';
// import WhdxMiddleUI from '../../lib/index.js';
// import '../../lib/theme/paper/app.css';
// import 'lib-flexible';
import router from './route/index.js';
import App from './app.vue';
new Vue({
    el: '#app',
    components: {
        App
    },
    router,
    template: `<div>                           
                    <App></App>
                </div>`
});


