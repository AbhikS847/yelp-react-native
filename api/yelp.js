import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer 47ChwAIFXlHKgQVoIuZRNr45LpHTFaGk_WPst0TzSkF6r-n3ht08D0PLb0UbBRQyVkJhJdfVIAKrBn4IwfvXj0TIhrPC6tAR2l0kroMqC5BoxUXqe8SxU30zKsCIY3Yx"
    }
});