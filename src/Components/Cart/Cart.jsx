import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1613869810108-70f9fe0cdef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
      img2: "https://images.unsplash.com/photo-1613869810371-3068cc3ac5b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
      title: "Blue Denim Jacket",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo est similique, pariatur quod quasi in assumenda repellendus exercitationem beatae, laudantium quaerat tenetur, inventore quia doloribus non cumque odio quisquam.",
      isNew: true,
      oldPrice: 80,
      price: 72,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80",
      img2: "https://images.unsplash.com/photo-1520773601366-7b8b9310af2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Light Blue Jacket",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo est similique, pariatur quod quasi in assumenda repellendus exercitationem beatae, laudantium quaerat tenetur, inventore quia doloribus non cumque odio quisquam.",
      isNew: true,
      oldPrice: 70,
      price: 58,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1568246621541-5704b4f0bbf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      img2: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "Casual Caps",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo est similique, pariatur quod quasi in assumenda repellendus exercitationem beatae, laudantium quaerat tenetur, inventore quia doloribus non cumque odio quisquam.",
      oldPrice: 20,
      price: 15,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1625697501174-93bdbf1b280c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
      img2: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
      title: "Sneakers",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illo est similique, pariatur quod quasi in assumenda repellendus exercitationem beatae, laudantium quaerat tenetur, inventore quia doloribus non cumque odio quisquam.",
      oldPrice: 95,
      price: 70,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 50)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
			</div>
			<button>PROCEED TO CHECKOUT</button>
			<span className="reset">
				Reset Cart
			</span>
    </div>
  );
};

export default Cart;
