import axios from "axios";
import { useEffect, useState } from "react";

const useGeo = () => {
  const [geolocation, setGeolocation] = useState(null);
  const url = `https://geolocation-db.com/json/bd2b0510-be5a-11ec-995d-ff924f0ab448`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();
        if (data) {
          const visit = {
            country_code: data.country_code,
            country_name: data.country_name,
            city: data.city,
            postal: data.postal,
            latitude: data.latitude,
            longitude: data.longitude,
            ip: data.IPv4 || data.IPv6 || data.IP,
            state: data.state,
            count: 1,
          };
          const res = await axios.put(
            `https://watcher-akash.herokuapp.com/api/visitors?api=4662d0906880d044d12c8025ad698b6b911278db5395005184f259b1b5fc1551`,
            visit
          );
        }
        setGeolocation(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  return {
    geolocation,
  };
};

export default useGeo;
