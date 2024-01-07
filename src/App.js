import './scss/my.scss'
import {useState} from 'react'

function App() {

  let post = '분당 맛집';
  let [postName, setPostName] = useState('텐동 맛집 추천'); 
  // b의 자리에 들어가는 것은 state 변경을 도와주는 함수다. a는 기본적으로 useState()의 소괄호 안에 있는 내용이 나온다.

  return (
    <div id="App">
      <div id='wrap'>
        <header>
          <ul>
            <li><h3 className="title">My blog</h3></li>
          </ul>
        </header>
        <section id="list">
          <h4>{postName}</h4>
          <p>24/01/07 발행</p>
        </section>

        <main></main>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
