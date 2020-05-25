import Toasted from 'vue-toasted';
  vue.use(Toasted, Options)

function ErrorToast(){
  this.$toasted.show('Vi kan tyvärr inte hitta din plats')

}