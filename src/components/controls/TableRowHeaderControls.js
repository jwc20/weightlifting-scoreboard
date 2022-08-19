// import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
// import { css } from "@emotion/react";

// style17
const TableRowHeaderContainer = styled.thead`
    color: #00ffff;
    // font-size: 14px;
`;

const TableDiv = styled.div`
    text-align: center;
`;

const TDCol = styled.td`
    column-span: all;
    // props => ({flex: props.column-count})
`;
const TDWidth = styled.td`
    props => ({width: props.width})
`;

const TableRowHeaderControls = () => {
    return (
        <TableRowHeaderContainer>
            <tr>
                <TDCol column-count="3">&nbsp;</TDCol>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <TDCol column-count="7">
                    <TableDiv>
                        <span>SNATCH</span>
                    </TableDiv>
                </TDCol>

                <td>&nbsp;</td>

                <TDCol column-count="7">
                    <TableDiv>
                        <span>CLEAN and JERK</span>
                    </TableDiv>
                </TDCol>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <TDCol column-count="3">
                    <TableDiv>
                        <span>TOTAL</span>
                    </TableDiv>
                </TDCol>
            </tr>

            <tr>
                <TDCol column-count="3">
                    <TableDiv>
                        <span>NAME</span>
                    </TableDiv>
                </TDCol>
                

                <td>&nbsp;</td>

                <td>
                    <TableDiv>
                        <span>BORN</span>
                    </TableDiv>
                </td>
                <td>&nbsp;</td>
                <td>
                    <TableDiv>
                        <span>NATION</span>
                    </TableDiv>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>

                <TDWidth width={35}>
                    <TableDiv>
                        <span>1</span>
                    </TableDiv>
                </TDWidth>

                <TDWidth width={35}>
                    <TableDiv>
                        <span>2</span>
                    </TableDiv>
                </TDWidth>

                <TDWidth width={35}>
                    <TableDiv>
                        <span>3</span>
                    </TableDiv>
                </TDWidth>
                <TDWidth width={35}>
                    <TableDiv>
                        <span>Res</span>
                    </TableDiv>
                </TDWidth>

                <td></td>

                <TDWidth width={10}>
                    <TableDiv>
                        <span></span>
                    </TableDiv>
                </TDWidth>

                <TDWidth width={35}>
                    <TableDiv>
                        <span>1</span>
                    </TableDiv>
                </TDWidth>

                <TDWidth width={35}>
                    <TableDiv>
                        <span>2</span>
                    </TableDiv>
                </TDWidth>

                <TDWidth width={35}>
                    <TableDiv>
                        <span>3</span>
                    </TableDiv>
                </TDWidth>

                <TDWidth width={35}>
                    <TableDiv>
                        <span>Res</span>
                    </TableDiv>
                </TDWidth>

                <TDWidth width={25}>
                    <TableDiv>
                        <span>Pl</span>
                    </TableDiv>
                </TDWidth>

                <TDWidth width={10}></TDWidth>
                <td>
                    <TableDiv>
                        <span></span>
                    </TableDiv>
                </td>

                <TDWidth width={35}>
                    <TableDiv>
                        <span>Res</span>
                    </TableDiv>
                </TDWidth>
                <TDWidth width={25}>
                    <TableDiv>
                        <span>Pl</span>
                    </TableDiv>
                </TDWidth>
            </tr>
        </TableRowHeaderContainer>
    );
};

export default TableRowHeaderControls;
