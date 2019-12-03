<template>
    <div>
        <Navbar></Navbar>
        <div class="row listing">
            <div class="col-md-4" v-for="movie in movies" v-bind:key="movie.id">
                <div class="card">
                    <img v-if="movie.Poster != 'N/A'" class="minusmt thumbnail" :src="movie.Poster"/>
                    <img v-if="movie.Poster == 'N/A'" class="minusmt thumbnail" src="img/empty.jpg"/>
                    
                    <div class="alt-card">
                        <span class="mt-2 mb-1 movie-title">{{ movie.Title }}</span>
                        <hr>
                        <span class="mt-1 mb-1 movie-year">{{ movie.Year }}</span>
                        <hr> 
                        <router-link to="/movie/">
                        <button v-on:click="goMovieDetail(movie.imdbID)" type="button" class="btn btn-info mb-3 mt-3"> More Info </button>
                        </router-link>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div class="row">
            <nav class="marginl-4" aria-label="Page navigation example">
                <ul class="pagination">
                    <button v-if="currentPage > 1" v-on:click="prevPage(currentPage) " class="page-item page-link">Previous</button>
                    <button v-if="currentPage >= 3" v-on:click="updateCurrentPage(1)" class="page-item page-link">...</button>
                    <button v-if="currentPage < 3 && 1 <= pageNumber" class="page-item page-link" v-bind:class="{active: currentPage == 1}" v-on:click="updateCurrentPage(1)">{{1}}</button>
                    <button v-if="currentPage < 3 && 2 < pageNumber" class="page-item page-link" v-bind:class="{active: currentPage == 2}" v-on:click="updateCurrentPage(2)">{{2}}</button>
                    <button v-if="currentPage < 3 && 3 < pageNumber" class="page-item page-link" v-bind:class="{active: currentPage == 3}" v-on:click="updateCurrentPage(3)">{{3}}</button>
                    <button v-if="currentPage >= 3 && currentPage < pageNumber" class="page-item page-link" v-on:click="updateCurrentPage(currentPage - 1)">{{currentPage - 1}}</button>
                    <button v-if="currentPage >= 3 && currentPage < pageNumber " class="page-item page-link active" v-on:click="updateCurrentPage(currentPage)">{{currentPage}}</button>
                    <button v-if="currentPage >= 3 && currentPage < pageNumber && (currentPage + 1) < pageNumber" class="page-item page-link" v-on:click="updateCurrentPage(currentPage + 1)">{{currentPage + 1}}</button>
                    <button v-if="currentPage < pageNumber - 3" class="page-item page-link">...</button>
                    <button v-if="pageNumber > 4" v-on:click="updateCurrentPage(pageNumber)" class="page-item page-link">{{pageNumber}}</button>
                    <button v-if="pageNumber > 1" v-on:click="nextPage(currentPage)" class="page-item page-link">Next</button>
                </ul>
            </nav>
        </div>
        
    </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
    props: [ 'movies', 'pageNumber', 'currentPage' ],
    components: {Navbar},
    data () {
    return {
    }
  },
    methods:{
        goMovieDetail(id){
            this.$emit('MovieDetailRequest', id)
        },
        nextPage(cp){
            this.$emit('NextPageRequest', cp);
        },
        prevPage(cp){
            this.$emit('PrevPageRequest', cp);
        },
        updateCurrentPage(cp){
            this.$emit('UpdatePageRequest', cp);
        }
  }
}
</script>
