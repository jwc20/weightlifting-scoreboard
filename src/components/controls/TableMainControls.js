import TableRowHeaderControls from "./TableRowHeaderControls";
import TableRowAthleteControl from "./TableRowAthleteControls";
import styled from "@emotion/styled";

// table
const TableMainContainer = styled.table`
    background-color: black;
    margin: 0 auto;
    border-spacing: 0px;

    width: 100%;
    & > td {
        padding: 0px;
    }
`;

const TableMainControls = () => {
    return (
        <TableMainContainer>
            <TableRowHeaderControls />
            <TableRowAthleteControl />
        </TableMainContainer>
    );
};

export default TableMainControls;
