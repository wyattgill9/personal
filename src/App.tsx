import type React from "react"

const App: React.FC = () => {
  const links = [
    { name: "Portfolio", url: "https://wyattgill.dev/portfolio" },
    { name: "GitHub", url: "https://github.com/wyattgill9" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/wyatt-gill-17380b323/" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Wyatt Gill</h1>
      <div className="space-y-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className= "block w-full px-20 py-4 text-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default App


