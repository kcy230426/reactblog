import './scss/my.scss'
import Practice from './practice'
import db from './db/data.json'

function App() {

  return (
    <Practice dbkorea={db.korea} dbjapan={db.japan} dbchina={db.china}></Practice>
  );
}

export default App;
