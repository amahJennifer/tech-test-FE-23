import React from "react";
import { Input, SearchBox } from "../styles";

const Search=({onChange}: { onChange: React.ChangeEventHandler<HTMLInputElement>}) => {
    return (
        <SearchBox>
            <Input type="text" onChange={onChange} placeholder="Search by username" />
        </SearchBox>
    );
}

export default Search
