<script setup>
import { ref, onMounted } from 'vue'
import RastrioRouts from '../apiRoutes/rastreio'
import { useRouter } from 'vue-router'
import Loading from '../components/loading.vue'
import { useUserStore } from '../../stores/userStore'
const store = useUserStore()
const router = useRouter()
const user = ref(null)
const rastreios = ref(null)
const isLoading = ref(false)
user.value = store.user
async function init() {
   isLoading.value = true
  rastreios.value = await (await RastrioRouts.show(user.value.uid)).data
   isLoading.value = false
}
onMounted(async () => {
  await init()
})
</script>

<template> 
  <Loading v-if="isLoading"></Loading>
  <main>
    <div class="section">
      <h4 class="mt-3 text-center">Rastreios de {{ user.displayName }}</h4>
      <div class="table-responsive">
        <table class="table table-bordered table-striped table-hover">
          <thead class="">
            <th>Editar</th>
            <th>Apelido</th>
            <th>Codigo</th>
            <th>Rastrear</th>
          </thead>
          <tbody>
            <tr v-for="rastreio in rastreios">
              <td><button class=" p-0 fs-3 btn text-success" @click="router.push(`/rastreio/${rastreio.codigo_rastreio}`)"><i class='bx bxs-pencil' ></i></button></td>
              <td>{{rastreio.rastreio_apelido}}</td>
              <td>{{rastreio.codigo_rastreio}}</td>
              <td><button  class="p-0 fs-3 btn text-success" @click="router.push(`/rastrear-codigo/${rastreio.codigo_rastreio}`)"><i class='bx bxs-package' ></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex">
        <button class="btn mx-auto btn-success d-flex align-items-center" @click="router.push('/rastreio/novo')"><i class='bx bx-plus me-1' ></i> Adicionar Rastreio</button>
      </div>
      
    </div>
  </main>
</template>

<style scoped></style>
