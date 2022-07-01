import React, { useState } from "react";

export function SearchInput({ onSearch }) {

    const [input, setInput] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSearch(input)
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="text"
                    placeholder="Search by name..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </form>
        </div>
    );
};

export default SearchInput;
