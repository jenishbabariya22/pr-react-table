import './App.css';
import Table from './Table';
import { useEffect, useState } from 'react';
const App = () => {
  const [allrecord, setAllRecord] = useState([
    {
      id: 1,
      name: "samsung",
      price: 10000,
      qty: 1,
      category: "mobile",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGrWLGFZBjHHAFlcd2sSvwEX9qbKTWyRMyaK_xaQj8HpIuuAzmFPIgl_XOFapgzVUku3acrTBd9Bot3OWt0EFS-9EYIpxXOoc0OyJShPRX2b_QJ38ZP-WOpRvG0dmxTWOGN5-TuVZPqdU6&usqp=CAc",
      color: "#faf9f9",
      text: "white"
    },
    {
      id: 2,
      name: "t.v",
      price: 5000,
      qty: 1,
      category: "electronics",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTRoe2KfNJo2lLlKW4dLdQ5Xzez3R42vPXjc3d-lAJLnmajss1FZCmaj-rr7q3NfeY2n5v0AcZ1qBjwQ_EtH_uI3fPpshwYAcjIaLF2rGL3RePVZxk0o4KieVdFEZIHQgWpmmwpSXtqZg&usqp=CAc",
      color: "#faf9f9"
    },
    {
      id: 3,
      name: "washing machine",
      price: 2500,
      qty: 1,
      category: "electronics",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcllUCjOu-eL1Q26TvMrPB-a6xsK_K5j3foF1xRGHGjEArlSD8Mv971iLEE0yOObiHVycbUGqXbnUfujAIc7Hbl62z6nzuA3Mx0JmopOyJ61gQ6CWn98Hx",
      color: "#faf9f9",
      text: "white"
    },
    {
      id: 4,
      name: "vivo",
      price: 10000,
      qty: 1,
      category: "mobile",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvWq1qsgcPeRP-QJm99eS2r4cdlnNe4t1wHiq95zxwjlvjWXsvBlMf3RFL7Xpu7BI2Ts&usqp=CAU",
      color: "#faf9f9"
    },
    {
      id: 5,
      name: "puma",
      price: 5000,
      qty: 1,
      category: "cloth",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQQ3Mewjwz9QYRvlMVeYnE6Lr2WklARqFLA&usqp=CAU",
      color: "#faf9f9",
      text: "white"
    },
    {
      id: 6,
      name: "cotton",
      price: 2000,
      qty: 1,
      category: "cloth",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6eLmlij1dMcLuiGznWiNSTBgC3VL-DQhDnQ&usqp=CAU',
      color: "#faf9f9"
    },
    {
      id: 7,
      name: "oppo",
      price: 40000,
      qty: 1,
      category: "mobile",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJHwX0nSfPZEu6Pnc0ecbqs5J035ZhJEpuw&usqp=CAU",
      color: "#faf9f9",
      text: "white"
    },
    {
      id: 8,
      name: "gujarati",
      price: 1500,
      qty: 1,
      category: "food",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_oYtFzhSw5j_sGbHdosqvS2kNmTLpJ8sRNA&usqp=CAU",
      color: "#faf9f9"
    },
    {
      id: 9,
      name: "punjabi",
      price: 1000,
      qty: 1,
      category: "food",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD7sd_BbkgvPVUAnuHgBAqRvKcNcyoafYog&usqp=CAU",
      color: "#faf9f9",
      text: "white"
    },
  ]);

  const [filter, setFilter] = useState([]);

  const handleClick = (category) => {
    let oldrecord = [...allrecord];

    if (category === "all") {
      setFilter(allrecord)
    } else {
      oldrecord = allrecord.filter((item) => {
        return item.category === category
      })
      setFilter(oldrecord)
    }
  }

  useEffect(() => {
    setFilter(allrecord)
  }, [])
  return (
    <>
      <Table
        allrecorddata={filter}
        btnclick={handleClick}
        setAllRecord={setAllRecord}
      />
    </>
  )
};
export default App;