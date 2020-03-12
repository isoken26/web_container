import React from 'react';
import './Calendar.css';
import Header from './components/Header'
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import Main from './components/Main';

const Calender = () => {
  const getEvent = () => {
    const client = new ApolloClient({
      uri: 'http://gql.tetora1053.jp',
    })

    client
      .query({
        query: gql`
          {
            events {
              name
            }
          }
        `
      })
      .then(result => console.log(result));
      }

  return (
    <div className="Calender">
      <Header></Header>
      <div>
        <button onClick={getEvent}>getEvent</button>
      </div>
      <Main></Main>
    </div>
  );
}

export default Calender;
