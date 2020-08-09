import React from 'react';
import { SelectInput, Create, ReferenceInput, TextInput, SimpleForm} from 'react-admin';

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm >
            {/* <ReferenceInput source="id" reference="repdata">
                <SelectInput optionText="id" />
            </ReferenceInput> */}
            {/* We have to update Id dynamically */}
            <TextInput source="id"/>
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="representative region" />
            <TextInput source="representative hq" />
            <TextInput source="representative area" />
            <TextInput source="customer name" />
            <TextInput source="customer pincode" />
            <TextInput source="customer phone" />
        </SimpleForm>
    </Create>
);