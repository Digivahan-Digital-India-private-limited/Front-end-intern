// api/userApi.js
import axios from "axios";

const fetchUserDetails = async (qr_id) => {
  const res = await axios.get(
    `http://localhost:3000/api/user-details/${qr_id}`,
  );

  if (!res.data.success) {
    throw new Error(res.data.message);
  }

  return res.data.data;
};

export default fetchUserDetails
