<template>
    <div>
        <div>
            <BracketsTitle>About</BracketsTitle>
        </div>
        <div class="d-flex align-center justify-center flex-column">
            <h1 class="text-h4 font-weight-light text-center">
                I<Accent>'</Accent>m {{ age }} y<Accent>.</Accent>o<Accent
                    >.</Accent
                >
                Frontend Developer from Russia
            </h1>
            <p
                class="text-h6 font-weight-light text--secondary text-center px-10 my-2"
            >
                I<Accent>'</Accent>ve been coding since March 2020<Accent
                    >.</Accent
                >
                I have experience in setting up servers with
                Node<Accent>.</Accent>js and Django<Accent>,</Accent> working
                with API (REST and GraphQL)<Accent>,</Accent> Telegram
                Bots<Accent>,</Accent> MongoDB and Vue<Accent>.</Accent>js
            </p>
            <v-avatar size="128" class="mt-3 elevation-24">
                <v-img :src="avatar" alt="Github Avatar"></v-img>
            </v-avatar>
        </div>
    </div>
</template>

<script>
import BracketsTitle from "@/components/BracketsTitle";
import Accent from "@/components/Accent";
export default {
    components: {
        Accent,
        BracketsTitle,
    },
    data() {
        return {
            avatar: "https://github.com/VadimZb.png",
        };
    },
    computed: {
        age() {
            const birthDate = new Date(2003, 9, 25);
            const today = new Date();

            const diff =
                (birthDate.getTime() - today.getTime()) /
                (1000 * 60 * 60 * 24 * 365.25);
            return Math.floor(Math.abs(diff));
        },
    },
};
</script>
