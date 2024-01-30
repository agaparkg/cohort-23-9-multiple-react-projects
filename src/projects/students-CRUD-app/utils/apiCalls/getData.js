import { BASE_URL } from "../urls";

// export const fetchData = async () => {

//   try {
//     const res = await fetch(BASE_URL);
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default async function fetchData() {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
