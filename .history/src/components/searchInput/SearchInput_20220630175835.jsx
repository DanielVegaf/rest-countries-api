import React, { useState } from "react";

export function SearchInput({onSearch}) {

    const [input, setInput] = useState("");

    const onSubmitHandler = () => {
        onSearch(input)
    }

    return (
        <div>
            <input type="text"
                placeholder="Search by name..."
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
};

export default SearchInput;
