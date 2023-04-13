import './App.css';
import {useState, useContext, useEffect} from 'react'
import { ThemeContext } from './components/Theme/ThemeContext';
import Header from './components/Header/Header';
import TodoContainer from "./components/Todo__container/TodoContainer"
import axios from "axios";

function App() {
  //--------------------Hooks------------------>
  //const [items, setItem] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || [])
    const [items, setItem] = useState([])
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext)
    const [newItems, setNewItems] = useState("");
    const [active,setActive] = useState(0);
  
    useEffect(() => {
      localStorage.setItem('shoppinglist', JSON.stringify(items));
    }, [items])
    useEffect(() => {
      console.log(active)
    }, [active])

    useEffect(() => {
      (async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/`);
          setItem(response.data)
          return
        } catch (error) {
          console.log(error);
        }
      })()

    }, [])
  //------------------------------------------->
  //-----------------functions----------------->
    const setstorage = (x) => {
      //x an array with the todo's
      setItem(x);
      localStorage.setItem("shoppinglist", JSON.stringify(x));
    };

    const AddToList = (item) => {
      //add new items
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = { id, checked: false, item };
      const myNewList = [...items, myNewItem];
      setstorage(myNewList);
    };
    const HandleCheck = (id) => {
      let status = false
      const listItems = items.map((item) =>{
        if(item._id === id){
          status = !item.check
          return { ...item, check: status }
        }
        return item
      }
      );
      (async () => {
        try {
          const response = await axios.patch(`http://localhost:3001/api/${id}?check=${status}`);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      })()
      console.log(listItems)
      setstorage(listItems);
    };
  
    const HandleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setstorage(listItems);
    };
    const HandleSubmit = () => {
  
      if (!newItems) return;
      //add item
      AddToList(newItems);
      setNewItems("");
    };
  //------------------------------------------->
  
    return (
      <div className="App" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
  
        <Header isDark={isDark}/>
        <TodoContainer 
          items={items}
          isDark={isDark} 
          toggleTheme={toggleTheme}
          newItems={newItems}
          setNewItems={setNewItems}
          HandleSubmit={HandleSubmit}
          HandleCheck={HandleCheck}
          HandleDelete={HandleDelete}
          setActive={setActive}
          active={active}
          setItem={setItem}
        />
  
        
      </div>
    );
  }
  
  export default App;