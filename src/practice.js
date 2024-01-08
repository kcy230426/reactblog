import './scss/my.scss'
import {useState} from 'react'

function Practice(props) {

  const [blogTitle, setBlogTitle] = useState('🥄 맛 집 순 례 🍴')
  const [selectedCategory, setSelectedCategory] = useState(props.dbkorea); // Default category
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)
  const [sortBtn, setSortBtn] = useState(0);
  const [sortTxt, setSortTxt] = useState('리스트가 최신 등록순으로 정렬되었습니다.');
  const [sortBtnName, setSortBtnName] = useState("가나다순");


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



  const sortClick = () => {
    let copy = [...selectedCategory];
    if(sortBtn === 0){
      setSortBtnName("최신 등록순")
      setSelectedCategory(copy.sort((a,b)=>a.title.localeCompare(b.title)));
      setSortBtn(1)
      setSortTxt("가나다순으로 정렬되었습니다.")
    }else if(sortBtn === 1){
      setSortBtnName("가나다순");
      setSortTxt("최신 등록순으로 정렬되었습니다.")
      // setSelectedCategory(copy.sort((a, b) => a.date - b.date));
      selectedCategory.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      })
      setSortBtn(0);
    }
  }


  
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
                        <li className='sortbtnbox'>
                          <p>{sortTxt}</p>
                          <button className='sortbtn' onClick={sortClick}>{sortBtnName}</button>
                          </li>
                    {selectedCategory.map((v) => (
                        <li key={v.id}>
                            <h4>
                            {v.title}
                            <span className='likes' onClick={() => handleLikeClick(selectedCategory, v.id)}>👍</span>{v.likes}
                            {/* 사용자에 의해 누적되는 좋아요 숫자는 서버 연동이 필요하다 */}
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
