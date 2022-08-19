// import "./App.css";
import styled from '@emotion/styled'
// import TableControlsContainer from "./controls/TableControlsContainer";
import TableMainControls from "./controls/TableMainControls";

// body, td, th
const TableControlsContainer = styled.div`
    background-color: grey;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #ffff00;
    width: 80%;
    height: 540px;
    margin: 8px
`

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TableControlsContainer>
                    <TableMainControls />
                </TableControlsContainer>
                {/* <h1 className="greeting">Hello World</h1> */}
            </header>
        </div>
    );
}

export default App;
