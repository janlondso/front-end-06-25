
function Animals() {
    const animals = ["pigs", "goats", "sheep"];
  return (
    <div>{animals.map(animal => <div key={animal}>{animal}</div>)}</div>
  )
}

export default Animals