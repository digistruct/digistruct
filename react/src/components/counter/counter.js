import React, { useState } from 'react'
import { Button } from 'reactstrap'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button color="primary" onClick={() => setCount(count + 1)}>
                click
            </Button>
            <Button color="danger" onClick={() => setCount(0)}>
                reset
            </Button>
        </div>
    )
}

export default Counter