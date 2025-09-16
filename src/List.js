const List = (props) => {
  const catagory=props.catagory;
  const newitems=props.items;
  // fruits.sort((a,b) => a.name.localeCompare(b.name)) //alphabetical
  // fruits.sort((a,b) => b.name.localeCompare(a.name)) // reverce alphabetical
  //fruits.sort((a,b) => a.calories - b.calories); //numerical
  //fruits.sort((a,b) => b.calories - a.calories); //reverse numerical
  /* const highCalFruits=fruits.filter(fruit => fruit.calories >= 100)
  const listItems=highCalFruits.map(highcal => <li key={highcal.id}>{highcal.name}: &nbsp; {highcal.calories}</li>)
  return( <ol>{listItems}</ol>) */
  const fruitsList=newitems.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)
  return(<>
  <h3>{catagory}</h3>
  <ol>{fruitsList}</ol>
  </>);
}
export default List