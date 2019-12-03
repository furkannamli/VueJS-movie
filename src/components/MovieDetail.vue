<template>
    <div>
      <Navbar></Navbar>
                <div class="container">
                    <div class="movie-detail">
                    <h1 class="my-4 movie-card-title">{{ movie.Title }} -
                      <small>{{ movie.Year }}</small>
                      <img class="img-fluid imdb-logo" :src="'../../img/imdb.png'" />
                      <img class="img-fluid imdb-logo" :src="'../../img/vue-badge.png'" />
                    </h1>

                    <div class="row">
                      <div class="col-md-4">
                        <img v-if="movie.Poster != 'N/A'" class="img-fluid movie-poster" :src="movie.Poster"/>
                        <img v-if="movie.Poster == 'N/A'" class="img-fluid movie-poster" src="img/empty.jpg"/>
                        
                      </div>
                  
                      <div class="col-md-8">
                        <h2 class="ml-3 mb-3">{{ movie.Title }}</h2>
                        <p class="ml-3">{{ movie.Plot }}</p>
                        <h2 class="ml-3 my-3">Movie Details</h2>
                        <ul>
                          <li><span class="active">Director</span><br><span>{{ movie.Director }}</span></li>
                          <li><span class="active">Actors</span><br><span>{{ movie.Actors }}</span></li>
                          <li><span class="active">Release Date</span><br> <span>{{movie.Released}}</span></li>
                        </ul>
                        <h2 class="ml-3 mt-3">Movie Ratings</h2>
                        <div class="ml-3 mb-3 flex">
                           <div class="mr-4"> Metascore <div v-bind:class="{black: movie.Metascore == 'N/A', red: movie.Metascore > 0, yellow: movie.Metascore >= 50, green: movie.Metascore >= 70}"
                               class="metascore"><span class="sub">{{ movie.Metascore }}</span></div></div>
                        <div class="mr-4">IMDB Rating <div v-bind:class="{black: movie.imdbRating == 'N/A', red: 6 > movie.imdbRating, yellow: movie.imdbRating >= 6, green: movie.imdbRating >= 7}"
                            class="metascore"><span class="sub">{{  movie.imdbRating }}</span></div></div>
                        </div>
                        <div class="mr-3 mb-3">
                            <img  class="img-fluid imdb-logo" 
                            v-if="movie.Metascore > 89 || movie.Metascore == 'N/A' && movie.imdbRating > 8.9" 
                            :src="'../../img/100.png'" />
                            <img class="img-fluid imdb-logo" 
                            v-if="movie.Metascore > 80 && movie.Metascore <= 89 || movie.Metascore == 'N/A' && movie.imdbRating >= 8" 
                            :src="'../../img/good.png'" />
                            <img class="img-fluid imdb-logo" 
                            v-if="movie.Metascore < 80 && movie.Metascore > 55 || movie.Metascore == 'N/A' && movie.imdbRating >= 6.5 && movie.imdbRating < 8" 
                            :src="'../../img/norm.png'" />
                            <img class="img-fluid imdb-logo" 
                            v-if="movie.Metascore < 56 || movie.imdbRating < 6.5" 
                            :src="'../../img/shit.png'" />
                            <span class="editor">Editor's Rating: </span></div>
                        
                      </div>
                  
                    </div>
                </div>
                  </div>
            </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    components: {Navbar},
    data () {
    return {
    }
    },
    props: [ 'movie' ],
}
</script>
