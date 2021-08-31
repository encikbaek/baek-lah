<template>
    <div class="home" data-smooth-scroll-offset="77">
        <section class="height-50 imagebg text-center" data-overlay="1">
            <div class="background-image-holder">
                <img alt="background" src="../../assets/img/login.jpg" />
            </div>
            <div class="container pos-vertical-center">
                <div class="row">
                    <div class="col-md-7 col-lg-5">
                        <h2>Login to continue</h2>
                        <p class="lead">
                        Welcome back, sign in with your existing Baek account credentials
                        </p>
                        <form @submit.prevent="handleSubmit">
                            <div class="row">
                                <div v-if="error" class="col-md-12 error">{{ error }}</div>
                                <div class="col-md-12">
                                    <input type="username" placeholder="Email" v-model="email"/>
                                </div>
                                <div class="col-md-12">
                                    <input type="password" placeholder="Password" v-model="password"/>
                                </div>
                                <div class="col-md-12">
                                    <button class="btn btn--primary type--uppercase" type="submit" v-if="!isPending">Log in</button>
                                    <button class="btn btn--primary type--uppercase" type="submit" v-if="isPending" disabled>Loading</button>
                                </div>
                            </div>
                            <!--end of row-->
                        </form>
                        <!-- <span class="type--fine-print block">Dont have an account yet?
                            <a href="page-accounts-create-1.html">Create account</a>
                        </span>
                        <span class="type--fine-print block">Forgot your username or password?
                            <a href="page-accounts-recover.html">Recover account</a>
                        </span> -->
                    </div>
                </div>
                <!--end of row-->
            </div>
            <!--end of container-->
        </section>
    </div>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../../composables/useLogin'
import useRouter from 'vue-router'
import router from '../../router'

export default {
    setup() {
        const { error, login, isPending } = useLogin()

        const email = ref('')
        const password = ref('')
        
        const handleSubmit = async () => {
        const res = await login(email.value, password.value)
            if (!error.value) {
                console.log('user logged in')
                router.push({ name: 'CreateSupport'})
            }
        }

        return { email, password, handleSubmit, error, isPending }
  }
}
</script>

<style>

</style>