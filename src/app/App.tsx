import type { CSSProperties } from "react"

export const App = (_props: unknown): JSX.Element => {
    return (
        <div style={mainStyles}>
            <header>
                <h1>Welcome to React</h1>
                <main>
                    This is a React app!
                </main>
            </header>
        </div>
    )
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
