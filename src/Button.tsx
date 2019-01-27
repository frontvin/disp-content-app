import React from "react";

import "./Button.css";

const Button: React.FC = () => {
    return (
        <div>
            {this.props.items.map((item, index) =>
                <a href={item.link} key={index} className="btn">{item.label}</a>
            )}
        </div>
    );
};

export { Button };
