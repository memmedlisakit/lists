import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: "Milk", quantity: "1 box" },
        { name: "Apple", quantity: "50 kq" },
        { name: "Orange", quantity: "20 kq" },
        { name: "Banana", quantity: "100 kq" },
        { name: "Eggs", quantity: 200 }
      ],
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <FontAwesomeIcon className="spinnner" icon="circle-notch" spin />
        ) : (
          <ul className="list-items">
            {this.state.list.map((item, index) => (
              <li className={index % 2 === 0 ? "odd" : "even"} key={item.name}>
                {`${item.name} : quantity - ${item.quantity}`}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
