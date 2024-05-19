import React, { useEffect, useState } from "react"
import { fetchData } from "./service/AxiosService";

interface UserTemplate {
    id: string,
    name: string,
    address: string
}

export default function App() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState<UserTemplate[]>([]);

    useEffect(() => {
        const getData = async () => {
            try{
                const result: UserTemplate[] = await fetchData('/users');
                console.log("res ", result);
                setData(result);
            }
            catch(err){
                console.log("err ", err)
            }
        }

        getData();
    }, [])

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }
    return(
        <div>
            <h2>Calorie Craft</h2>
            <h3>Count variable : {count}</h3>
            <button onClick={increment}>
                +
            </button>

            <button onClick={decrement} style={{margin: "20px"}}>
                -
            </button>

            {
                data && data.map((el) => (
                    <div>
                        UserName : {el.name} {" "} {el.address}
                    </div>
                ))
            }
        </div>
    )
}