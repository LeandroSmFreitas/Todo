import { DbProvider } from "./DbProvider"

const Providers = ({ children }) => {
    return (
        <DbProvider>
                {children}
        </DbProvider>
    )
}

export default Providers