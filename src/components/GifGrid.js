import React from 'react';
import { GifGridItem } from './GifGridItem';
import {Container,Row,Col} from 'react-bootstrap'
import { useFetchGift } from '../hooks/useFetchGift';


export const GifGrid = ( { category } ) => {
   
    const {loading, data} = useFetchGift(category);
    console.log(loading);
    console.log(data);

    
  

    return (
        <>
        { loading && <p>Loading...</p> }
        <Container>
            <Row>
            { data.map(img=>(
                <Col md={4} sx={6} key={ img.id }>
                 <GifGridItem 
                          { ...img }/>
                </Col>
               )) }
               
           </Row>
        </Container>
        </>
    )
}
