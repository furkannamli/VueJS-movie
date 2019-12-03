<template>
<div>
        <nav class="navbar navbar-expand navbar-darkcyan">
                        <span class="navbar-brand">Movie Search</span>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                  <router-link to='/' > <span class="home-btn nav-link pb-1" >Home </span></router-link>
                                </li>
                            </ul>
                                <input class="form-control mr-sm-2" type="text" placeholder="Eg: Star Wars" v-model="query" 
                                @keypress.enter="handleSearch">
                                <router-link to='/search/1'><span ><button v-on:click="handleSearch" type="button" class="btn btn-primary">Search</button> </span></router-link>
                        </div>
                    </nav>
                    <div class="text-center">
                        <h1 class="display-1">SEARCH A MOVIE</h1>
                </div>  
</div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      query: '',
    }
  },
  methods:{
      handleSearch(){
          this.$emit('MovieSearchRequest', this.query)
        }
  }
}
</script>