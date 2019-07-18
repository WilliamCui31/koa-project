import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';

const Home = ({ list, getHomeList }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You are clicked ${count} times.`;
  });

  useEffect(() => {
    if (!list.length) {
      getHomeList();
    }
  }, []);

  return (
    <div>
      <p>You are clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <div className="test">
        {list.map(({ id, name, price }) => (
          <div key={id}>
            {name}-{price}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ list: state.home.newList });

const mapDispatchToProps = dispatch => ({ getHomeList: () => dispatch(getHomeList()) });

const exportHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

exportHome.loadData = store => store.dispatch(getHomeList());

export default exportHome;
