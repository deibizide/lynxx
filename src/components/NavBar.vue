<template>
    <div class="navBar__wrapper">
        <div @click="menuToggle" class="navBar__burger-wrapper">
            <div class="navBar__burger-menu" :class="{ open: menuOpen }"></div>
            <div class="navBar__menu" :class="{ navBar__animation: !menuOpen }">
                <div class="menu">
                    <router-link to="/">Home</router-link>
                    <router-link to="/favourites">Favourites</router-link>
                </div>
            </div>
        </div>
        <router-link to="/">
            <div class="navBar__logo-image">
                <img
                    src="https://lynxx.co/wp-content/uploads/2020/06/Logo_LynxX_B-e1592996937330.png"
                    alt="lynxx logo"
                />
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuOpen: false,
        };
    },
    methods: {
        menuToggle() {
            this.menuOpen = !this.menuOpen;
        },
        handleScroll() {
            this.menuOpen = false;
        },
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<style lang="scss">
.navBar__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    align-items: center;
    width: 1050px;
    margin: 0 auto;

    .navBar__logo-image {
        text-align: end;
    }

    .navBar__burger-wrapper {
        cursor: pointer;
        padding: 10px 0px;
        width: 30px;
    }

    .navBar__burger-menu {
        width: 30px;
        height: 5px;
        background: black;
        transition: all 0.5s ease-in-out;
        border-radius: 5px;
    }
    .navBar__burger-menu::before,
    .navBar__burger-menu::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 5px;
        background: black;
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
    }
    .navBar__burger-menu::before {
        transform: translateY(-10px);
    }
    .navBar__burger-menu::after {
        transform: translateY(10px);
    }
    /* ANIMATION */
    .open {
        background-color: white;
        transform: translateX(-50px);
    }
    .open::before {
        transform: rotate(45deg) translate(35px, -35px);
    }
    .open::after {
        transform: rotate(-45deg) translate(35px, 35px);
    }

    .navBar__menu {
        position: absolute;
        top: 75px;
        background: white;

        .menu {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 200px;
            height: 200px;
            box-shadow: 1px 6px 5px rgba(0, 0, 0, 0.26);

            a {
                color: black;
                font-weight: 700;
                text-decoration: none;
                margin: 5px 0px;
            }
            a:hover {
                text-decoration: underline;
            }
        }
    }
    .navBar__animation {
        display: none;
    }
}

@media (max-width: 1088px) {
    .navBar__wrapper {
        width: 850px;
    }
}

@media (max-width: 900px) {
    .navBar__wrapper {
        .navBar__menu {
            top: 55px;
        }
        width: 500px;
        img {
            width: 200px;
        }
    }
}

@media (max-width: 609px) {
    .navBar__wrapper {
        width: 350px;
        padding: 20px 0px;
        img {
            width: 150px;
        }
    }
}
</style>