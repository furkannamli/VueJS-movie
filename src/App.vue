<template>
  <div id="app">
    <router-view v-if="!isLoading" v-on:MovieSearchRequest="handleSearch" :movies=movies  :pageNumber=pageNumber :currentPage=currentPage :movie=movie
    v-on:MovieDetailRequest="goMovieDetail" v-on:NextPageRequest="nextPage" v-on:PrevPageRequest="prevPage" v-on:UpdatePageRequest="updateCurrentPage">
    </router-view>
    
    <h1 class="display-1 text-center" v-if="isLoading">Loading...</h1>
   <!-- 
     <Navbar v-on:MovieSearchRequest="handleSearch" v-on:HomeRequest="goHome"></Navbar>
     <Listing v-if="isListing && !isLoading" :movies=movies  :pageNumber=pageNumber :currentPage=currentPage
     v-on:MovieDetailRequest="goMovieDetail" v-on:NextPageRequest="nextPage" v-on:PrevPageRequest="prevPage" v-on:UpdatePageRequest="updateCurrentPage" >
    </Listing> 
    <MovieDetail v-if="isDetail && !isLoading" :movie=movie></MovieDetail>-->
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Listing from './components/Listing.vue'
import MovieDetail from './components/MovieDetail.vue'

export default {
  name: 'app',
  components: {Navbar, Listing, MovieDetail},
  data () {
    return {
      query: "",
      movies: [],
      isLoading: false,
      movie: [],
      totalResults: null,
      pageNumber: 0,
      currentPage: 1,
      pageSize: 10
    }
  },
  methods:{
    handleSearch(query){
      this.$router.push({ path: '/search/1' })
      this.query = query;
      this.currentPage = 1;
      this.isLoading = true;
          fetch('https://www.omdbapi.com/?apikey=3994739e&s=' +query+ '&page=' +1 )
          .then((res) => {
            return res.json()})
          .then((res) => {
            this.movies = res.Search;
            this.totalResults = res.totalResults;
            console.log("Search Total Results: " +this.totalResults);
            console.log(this.movies);
            this.isLoading = false;
            this.updateMovies();
        })
      },
      goMovieDetail(id){
        this.isLoading = true;
          fetch('https://www.omdbapi.com/?apikey=3994739e&i=' +id)
          .then((res) => {
            return res.json()})
          .then((res) => {
            this.movie = res;
            this.isLoading = false;
        })
      },
      updateMovies(){
        if(this.movies.length / this.pageSize > Math.trunc(this.movies.length / this.pageSize)){this.pageNumber = (Math.trunc(this.totalResults / this.pageSize)) + 1;}
        else{this.pageNumber = (Math.trunc(this.totalResults / this.pageSize))}
      },
      nextPage(cp){
          if(cp < this.pageNumber){
          this.currentPage = cp + 1;
          this.fetchMovie();
      }
          
      },
      prevPage(cp){
        if(1 < cp){
            this.currentPage = cp - 1;
        }
        this.fetchMovie();
      },
      updateCurrentPage(cp){
        this.currentPage = cp;
        this.fetchMovie();
      },
      fetchMovie(){
        this.$router.push({ path: '/search/' +this.currentPage })
        this.isLoading = true;

        fetch('https://www.omdbapi.com/?apikey=3994739e&s=' +this.query+ '&page=' +this.currentPage )
          .then((res) => {
            return res.json()})
          .then((res) => {
            this.movies = res.Search;
            this.isLoading = false;
        })
      }
  }

}
</script>

<style>
</style>
