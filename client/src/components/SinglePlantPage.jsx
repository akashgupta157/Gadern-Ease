
import { Box, Heading, Image, Text,Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableContainer, } from '@chakra-ui/react'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SinglePlantPage = () => {
    const {id}=useParams()
    const [plant,setPlant]=useState({})
    console.log(id)
    const getPlant=(id)=>{
        
        axios.get(`http://localhost:5000/posts/${id}`)
        .then(res=>{
            setPlant(res.data)
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getPlant(id)
    },[])

  return (
    
    
    <Box w="80%" margin="auto">
        <Box>
            <Text style={{backgroundColor:"#6db644",width:"fit-content",borderRadius:"15px",padding:"0px 5px",color:"White",marginTop:"10px"}} >PLANTS</Text>
            <Heading>{plant.english_name}({plant.botanical_name})</Heading>
        </Box>
            <Box>
                <Text>Author: {plant.userName}</Text>
                <Heading size="md">{plant.description}</Heading>
            </Box>
            <Box>
                <Image src={plant.image} />
            </Box>
        <TableContainer>
    <Table size='sm'>
        <Thead>
        <Tr>
            <Th>Growth Height</Th>
            <Th>Ligth</Th>
            <Th>Flower Color</Th>
            <Th>Garden Style</Th>
        </Tr>
        </Thead>
        <Tbody>
        <Tr>
            <Td>{plant.factSheet?.growth_height}</Td>
            <Td>{plant.factSheet?.light}</Td>
            <Td>{plant.factSheet?.flower_color}</Td>
            <Td>{plant.factSheet?.garden_style}</Td>
        </Tr>
        </Tbody>
    </Table>
</TableContainer>
        <Heading>Origin</Heading>
        <Text>{plant?.origin}</Text>
        <Heading>Location</Heading>
        <Text>{plant?.location}</Text>
        <Heading>Fertilizer</Heading>
        <Text>{plant?.fertilizing}</Text>
        <Heading>Diseases and Pest</Heading>
        <Text>{plant?.diseases_pests}</Text>
    </Box>
  )
}

export default SinglePlantPage