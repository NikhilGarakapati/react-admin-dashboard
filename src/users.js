import React from 'react';
import { List, Datagrid, TextField, EmailField, ReferenceField, EditButton } from 'react-admin';
import { Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin';
//import { Edit, SimpleForm, ReferenceInput, TextInput, SelectInput} from 'react-admin';

// const PostPanel = ({ id, record, resource }) => (
//     <div dangerouslySetInnerHTML={{ __html: record.body }} />
// );


const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search Anythin'" source="q" alwaysOn />
        <ReferenceInput label="name" source="name" reference="repdata" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const UserList = props => (
    <List filters={<UserFilter />} {...props}>
        <Datagrid>
            {/* <TextField source="id" /> */}
            <ReferenceField source="id" reference="repdata">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="representative region" />
            <TextField source="representative hq" />
            <TextField source="representative area" />
            <TextField source="customer name" />
            <TextField source="customer pincode" />
            <TextField source="customer phone" />
            <EditButton />
            {/* <TextField source="phone" /> */}
        </Datagrid>
    </List>
);


// Edit for Custom Editing options

// export const UserEdit = props => {
//     <Edit {...props}>
//         <SimpleForm>
//             <TextInput disabled source= "id"/>
//             <TextInput optionText="name"/>

//         </SimpleForm>
//     </Edit>
// }

