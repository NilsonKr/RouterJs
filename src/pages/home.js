import logo from '../../styles/icons/codigo.svg'
import pathPost from '../../styles/images/pathPost-small.jpg'
import spaPost from '../../styles/images/spaPost-small.jpg'
import gamePost from '../../styles/images/gamePost-small.jpg'

const home = () => {
    const view = `
    <section class="presentation">
        <h1>Hello World!</h1>
        <p>On this site you're going to find some articles that may be could help you in one of all developer's problems</p>
        <img src=${ logo } />    
    </section>
    <section class="main-content">
        <div class="posts">
            <a href="#/start_post/">
                <img src= ${ pathPost } alt="begin image">
                <h2>Which Path shall i pick?</h2>
                <button>See...</button>
            </a>
        </div>
        <div class="posts">
            <a href="#/game_post/">
                <img src= ${ gamePost } alt="Game Development image">
                <h2>Talk a few about Game's Development...</h2>
                <button>See...</button>
            </a>
        </div>
        <div class="posts">
            <a href="#/spa_post/">
                <img src= ${ spaPost } alt="SPA image">
                <h2>What a H***k is a SPA?</h2>
                <button>See...</button>
            </a>
        </div>
    </section>
    `
   return view
}

export default home

