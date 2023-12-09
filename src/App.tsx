import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import { UserShow } from "./userShow";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";

export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />    
    <Resource name="users" list={UserList} show={UserShow} recordRepresentation="name" icon={UserIcon} />
  </Admin>
);
