import type { CSSProperties } from "react"
import logo from "@app/assets/logo.svg"

export const App = (_props: unknown): JSX.Element => {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="app-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

// =============================================================================
// Misc.
// =============================================================================

const mainStyles: CSSProperties = {
    width: "100%",
    height: "100%",
    margin: "0px",
    padding: "0px",
    display: "flex",
    flexFlow: "row nowrap",
}
