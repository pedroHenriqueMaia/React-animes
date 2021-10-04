import { useEffect, useState } from "react";
import Cards from "../../components/cards";
import Pagination from "../../components/pagination";
import SearchInput from "../../components/searchInput";
import qs from 'qs';
import './home.css';

function Home() {
    const url = 'https://kitsu.io/api/edge/';
    const [text, setText] = useState('');
    const [info, setInfo] = useState({});
    const [offset, setOffset] = useState(0);
    const LIMIT = 12;

    useEffect(() => {
        // setInfo({});

        const query = {
            page: {
                limit: LIMIT,
                offset
            }
        };

        if(text) {
            query.filter = {
             text,
            }
        }

        fetch(`${url}anime?${qs.stringify(query)}`)
        .then((res) => res.json())
        .then((res) => {
            setInfo(res);
            console.log(res)
        })
    }, [text, offset]);

    return (
      <div className="container">
        <div className="row">
           <div align="center" className="col-12">
                <h1>Animes Info</h1>
                <SearchInput value={text} onChange={(search) => setText(search)}/>
            </div>
           </div>
               {text && !info.data && (
                   <span>Carregando..</span>
               )}
               {info.data && (
                   <div className="row">
                   {info.data.map((item) => (
                       <div className='col-sm-4 mb-5' key={item.id}>
                         { <Cards name={item.attributes.canonicalTitle}
                        gender={item.attributes.ageRatingGuide} 
                        image={item.attributes.posterImage.medium} 
                        status={item.attributes.status} 
                        origin={item.attributes.favoritesCount} /> }
                       </div>
                       ))}
                    </div>
               )}
               {info.meta && (
                <div align="center">
                <Pagination limit={LIMIT} 
                total={info.meta.count} 
                offset={offset} 
                setOffset={setOffset}/>
                </div>
               )}
      </div>
    );
  }
  
  export default Home;
  