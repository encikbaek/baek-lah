<template>
    <div class="nav-container">
        <div>
            <div class="bar bar--sm visible-xs" data-scroll-class="100px:pos-fixed">
                <div class="container">
                    <div class="row">
                        <div class="col-3 col-md-2">
                            <router-link :to="{ name: 'Home' }"><img class="logo logo-dark" alt="logo" src="../assets/img/logo/logo-dark.png"> <img class="logo logo-light" alt="logo" src="../assets/img/logo/logo-light.png"></router-link>
                        </div>
                        <div class="col-9 col-md-10 text-right">
                            <a href="#" class="hamburger-toggle" data-toggle-class="#menu1;hidden-xs hidden-sm"> <i class="icon icon--sm stack-interface stack-menu"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="menu1" class="bar bar-1 hidden-xs" data-scroll-class="100px:pos-fixed">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-1 col-md-2 hidden-xs">
                            <div class="bar__module">
                                <router-link :to="{ name: 'Home' }"><img class="logo logo-dark" alt="logo" src="../assets/img/logo/logo-dark.png"> <img class="logo logo-light" alt="logo" src="../assets/img/logo/logo-light.png"></router-link>
                            </div>
                        </div>
                        <div class="col-lg-11 text-right text-left-xs text-left-sm col-md-12">
                            <div v-if="user" class="bar__module">
                                <span class="btn btn--sm btn--primary type--uppercase"> <span class="btn__text" @click="handleClick">Log out</span> </span>
                            </div>
                            <div v-else>
                                <div class="bar__module">
                                    <ul class="menu-horizontal text-left">
                                        <li> <a href="#Solutions">Solutions</a> </li>
                                        <li> <a href="#AboutUs">About</a> </li>
                                        <li> <a href="#">News & Event</a> </li>
                                        <li> <a href="#ContactUs">Contact Us</a> </li>
                                    </ul>
                                </div>
                                <div class="bar__module">
                                    <router-link :to="{ name: 'Login' }" class="btn btn--sm btn--primary type--uppercase"><span class="btn__text">Login</span></router-link>
                                </div>
                                <!-- <div class="bar__module">
                                    <router-link :to="{ name: 'Signup' }" class="btn btn--sm type--uppercase"><span class="btn__text">Sign up</span></router-link>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const { user } = getUser()
        const { logout } = useLogout()
        const router = useRouter()

        const handleClick = async () => {
            await logout()
            console.log('user logged out')
            router.push({ name: 'Home' })
        }

        return { handleClick, user }
    }
}
</script>

<style>

</style>