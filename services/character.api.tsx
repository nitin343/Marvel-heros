import { useEffect, useState } from "react";
import axios from 'axios'
import {useSelector} from 'react-redux'

function getCharacter(){

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchLoading, setSearchLoading] = useState(false);
    const [error, setError] = useState(null);
    const [paginationData, setPagindationData] = useState({total: 0, limit: 0, count: 0, offset: 0, pageSize: 0})
    const {limit, offset}  = useSelector((state: any) => state.paginationDetail.data);
    const {searchDetail} = useSelector((state: any) => state.searchHero)
    const [currentPage, setcurrentPage] = useState(1)
    
    useEffect(() => {
        const recivedlimit = limit;
        const recivedoffset = offset;
        if(searchDetail !== ''){
        setSearchLoading(true)
        var apiUrl = `https://gateway.marvel.com/v1/public/characters?name=${searchDetail}&ts=1632998235&apikey=ff7d1b4aefa575448f941959adefe76d&hash=bc74402412971310d7a50ccd0dff3c7b`;
        }else{
        setLoading(true)
        var apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=1632998235&apikey=ff7d1b4aefa575448f941959adefe76d&hash=bc74402412971310d7a50ccd0dff3c7b&limit=${recivedlimit}&offset=${recivedoffset}`;
        }

        const cancelToken = axios.CancelToken.source();

        axios.get(apiUrl, { cancelToken: cancelToken.token })
            .then(response => {
                setCharacters(response.data.data.results);
                setPagindationData({
                    total: response.data.data.total,
                    limit: response.data.data.limit,
                    count: response.data.data.count,
                    offset: response.data.data.offset,
                    pageSize: Math.ceil(response.data.data.total /response.data.data.limit )
                })
                setLoading(false);
                setSearchLoading(false);
                setError(null);
            })
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('Request cancelled');
                    setSearchLoading(true);
                } else {
                    setLoading(false);
                    setSearchLoading(false);
                    setError(error.message);
                }
            });
        return () => {
            cancelToken.cancel('Request cancelled by user');
        };
    }, [limit, offset, searchDetail]);

    return { loading, error, characters, paginationData, searchLoading };
}

export {getCharacter};


function getName() {
    const [heroname, setHeroName] = useState([])
    const [loading, setLoading] = useState(true)
    const {name} = useSelector((state: any) =>  state.searchHero) 

    useEffect(() => {
        const apiUrl = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1632998235&apikey=ff7d1b4aefa575448f941959adefe76d&hash=bc74402412971310d7a50ccd0dff3c7b&limit=5`;

        const cancelToken = axios.CancelToken.source();

        axios.get(apiUrl, { cancelToken: cancelToken.token }).then(response => {
            let name = response.data.data.results.map((result: {name: string}) => {
                return result.name
            })
            console.log(name,'map name');
            setHeroName(name)
            setLoading(false);
            console.log(heroname, 'name');
            console.log(response, 'name');
            
            })
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('Request cancelled');
                } else {
                    setLoading(false);
                    setHeroName([])
                }
            });
    
      return () => {
        cancelToken.cancel('Request cancelled by user');
      }
    }, [name])
    
    return {heroname, loading};
}

export { getName }


function getImage(url: string) {
    console.log(url, 'etf-url');
    
    const [imageData, setImageData] = useState<any>(url)

    useEffect(() => {
        const apiUrl = `?ts=1632998235&apikey=ff7d1b4aefa575448f941959adefe76d&hash=bc74402412971310d7a50ccd0dff3c7b&limit=5`;

        const cancelToken = axios.CancelToken.source();

        axios.get(url+apiUrl , { cancelToken: cancelToken.token }).then(response => {
           setImageData(response.data.data.results.thumbnail)
           })
            .catch(error => {
                if (axios.isCancel(error)) {
                    console.log('Request cancelled');
                } else {
                    setImageData(undefined)
                }
            });
    
      return () => {
        cancelToken.cancel('Request cancelled by user');
      }
    }, [url])
    return {imageData}
}

export {getImage}