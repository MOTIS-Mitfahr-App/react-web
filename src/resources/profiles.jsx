import { 
    List, 
    TextField, 
    EmailField,
    Datagrid,
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    Create
} from "react-admin";
const profileFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
];

export const ProfileList = () => (
  <List filters={profileFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);

export const ProfileEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="auth_id" disabled />
        <DateInput source="created_at" disabled />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="surname" />
        <TextInput source="name" />
        <TextInput source="gender" />
        <TextInput source="description" />
      </SimpleForm>
    </Edit>
);

export const ProfileCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="auth_id" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="surname" />
        <TextInput source="name" />
        <TextInput source="gender" />
        <TextInput source="description" />
      </SimpleForm>
    </Create>
  );
