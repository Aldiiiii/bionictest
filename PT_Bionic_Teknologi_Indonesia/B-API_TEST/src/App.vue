<script>

export default {
  data(){
    return {
      test : {}
    }
  },
  created(){
    this.fetchData()
  },
  methods : {
    async fetchData(){
      try {

        const {data} = await axios.get("https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth")
        this.test = data
        console.log("ke fetch")
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted(){
    console.log('test')
  }
}

</script>

<template>
  <header>
    <div class="wrapper">
      <h1>HOME</h1>
      <!-- <h1>{{ {test} }}</h1> -->
    </div>
  </header>

  <main>
    <h1>WELCOME</h1>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
