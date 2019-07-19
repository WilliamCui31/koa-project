import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts, createProduct } from './store/actions';

const Home = ({ list, getProducts, createProduct }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    document.title = `You are clicked ${count} times.`;
  });

  useEffect(() => {
    if (!list.length) {
      getProducts();
    }
  }, []);

  const handleCreate = () => {
    createProduct({ name, manufacturer, price });
  };

  return (
    <div>
      <p>You are clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <ul className="create">
        <li>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
        </li>
        <li>
          <label htmlFor="manufacturer">Manufacturer</label>
          <input
            type="text"
            id="manufacturer"
            value={manufacturer}
            onChange={e => setManufacturer(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="price">Price</label>
          <input type="text" id="price" value={price} onChange={e => setPrice(e.target.value)} />
        </li>
        <li>
          <button onClick={handleCreate}>Create</button>
        </li>
      </ul>
      <ul className="list">
        {list.map(({ id, name, price }) => (
          <li key={id}>
            {name}-{price}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({ list: state.home.newList });

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  createProduct: ({ name, manufacturer, price }) =>
    dispatch(createProduct({ name, manufacturer, price }))
});

const exportHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

exportHome.loadData = store => store.dispatch(getProducts());

export default exportHome;
