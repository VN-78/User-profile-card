import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { App } from './App'
import { UserCard } from './UserCard'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <div className="root font-serif flex items-center justify-center min-h-screen md:box-border flex-wrap gap-4 m-0 bg-gray-400  ">
    <UserCard  />
    </div>
  </StrictMode>,
)

