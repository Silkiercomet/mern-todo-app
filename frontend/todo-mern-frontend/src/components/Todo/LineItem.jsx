const LineItem = ({isDark, item, HandleCheck, HandleDelete }) => {
    return (
      <li className="item" id={isDark?"DBB":"LBB"} key={item._id}>
        <input
          className="checkbox"
          id={item._id}
          type="checkbox"
          onChange={() => HandleCheck(item._id)}
          checked={item.check}
        />
        <label htmlFor={item._id} className="checkmark"></label>
        <label
          className="text"
          style={
            item.check === true ? { textDecoration: "line-through", color:"hsl(236, 9%, 61%)" } : null
          }
          onDoubleClick={() => HandleCheck(item._id)}
        >
          {item.todo}
        </label>
        <button
          className="delete"
          onClick={() => HandleDelete(item._id)}
          tabIndex="0"
          aria-label={"Delete item " + item.item}
        />
        
      </li>
    );
  };
  export default LineItem;
  