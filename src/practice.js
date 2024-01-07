import './scss/my.scss'
import {useState} from 'react'

function Practice(props) {

  const [blogTitle, setBlogTitle] = useState('맛 집 순 례')
  const [selectedCategory, setSelectedCategory] = useState(props.dbkorea); // Default category
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)



  const handleClick1 = () =>{
    setIsClicked1(true);
    setIsClicked2(false);
    setIsClicked3(false);
    setSelectedCategory(props.dbkorea);
  }

  const handleClick2 = () =>{
    setIsClicked2(true);
    setIsClicked1(false);
    setIsClicked3(false);
    setSelectedCategory(props.dbjapan);
  }

  const handleClick3 = () =>{
    setIsClicked3(true);
    setIsClicked1(false);
    setIsClicked2(false);
    setSelectedCategory(props.dbchina);
  }

  const handleLikeClick = (categoryId, itemId) => {
    const updatedCategory = selectedCategory.map((item) => {
      if (item.id === itemId) {
        return { ...item, likes: item.likes + 1 };
      }
      return item;
    });

    setSelectedCategory(updatedCategory);
  };

  
  return (
    <div id="App">
      <div id='wrap'>
        <header>
          <ul>
            <li className='title'><h3>{blogTitle}</h3></li>
          </ul>
        </header>
      <section id='posting'>
        <ul className="btnlist">
          <li><button className={`${isClicked1 ? 'select' : ' '} categorybtn`} onClick={handleClick1}>한식</button></li>
          <li><button className={`${isClicked2 ? 'select' : ' '} categorybtn`} onClick={handleClick2}>일식</button></li>
          <li><button className={`${isClicked3 ? 'select' : ' '} categorybtn`} onClick={handleClick3}>중식</button></li>
        </ul>
 
                    <ul className="list">
                    {selectedCategory.map((v) => (
                        <li key={v.id}>
                            <h4>
                            {v.title}
                            <span className='likes' onClick={() => handleLikeClick(selectedCategory, v.id)}>👍</span>{v.likes}
                            </h4>
                            <p>{v.date}</p>
                        </li>
                        ))}
                    </ul>
      </section>

        <main></main>
        <footer></footer>
      </div>
    </div>
  );
}

export default Practice;
