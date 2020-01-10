import React from "react";

export default ({ close }) => (
    <div className="menu">
        <ul>
            <li onClick={close}>Discover</li>
            <li onClick={close}>Philosophy</li>
            <li onClick={close}>Work</li>
            <li onClick={close}>Contact</li>
        </ul>
    </div>
);
