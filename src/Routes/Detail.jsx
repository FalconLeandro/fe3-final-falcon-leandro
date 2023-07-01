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