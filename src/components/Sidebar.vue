<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <div class="logo" @click="ToggleMenu">
            <img src="../assets/logo.png" alt="Logo">
            <h3>Rodrigo Tutz</h3>
        </div> 

        
        <div class="menu">
            <router-link class="button" to="/" isDark="isDark">
                <i class="bi bi-house-fill"></i>
                <span class="text">Início</span>
            </router-link>
            <router-link class="button" to="/sobre">
                <i class="bi bi-person-workspace"></i>
                
                <span class="text">Sobre</span>
            </router-link>
            <router-link class="button" to="/apps">
                <i class="bi bi-file-earmark-code-fill"></i>
                <span class="text">Apps</span>
            </router-link>
        </div>
        
        <div class="flex"></div>

        <div class="menu">
            <div class="button" @click="toggleDark()">
                <i class="bi bi-moon"></i>
                <span class="text">Mudar Tema</span>
            </div>
            <a class="button" href="https://github.com/Rodrigotutz" target="blank">
                <i class="bi bi-github"></i>
                <span class="text">Github</span>
            </a>
        </div>
    </aside>
</template>

<script setup>
    import { ref } from 'vue'
    import { useDark, useToggle } from '@vueuse/core'
 
    const isDark = useDark()
    const toggleDark = useToggle(isDark)

    const is_expanded = ref(localStorage.getItem("is_expanded") === 'true')
    const ToggleMenu = () => {
        is_expanded.value = !is_expanded.value

        localStorage.setItem("is_expanded" , is_expanded.value)
    }
</script>

<style lang="scss" scoped>
    aside {
        display: flex;
        flex-direction: column;
        width: calc(2rem + 32px);
        min-height: 100dvh;
        overflow: hidden;
        padding: 1rem;

        background-color: var(--dark);
        color: var(--light);

        transition: 0.2s ease-out;

        .flex {
            flex: 1 1 0;
        }
        .logo {
            display: flex;
            gap: 1rem;
            align-items: center;
            margin-bottom: 1rem;

            img {
                width: 2rem;
            }

            &:hover {
                cursor: pointer;
            }
        }

        h3 {
            opacity: 0;
            transition: 0.3s ease-out;
            font-size: 1px;
        }

        .button .text {
            opacity: 0;
            transition: 0.3s ease-out;
            font-size: 1px;
        }

        .menu {
            margin: 0 -1rem;

            .button, a {
                display: flex;
                align-items: center;
                text-decoration: none;

                padding: 0.5rem 1.2rem;
                transition: 0.2 ease-out;

                i {
                    font-size: 1.5rem;
                    color: var(--light);
                    transition: 0.2s ease-out;
                }

                .text {
                    color: var(--light);
                    transition: 0.2s ease-out;
                }

                &:hover, &.router-link-exact-active {
                    background-color: var(--dark-alt);

                    i, .text {
                        color: var(--primary);
                    }
                } 

                &.router-link-exact-active {
                    border-right: 4px solid var(--primary);
                }
            }
        }

        &.is-expanded {
            width: var(--sidebar-width);

            h3 {
                opacity: 1;
                font-size: 1.5rem;
            }

            .button .text {
                opacity: 1;
                font-size: 1rem;
            }

            .button {
                i {
                    margin-right: 1rem;
                }
            }
        }

        @media(max-width: 768px) {
            position: fixed;
            z-index: 88;
        }
    }
</style>