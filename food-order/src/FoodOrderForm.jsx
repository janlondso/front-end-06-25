import { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    if (!name || !phone || !address || !order) {
        alert('Please fill in all fields.');
    return;
    }
    e.preventDefault();
    alert(`Order Successful!\n\nYour order was ${order}.\n\nPlease show your confirmation number for pickup.`);
    setName("");
    setPhone("");
    setAddress("");
    setOrder("");
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="name"
          type="text"
          name="name"
          />
        <br/>
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          id="phone"
          type="tel"
          />
        <br/>
        <label htmlFor="address">Address</label>
        <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          id="address"
          type="text"
          name="address"
          />
        <br/>
        <label htmlFor="order">Order</label>
        <input
          onChange={(e) => setOrder(e.target.value)}
          value={order}
          id="order"
          type="text"
          name="order"
          />
        <br/>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  )
}

export default FoodOrderForm;