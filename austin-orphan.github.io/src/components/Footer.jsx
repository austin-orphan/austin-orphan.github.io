import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export default function Footer() {
    return (
        <footer>
            <p>This website is made with</p>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h3>Vite + React</h3>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <p>&copy; 2025 Austin Orphan. All rights reserved.</p>
        </footer>
    );
}