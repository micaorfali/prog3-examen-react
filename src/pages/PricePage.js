import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader"
import axios from "axios";

const PricePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPrice = async () => {
      setLoading(true)
      try {
        const pricesFromApi = await axios.get(
          `https://prog-3-leads-api-rest.vercel.app/price/${id}`
        );

        console.log(pricesFromApi)

        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    fetchPrice()

  }, [id])

  return (
    <div>
      {loading && <Loader />}
      Price details
      {id}
    </div>
  );
};

export default PricePage;
