<script setup>
import { ref, onMounted } from 'vue'
import RastrioRouts from '../apiRoutes/rastreio'
import { useRouter, useRoute } from 'vue-router'
import Loading from '../components/loading.vue'
import { useUserStore } from '../../stores/userStore'
const store = useUserStore()
const route = useRoute()
const { id } = route.params
const user = ref(null)
const isLoading = ref(false)
user.value = store.user

const rastreio = ref(null)
const router = useRouter()
const codigoRastreio = ref(null)
const apelidoRastreio = ref(null)
const savedRastreio  = ref(null)

async function newRastreio() {
   isLoading.value = true
  await RastrioRouts.store({
    uid: user.value.uid,
    codigoRastreio: codigoRastreio.value,
    apelidoRastreio : apelidoRastreio.value
  })
   isLoading.value = false
  router.push('/meus-rastreios')
}

async function deletRastreio() {
   isLoading.value = true
   await RastrioRouts.destroy({
    rastreioId: savedRastreio.value.id,
    uid: user.value.uid,
  })
   isLoading.value = false
  router.push('/meus-rastreios')
}

async function updateRastreio () {
   isLoading.value = true
  await RastrioRouts.update({
    rastreioId: savedRastreio.value.id,
    uid: user.value.uid,
    codigoRastreio: codigoRastreio.value,
    apelidoRastreio: apelidoRastreio.value
  })
   isLoading.value = false
  router.push('/meus-rastreios')
}

onMounted(async()=>{
  if(id != 'novo'){
    savedRastreio.value = await (await RastrioRouts.getSavedRastreio(user.value.uid, id)).data[0]
    codigoRastreio.value =  savedRastreio.value.codigo_rastreio
    apelidoRastreio.value = savedRastreio.value.rastreio_apelido
  }
})

</script>

<template>
<Loading v-if="isLoading"></Loading>
  <main>
    <div class="section">
      <form action="">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">*</span>
          <input
            type="text"
            class="form-control"
            placeholder="Apelido do pacote"
            aria-label="Apelido"
            aria-describedby="basic-addon1"
            v-model="apelidoRastreio"
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">*</span>
          <input
            type="text"
            class="form-control"
            placeholder="codigoRastreio"
            aria-label="codigoRastreio"
            aria-describedby="basic-addon2"
            v-model="codigoRastreio"
          />
        </div>

        <button v-if="id =='novo'" type="button" class="btn btn-success" @click="newRastreio">Cadastrar</button>
        <button v-if="id !=='novo'" type="button" class="btn btn-warning" @click="updateRastreio">Editar</button>
        <button v-if="id !=='novo'" type="button" class=" btn-danger btn mt-5" @click="deletRastreio">Deletar</button>
        
      </form>

      <div class="d-flex mt-5">
        <button class="btn mx-auto btn-info" @click="router.push('/meus-rastreios')">Meus rastreios</button>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
