<template>
    <div id="ninjas">
        <ul>
            <li v-for="ninja in ninjas" v-bind:key="ninja.index" v-on:click="ninja.show = !ninja.show">
                <h2>{{ ninja.name }}</h2>
                <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
            </li>
        </ul>
        <button v-on:click="deleteNinja">Delete Ninja</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    // with props we pass a reference to the data. So if we modify the data in this
    // component we will modify the original data in our App.vue
    // we can get over it with Primitive
    props: {
        ninjas: {
            // valiidation: if it fails we will not use the prop
            type: Array,
            required: true
        }
    },
    methods: {
        deleteNinja: function() {
            this.ninjas.pop();
        }
    }
}
</script>
<style scoped>
#ninjas {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
