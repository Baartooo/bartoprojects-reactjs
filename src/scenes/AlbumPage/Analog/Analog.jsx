import React from 'react';
import '../Album/Album.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Album from '../Album/Album';

const images = gql`
  {
    category(where:{name: "analog"}) {
      name
      images {
        title, img{ url }, ordinalNumber, categoryName
      }
    }
  }
`;

const Analog = () => {
  const { loading, error, data } = useQuery(images);

  return (
    <main className="album-wrapper">
      {loading
        ? ''
        : <Album images={data.category.images} />
      }
    </main>
  );
};

export default Analog;
