import { createContext } from "react";
import db from '../data/db.json';

// Creating a context to hold the shared data
export const TweetPostContext = createContext(db["current-user"]);