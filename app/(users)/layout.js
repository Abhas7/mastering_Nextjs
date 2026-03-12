
import Navigation from "../../components/Navigation"

export default function layout({ children }) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

