import * as React from "react";
import { Form, Input, Button } from 'reactstrap';

type Props = {
    onSubmit: Function,
};

const Search = (props: Props) => {

    const { onSubmit } = props;

    const [searchQuery, setSearchQuery] = React.useState('');

    const handleChange = event => setSearchQuery(event.target.value);

    const searchUser = () => onSubmit(searchQuery);

    return (

        <Form inline>
            <Input value={searchQuery} onChange={handleChange} placeholder="Enter Gihub User Name" />
            <Button color="dark" onClick={searchUser}>Search</Button>
        </Form>

    );
}

export default Search;