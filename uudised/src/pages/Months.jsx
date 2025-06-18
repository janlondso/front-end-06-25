
function Months() {
    const months = ["March", "Jan", "Feb", "Dec"];
  return (
    <div>
        { months.map(month => <div key={month}>{month}</div>)}
    </div>
  )
}

export default Months