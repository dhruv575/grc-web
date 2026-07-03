import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#1B1420",
  padding: "96px 24px",
  fontFamily: "'Inter', sans-serif",
  backgroundColor: "#F7F3EC",
  minHeight: "60vh",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 24,
  maxWidth: 420,
  fontWeight: 700,
  color: "#1B3A5C",
}

const paragraphStyles = {
  marginBottom: 32,
  lineHeight: 1.6,
}

const linkStyles = {
  color: "#2F6FB0",
  fontWeight: 600,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry, we couldn't find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/" style={linkStyles}>Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
