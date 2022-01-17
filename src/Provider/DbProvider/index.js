import { createContext, useState } from "react";

export const DbContext = createContext()


export const DbProvider = ({ children }) => {
    const [database, setDatabase] = useState([]);
    const [token, setToken] = useState();
    const [user, setUser] = useState();
    const [id, setId] = useState(1);

    const CreateUser = (data) => {
        const newUser = {
            id: id,
            name: data.name,
            email: data.email,
            password: data.password,
            task: [],
        }
        setDatabase([...database, newUser])
        localStorage.setItem('@token', id)
        setId(id + 1)
    }

    const LoginUser = (data) => {
        const user = (database.find(user => user.email === data.email && user.password === data.password))
        if(user){
            return user.id
        }
    }

    const GetToken = () => {
        setToken(localStorage.getItem('@token'))
    }

    const FindUser = (id) => {
        setUser(database.find(user => user.id === id))
    }


    return (
        <DbContext.Provider value={{
            CreateUser,
            LoginUser,
            GetToken,
            token,
            FindUser,
            user
        }}>
            {children}
        </DbContext.Provider>
    )
}