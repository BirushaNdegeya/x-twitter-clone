import axios from 'axios';
import { useState } from 'react';

export const apiTweets = async (url) => {
   try {
      const resp = await axios.get(url);
      return resp;
   } catch (er) {
      console.log(er);
   }
};