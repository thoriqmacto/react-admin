import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import { UserShow } from "./userShow";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />    
    <Resource name="users" list={UserList} show={UserShow} recordRepresentation="name" />
  </Admin>
);
