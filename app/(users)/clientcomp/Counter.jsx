import { useState } from "react";

export const Counter = () => {
    const [Inc, setInc] = useState(0);

    return(
        <button className="bg-green-500 m-5 p-5" onClick={()=>setInc((prev) => prev + 1)}>
        Add - {Inc}
        </button>
    )
}