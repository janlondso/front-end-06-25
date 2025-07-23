import { ArrowUp } from "lucide-react"

function Footer() {
  return (
    <footer>
        {" "}
        <p >&copy; {new Date().getFullYear()} Jan's Portfolio. All rights reserved.
            {" "}
        </p>

        <a href="#hero">
          <ArrowUp size={20} />
        </a>
    </footer>
  )
}

export default Footer