import List from './List.js'
function App() {
  const fruits=[{id:1,name:"coconut",calories:55},
    {id:2,name:"apple",calories:222},
    {id:3,name:"papaya",calories:888}
   ];
    const vegetables=[{id:1,name:"brocolli",calories:55},
    {id:2,name:"potato",calories:222},
    {id:3,name:"corn",calories:888}
   ];


  return (<>
   {/* {fruits.length > 0 ? <List items={fruits} catagory="Fruits"/>: null}
   {vegetables.length > 0 ? <List items={vegetables} catagory="Vegetables"/>  : null} */}
   {fruits.length > 0 && <List items={fruits} catagory="Fruits"/>}
   {vegetables.length > 0 && <List items={vegetables} catagory="Vagetables"/>}
  </>
  );
}

export default App;
