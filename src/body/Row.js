import React, {PropTypes} from "react";
import Cell from "./Cell";
import sid from "shortid";

function Row(props) {
    const cells = props.cells.map((cell, key) => {
        return (
            <Cell
                key={key}
                onClick={cell.onClick}
                colSpan={cell.colSpan}
                className={cell.className}
            >
                {cell.content}
            </Cell>
        );
    });

    return (
        <tr key={sid.generate()}>
            {cells}
        </tr>
    );
}

Row.propTypes = {
    cells: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Row;