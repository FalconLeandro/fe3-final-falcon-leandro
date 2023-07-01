// import axios from 'axios'
// import React from 'react'
// import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { usecontextGlobal } from '../Components/utils/global.context'


// const Detail = () => {
//   const { dentistState, dentistDispatch } = usecontextGlobal()

//   const params = useParams()


//   console.log(params.id)

//   const url = `https://jsonplaceholder.typicode.com/users/${params.id}`


//   useEffect(() => {
//     axios(url)
//       .then(res => {
//         console.log(res)
//         dentistDispatch({ type: 'GET_DENTIST', payload: res.data })
//       })
//   }, [url])


//   return (

//     <div className='card-grid'>

//       <table>
//         <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Phone</td>
//           <td>Website</td>
//         </tr>
//         <tr>
//           <td>
//             <h1>{dentistState.dentist.name}</h1></td>
//           <td>
//             <h2>{dentistState.dentist.email}</h2> </td>
//           <td>
//             <h3>{dentistState.dentist.phone}</h3> </td>
//           <td>
//             <h3>{dentistState.dentist.website}</h3> </td>
//         </tr>
//       </table>

//     </div>

//   )
// }

// export default Detail

import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usecontextGlobal } from '../Components/utils/global.context';
import '../Components/styles/Detail.css'

const Detail = () => {
  const { dentistState, dentistDispatch } = usecontextGlobal();
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        dentistDispatch({ type: 'GET_DENTIST', payload: response.data });
      } catch (error) {
        console.error('Error fetching dentist:', error);
      }
    };

    fetchData();
  }, [dentistDispatch, url]);

  return (
    <div className="card-grid-details">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h1>{dentistState.dentist.name}</h1>
            </td>
            <td>
              <h2>{dentistState.dentist.email}</h2>
            </td>
            <td>
              <h3>{dentistState.dentist.phone}</h3>
            </td>
            <td>
              <h3>{dentistState.dentist.website}</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;