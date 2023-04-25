import { useState } from "react"
import { vehicleImgs } from "../../data"

const VehicleSelect = (props: { numOfVehicles?: number }) => {
    const [index, setIndex] = useState(1)
    let length = props.numOfVehicles ?? 6

    const handlePrev = () => {
        let newIndex = index - 1
        setIndex(newIndex < 1 ? length : newIndex)
    }

    const handleNext = () => {
        let newIndex = index + 1
        setIndex(newIndex > length ? 1 : newIndex)
    }

    return (
        <div className="flex w-96 flex-col justify-between rounded-md bg-slate-600">
            {/* <p>{index}</p> */}
            <img
                src={`/${vehicleImgs[index - 1]}.png`}
                alt={`${vehicleImgs[index - 1]}`}
            />
            <h1>{`${vehicleImgs[index - 1]}`}</h1>
            <div className="mb-2 flex justify-between">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default VehicleSelect
