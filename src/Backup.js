import './scss/my.scss'
import {useState, useEffect} from 'react'

function App() {

  // let [postName1, setPostName1] = useState('텐동 맛집 추천'); 
  // let [postName2, setPostName2] = useState('우동 맛집 추천'); 
  // let [postName3, setPostName3] = useState('라멘 맛집 추천'); 
  const [postName, setPostName] = useState(['텐동 맛집 추천', '우동 맛집 추천', '라멘 맛집 추천']);
  let [like1, setLike1] = useState(0);
  let [like2, setLike2] = useState(0);
  let [like3, setLike3] = useState(0);
  // useState에서 Array 사용 가능
  const [blogTitle, setBlogTitle] = useState('맛 집 순 례')
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)
  const [isClicked4, setIsClicked4] = useState(false)

  useEffect(() => {
    setLike1(0);
    setLike2(0);
    setLike3(0); // 페이지가 리렌더링될 때마다 like2 상태를 0으로 초기화
  }, [postName]); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정


  const handleClick1 = () =>{
    setIsClicked1(true)
    setIsClicked2(false)
    setIsClicked3(false)
    setIsClicked4(false)
    let copy = postName;
    // state가 array/object면 shallow copy를 만들어서 수정해야 한다. ex : let copy = [...postName] -> console 창에 true가 false로 나옴. 사본이기 때문에!!
    console.log(copy == postName)
    copy[0] = '김치찌개 맛집 추천'
    copy[1] = '떡볶이 맛집 추천'
    copy[2] = '쫄면 맛집 추천'
    setPostName(copy)
    // 아래의 방법은 원본을 바꾸기 때문에 위의 방법이 좋다.
    // postName[0] = '타코야키 맛집 추천'
    // setPostName(postName)
  }

  const handleClick2 = () =>{
    setIsClicked2(true)
    setIsClicked1(false)
    setIsClicked3(false)
    setIsClicked4(false)
    let copy = [...postName];
    copy[0] = '텐동 맛집 추천'
    copy[1] = '우동 맛집 추천'
    copy[2] = '라멘 맛집 추천'
    setPostName(copy)
  }

  const handleClick3 = () =>{
    setIsClicked3(true)
    setIsClicked1(false)
    setIsClicked2(false)
    setIsClicked4(false)
    let copy = [...postName];
    copy[0] = '짜장면 맛집 추천'
    copy[1] = '꿔바로우 맛집 추천'
    copy[2] = '훠궈 맛집 추천'
    setPostName(copy)
  }

  // 아래와 같이 하는 방법이 있지만 데이터의 양이 많을 때 비효율적이다.

  // const handleClick1 = () =>{
  //   setIsClicked1(true)
  //   setIsClicked2(false)
  //   setIsClicked3(false)
  //   setPostName(['김치찌개 맛집 추천', '떡볶이 맛집 추천', '삼겹살 맛집 추천'])
  // }

  // const handleClick2 = () =>{
  //   setIsClicked2(true)
  //   setIsClicked1(false)
  //   setIsClicked3(false)
  //   setPostName(['텐동 맛집 추천', '우동 맛집 추천', '라멘 맛집 추천'])
  // }

  // const handleClick3 = () =>{
  //   setIsClicked3(true)
  //   setIsClicked1(false)
  //   setIsClicked2(false)
  //   setPostName(['짜장면 맛집 추천', '마라탕 맛집 추천', '훠궈 맛집 추천'])
  // }

    // const handleClick = (index) => {
  //   const updateStates = isClicked.map((v,i)=>(
  //     v === index ? !isClicked : isClicked
  //   ))
  //   setIsClicked(updateStates)
  // }
  
  // state [] 대괄호 안에는 최대 2개의 값을 넣을 수 있다. 앞자리는 기본 값, 뒷자리는 변경되는 함수의 값이다.
  // b의 자리에 들어가는 것은 state 변경을 도와주는 함수다. a는 기본적으로 useState()의 소괄호 안에 있는 내용이 나온다.
  // b의 자리에 있는 걸 써야 html 재렌더링이 잘 된다.

  return (
    <div id="App">
      <div id='wrap'>
        <header>
          <ul>
            <li><h3 className="title">{blogTitle}</h3></li>
          </ul>
        </header>
      <section id='posting'>
        <ul className="btnlist">
          <li><button className={`${isClicked1 ? 'select' : ' '} categorybtn`} onClick={handleClick1}>한식</button></li>
          <li><button className={`${isClicked2 ? 'select' : ' '} categorybtn`} onClick={handleClick2}>일식</button></li>
          <li><button className={`${isClicked3 ? 'select' : ' '} categorybtn`} onClick={handleClick3}>양식</button></li>
          {/* <li><button className={`${isClicked4 ? 'select' : ' '} categorybtn`} 
          onClick={()=>{ setIsClicked4(true); setIsClicked1(false); setIsClicked2(false); setIsClicked3(false); 
          let copy = postName; copy[0]='이거되나'; setPostName(copy);}}>글 수정</button></li> */}
        </ul>
        <ul className="list">
            <li><h4>{postName[0]}<span className='likes' onClick={()=>{setLike1(like1 + 1)}}>👍</span>{like1}</h4></li>
            {/* onclick 안에는 함수 이름을 넣어야한다. */}
            {/* 함수 만드는 문법을 바로 넣어도 무방 // EX : function(){console.log(1)} */}
            {/* 축약형은 ()=>{console.log(1)} */}
            {/* useState는 식 안에 등호를 사용하지 않는다. */}
            <li><p>24/01/07 발행</p></li>
        </ul>
        <ul className="list">
            <li><h4>{postName[1]}<span className='likes' onClick={()=>{setLike2(like2 + 1)}}>👍</span>{like2}</h4></li>
            <li><p>24/01/07 발행</p></li>
        </ul>
        <ul className="list">
            <li><h4>{postName[2]}<span className='likes' onClick={()=>{setLike3(like3 + 1)}}>👍</span>{like3}</h4></li>
            <li><p>24/01/07 발행</p></li>
        </ul>
      </section>

        <main></main>
        <footer></footer>
      </div>
    </div>
  );
}

export default Backup;
