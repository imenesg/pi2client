<script setup>
import { RouterLink } from 'vue-router'
import {ref} from 'vue'
const user = ref(null)
user.value = JSON.parse(sessionStorage.getItem('user'))

</script>

<template>
    <nav class="navbar  navbar-dark bg-body-tertiary ">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" href="#">
                <img src="../assets/img/logo.png" alt="Bootstrap" width="75" height="75">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div v-if="user" class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">BuscaAI</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
            <router-link to="/meus-rastreios" class="nav-link" href="#">Meus Rastreios</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/rastreio/novo"  class="nav-link" href="#">Cadastrar Rastreio</router-link>
          </li>
          <hr>
          <li class="nav-item">
            <router-link to="/login"  class="nav-link text-danger" href="#"><i class='bx bxs-log-in' ></i> Sair</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>
.navbar, .offcanvas-body, .offcanvas-header{
    background-color: #404E4D;
    color: #fff;
}</style>
