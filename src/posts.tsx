/* eslint-disable react/jsx-key */
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
  useRecordContext
} from "react-admin";

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />
];

export const PostList = () => (
  <List filters={postFilters} >
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" link="show" />
      <TextField source="title" />
      <EditButton />      
    </Datagrid>
  </List>
);

export const PostEdit = () => (
  <Edit title={<PostTitle/>}>
    <SimpleForm>
      <TextInput source="id" inputProps={{disabled:true}} />
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />      
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>      
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);