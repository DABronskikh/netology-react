import AccountsHolder from "./components/AccountsHolder";
import CartTable from "./components/CartTable";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";
import UserInfo from "./components/UserInfo";
import LoadingIndicator from "./components/LoadingIndicator";

function App() {

  const cartItems = [
    {id: 124, name: 'Iphone', price: 1034, quantity: 1},
    {id: 221, name: 'MacBook Pro', price: 2720, quantity: 2},
    {id: 371, name: 'Samsung Galaxy', price: 600, quantity: 3},
  ];

  return (
    <div className="container">

      {/*<Modal text={'demo-modal'}/>*/}

      {/*<UserInfo />*/}



       {/*<TodoList />*/}

       {/*<CartTable items={cartItems} />*/}

       {/*
      <CartTable
        items={cartItems}
        headings={['Товар', 'Цена в рублях', 'Количество']}
        currency='руб.'
      />
      */}


      <AccountsHolder
        render={accounts => (
          <ul className="list-group list-group-flush list-group-numbered">
            { accounts.map(o => <li className="list-group-item" key={o.id}>{o.name}: {o.balance}</li>) }
          </ul>
        )}
      />

        <AccountsHolder
            render={accounts => (
                <ol className="list-group list-group-flush list-group-numbered">
                    { accounts.map(o => <li className="list-group-item" key={o.id}>{o.name}</li>) }
                </ol>
            )}
        />


    </div>
  );
}

export default App;
