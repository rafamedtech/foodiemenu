import * as vt from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(vt.default);
  return {
    provide: {
      toast: vt.useToast(),
    },
  };
});
