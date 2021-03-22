import Vue from 'vue'
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate'
import './rules'

localize('vi');
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
