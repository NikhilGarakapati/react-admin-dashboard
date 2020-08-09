import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { UserList} from './users';
import { UserCreate} from './userCreate';
import jsonServerProvider from 'ra-data-json-server';
//import { CommentList } from './comments';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/NikhilGarakapati/demo');

function App() {
  return(
      <Admin title="GoApttiv" dataProvider={dataProvider}>
        <Resource name="repdata" list={UserList} edit={EditGuesser} create={UserCreate}/>        
      </Admin>
  )
}

export default App;