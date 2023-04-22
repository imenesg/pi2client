<script setup>
import { ref, onMounted } from 'vue'
import RastrioRouts from '../apiRoutes/rastreio'
import { useRouter, useRoute } from 'vue-router'
import Loading from '../components/loading.vue'
const userouter = useRouter()
const router = useRoute()

const { codigo } = router.params
const rastreio = ref(null)
const isLoading = ref(false)
async function init() {
  isLoading.value = true
  rastreio.value = await (await RastrioRouts.buscaRastreio(codigo)).data
  isLoading.value = false
}
onMounted(async () => {
  await init()
})


function foramtaData(data){
  const arrayData = data.slice(0, 10).split('-')
  return `${arrayData[2]}/${arrayData[1]}/${arrayData[0]}`
}
</script>

<template>
  <Loading v-if="isLoading"></Loading>
 <main>
    <div class="section"> 
      <h4 class="mt-3 text-center">Rastreio {{codigo}}</h4>
      <div class="table-responsive">
        <table class="table table-bordered table-striped table-hover">
          <thead class="">
            <th>Data</th>
            <th>Local</th>
            <th>Indo para</th>
            <th>status</th>
          </thead>
          <tbody>
            <tr v-for="ponto in rastreio">
              <td>{{foramtaData(ponto.dtHrCriado)}}</td>
              <td >{{ ponto.unidade.endereco.cidade }}-{{ ponto.unidade.endereco.uf }}</td>
              <td v-if="ponto.unidadeDestino">{{ ponto.unidadeDestino.endereco.cidade }}-{{ ponto.unidadeDestino.endereco.uf }}</td>
              <td v-else></td>
              <td>{{ ponto.descricao}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex mt-5">
        <button class="btn mx-auto btn-info text-white" @click="userouter.push('/meus-rastreios')">Meus rastreios</button>
      </div>
    </div>
  </main>
</template>
