import React, {useState, useEffect} from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Plan from '../Plan/Plan';
import axios from 'axios';

const PricesGrid = () => {

  const [loading, setLoading] = useState(false)
  const [priceData, setPriceData] = useState([])
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const pricesFromApi = await axios.get(
          `https://prog-3-leads-api-rest.vercel.app/prices`
        );

        setPriceData(pricesFromApi.data)
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    getData()
  }, [])

  console.log(priceData)
  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {!loading && priceData.map((item) => {
          return <Plan tier={item} />
          
        }
        )}
      </Grid>
    </Container>
  )
}

export default PricesGrid