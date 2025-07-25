import { useEffect, useState } from "react";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [cabins, setCabins] = useState([]);
  useEffect(() => {
    function fetchCabins() {
      setCabins(getCabins());
    }
    fetchCabins();
  }, [cabins]);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://smrkcdgckgdtwuhoebml.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg" />
    </Row>
  );
}

export default Cabins;
