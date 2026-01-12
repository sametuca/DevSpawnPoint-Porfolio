import { BackSide } from 'three'

export const Room = () => {
    return (
        <group>
            {/* Room Shell - Inverted Box */}
            <mesh receiveShadow position={[0, 1.5, 0]}>
                <boxGeometry args={[6, 3, 6]} />
                <meshStandardMaterial
                    color="#1a1a2e"
                    side={BackSide}
                    roughness={0.8}
                />
            </mesh>

            {/* Floor - Separate if we want specific texture later */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
                <planeGeometry args={[6, 6]} />
                <meshStandardMaterial color="#2d2d3a" roughness={0.5} />
            </mesh>

            {/* Ceiling - Acoustic Foam placeholder */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 2.99, 0]}>
                <planeGeometry args={[6, 6]} />
                <meshStandardMaterial color="#111" roughness={0.9} />
            </mesh>
        </group>
    )
}
