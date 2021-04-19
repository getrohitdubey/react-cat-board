import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CatAvatar from '../../../components/CatAvatar';
import PaginationRounded from '../../../components/PaginationRounded'
import {getCats, getCatsByPage} from '../../../services/cats';

const useStyles = makeStyles({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
  });

const CatList = () => {
    const classes = useStyles();

    const [cats, setCats] = useState({})
    useEffect(async () => {
        const resp = await getCats()
        console.log(">>>>>>>>>>",resp.data)
        setCats(resp.data);
    }, [])

    const handleChange = async (e,page) => {
        const resp = await getCatsByPage(page);
        setCats(resp.data);
    }

    return (
        <div>
        <div className={classes.style}>
            {cats.length && cats.map((cat)=>{
                return(
                    <CatAvatar data={cat}/>
                )
            })}
        </div>
        <div>
            <PaginationRounded onChange={handleChange}/>
        </div>
        </div>
    )
}

export default CatList
