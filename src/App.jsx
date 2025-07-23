// ✅ 1단계: 로직 함수들 (컴포넌트 바깥에 작성)

function addMilk() {
  console.log('우유 쬐끔 추가');
  return '🥛 우유 쬐끔~';
}

function addSugar(){
  console.log('달달설탕 추가');
  return '🍬 달달설탕~';
}

function addFlavor(){
  console.log('쪼꼬추가');
  return '🍫 쪼꼬추가~';

}

// ✅ 2단계: 화면 컴포넌트 (화면 만들기)
import { useState } from 'react';

function App(){
  const [process, setProcess] = useState([]);

  const handleAddMilk= () => {
    setProcess([...process,addMilk()]);
  };

  const handleAddSugar=()=>{
    setProcess([...process,addSugar()]);
  }

  const handleAddFlavor=()=>{
    setProcess([...process,addFlavor()]);
  }

  return (
    <div>
      <button onClick={handleAddMilk}>🥛우유추가</button>
      <button onClick={handleAddSugar}>🍭설탕추가</button>
      <button onClick={handleAddFlavor}>🍫쪼꼬추가</button>

      {/* ⭐화면에 제작과정 표시 */}
      <h3>제작 과정</h3>
      <ul>
        {process.map((step,index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  )
}


export default App;





// import { useState } from 'react';

// function ButtonComponent() {
//   const handleClick = () => {
//     alert('버튼 클릭!');
//   };

//   return <button onClick={handleClick}>클릭!</button>;
// }

// function CalculatorSimple() {
//   const add = (a, b) => a + b;
//   const showResult = () => {
//     alert(add(3, 2));
//   };

//   return <button onClick={showResult}>3 + 2 결과 보기</button>;
// }

// function CalculatorAdvanced() {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);

//   const add = (a, b) => a + b;
//   const subtract = (a, b) => a - b;
//   const multiply = (a, b) => a * b;

//   const showResult = (operation) => {
//     let result;
//     if (operation === 'add') result = add(Number(num1), Number(num2));
//     if (operation === 'subtract') result = subtract(Number(num1), Number(num2));
//     if (operation === 'multiply') result = multiply(Number(num1), Number(num2));
//     alert(`결과: ${result}`);
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         value={num1}
//         onChange={(e) => setNum1(e.target.value)}
//       />
//       <input
//         type="number"
//         value={num2}
//         onChange={(e) => setNum2(e.target.value)}
//       />
//       <button onClick={() => showResult('add')}>더하기</button>
//       <button onClick={() => showResult('subtract')}>빼기</button>
//       <button onClick={() => showResult('multiply')}>곱하기</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <ButtonComponent />
//       <CalculatorSimple />
//       <CalculatorAdvanced />
//     </div>
//   );
// }

// export default App;

