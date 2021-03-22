import Vue from 'vue'
import VueI18n from 'vue-i18n'
import vi from "@/common/langs/vi";
import en from "@/common/langs/en";

Vue.use(VueI18n);

const messages = {
    vi,
    en
}
export default new VueI18n({
    locale: 'vi',
    messages,
})
