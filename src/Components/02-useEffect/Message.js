import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y:0 });
    const { x, y } = coords;
    const moseMove = (e) => {
        const coors = { x: e.x, y: e.y };
        setCoords(coors);
    }

    useEffect(() => {
        window.addEventListener('mousemove', moseMove);

        return () => {
            window.removeEventListener('mousemove', moseMove);
        }
    }, [])
    return (
        <div>
            <h3>Eres Genial</h3>
            <p>
                x:{ x } y:{y}
            </p>
        </div>
    )
}
