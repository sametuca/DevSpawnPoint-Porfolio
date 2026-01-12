import { Html, useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'
import './LoadingScreen.css'

const LoadingProgress = () => {
    const { progress, active } = useProgress()
    const [displayProgress, setDisplayProgress] = useState(0)

    useEffect(() => {
        setDisplayProgress(progress)
    }, [progress])

    if (!active && displayProgress >= 100) return null

    return (
        <div className="loading-container">
            <div className="loading-content">
                <div className="loading-icon">
                    <div className="cube">
                        <div className="face front"></div>
                        <div className="face back"></div>
                        <div className="face right"></div>
                        <div className="face left"></div>
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                    </div>
                </div>
                <h2 className="loading-title">DevSpawnPoint</h2>
                <div className="progress-bar-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${displayProgress}%` }}
                    />
                </div>
                <p className="loading-text">{displayProgress.toFixed(0)}% loaded</p>
            </div>
        </div>
    )
}

export const LoadingScreen = () => {
    return (
        <Html fullscreen>
            <LoadingProgress />
        </Html>
    )
}
