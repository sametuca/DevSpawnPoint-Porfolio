import { Component, type ReactNode } from 'react'

interface Props {
    children: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
    error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback
            }

            return (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: '#fff',
                    background: '#1a1a2e',
                    padding: '2rem',
                    borderRadius: '8px',
                    maxWidth: '500px'
                }}>
                    <h2>Bir şeyler ters gitti 😕</h2>
                    <p>Sayfa yenileniyor...</p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            marginTop: '1rem',
                            padding: '0.5rem 1rem',
                            background: '#4fc3f7',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#fff',
                            cursor: 'pointer'
                        }}
                    >
                        Yeniden Yükle
                    </button>
                </div>
            )
        }

        return this.props.children
    }
}
