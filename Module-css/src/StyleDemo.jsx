
function StyleDemo() {

  const myStyle = {
  background: 'lightblue',
  color: 'darkblue',
  marginTop: '100px',
  fontSize: '50px'
}

  return (
    <>
      <h1 style={{ background: 'lightgreen', color: 'darkgreen' }}>Style This With Inline Styling</h1>
      <h1 style={myStyle}>Style This With Style Object Variable</h1>
      <button style={myStyle}>button</button>

    </>
  );
}

export default StyleDemo