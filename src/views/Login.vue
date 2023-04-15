<script setup>
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import UserRouts from "../apiRoutes/usuario"
const router = useRouter()
const auth = getAuth()
if (sessionStorage.getItem("user")) {
  signOut(auth)
    .then(() => {
      sessionStorage.removeItem("user");
      location.reload();
    })
    .catch((error) => {
      console.log(error)
    })
}

function loginWithGoogle() {
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt: 'select_account'
  })
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user
      sessionStorage.setItem("user", JSON.stringify(user));
      UserRouts.store(user.uid)
      router.push('/meus-rastreios')
    })
    .catch((error) => {
      const errorCode = error.code
      console.log(error)
    })
}
</script>

<template>
  <main>
    <div class="section">
      <div id="app">
        <div class="section">
          <form action="">
            <button type="button" @click="loginWithGoogle()" class=" btn btn-dark d-flex align-items-center"><i class='bx bxl-google me-1'></i>Entrar com Google</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
