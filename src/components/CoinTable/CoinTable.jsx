import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { fetchCoinData } from "../../services/fetchCoinData"

const CoinTable = () => {

    const [page, setPage] = useState(1)
    const {data, isError, isLoading, error} = useQuery(['coins', page], ()=>fetchCoinData(page, 'usd'), {
        retry: 2,
        retryDelay: 1000,
        cacheTime: 1000 * 60 * 2
    })

    useEffect(()=>{
        console.log(data)
    }, [data])

    if(isError){
        return <div>Error: {error.message}</div>
    }

    if(isLoading){
        return <div>Loading...</div>
    }

  return (
    <div>
        CoinTable <button onClick={()=>setPage(page+1)}>Click</button>{page}
    </div>
  )
}

export default CoinTable