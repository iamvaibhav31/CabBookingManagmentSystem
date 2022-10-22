import axios from "axios";

const DriverBasicURL = axios.create({
     baseURL: "https://jsonplaceholder.typicode.com"
});

const RiderBasicURL = axios.create({
     baseURL: "https://jsonplaceholder.typicode.com"
});

const SerchLocationURL = "https://nominatim.openstreetmap.org/search?"

export {
     DriverBasicURL,
     RiderBasicURL,
     SerchLocationURL
}
