const React = require('react');
const { Html, Text } = require("@react-email/components");
function Email({props}) {
    return (
        <Html lang="en">
            <Text>Name: ${props.name}</Text>
            <Text>Email: ${props.email}</Text>
            <Text>Surname: ${props.surname}</Text>
        </Html>
    );
}

export default Email
