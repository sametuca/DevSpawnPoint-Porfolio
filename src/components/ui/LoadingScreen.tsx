import { Html, useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'
import './LoadingScreen.css'

const LoadingProgress = () => {
    const { progress, active, item } = useProgress()
    const [displayProgress, setDisplayProgress] = useState(0)
    const [currentItem, setCurrentItem] = useState('')

    useEffect(() => {
        setDisplayProgress(progress)
    }, [progress])

    useEffect(() => {
        if (item) {
            // Extract filename from path
            const fileName = item.split('/').pop()?.replace('.gltf', '').replace('.glb', '') || ''
            setCurrentItem(fileName)
        }
    }, [item])

    if (!active && displayProgress >= 100) return null

    return (
        <div className="loading-container">
            <div className="loading-content">
                {/* Animated Logo */}
                <div className="loading-logo">
                    <div className="logo-ring"></div>
                    <div className="logo-ring-2"></div>
                    <div className="logo-center">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#gradient1)" />
                            <path d="M2 17L12 22L22 17" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
                            <path d="M2 12L12 17L22 12" stroke="url(#gradient2)" strokeWidth="2" strokeLinecap="round" />
                            <defs>
                                <linearGradient id="gradient1" x1="2" y1="2" x2="22" y2="12">
                                    <stop offset="0%" stopColor="#00ffff" />
                                    <stop offset="100%" stopColor="#00ff88" />
                                </linearGradient>
                                <linearGradient id="gradient2" x1="2" y1="12" x2="22" y2="22">
                                    <stop offset="0%" stopColor="#00ffff" />
                                    <stop offset="100%" stopColor="#00ff88" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h1 className="loading-title">DevSpawnPoint</h1>

                {/* Loading Status */}
                {currentItem && (
                    <p className="loading-status">
                        Loading: <span className="loading-item-name">{currentItem}</span>
                    </p>
                )}

                {/* Progress Bar */}
                <div className="progress-container">
                    <div className="progress-bar-wrapper">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${displayProgress}%` }}
                        >
                            <div className="progress-shine"></div>
                        </div>
                    </div>
                    <p className="progress-text">{displayProgress.toFixed(0)}%</p>
                </div>
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

