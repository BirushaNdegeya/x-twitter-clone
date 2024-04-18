import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Fetch Tweet API
 * @param {string} url 
 * @returns { data, isPending, error}
 */

const useFetch = (url) => {
   const [data, setData] = useState([]);
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      axios
         .get(url)
         .then((resp) => {
            setData(resp.data);
            setIsPending(false);
            setError(null);
         })
         .catch((err) => {
            setIsPending(false);
            setError(err.message);
         });
   }, [url]);

   return { data, isPending, error };
};

export default useFetch;