import styled from 'styled-components/macro'
import {useState} from 'react'

export default function CreateNewInquiry() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [length, setLength] = useState("")
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")
    const [material, setMaterial] = useState("")
    const [amount, setAmount] = useState("")

    // const Form = () => {
    //
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!name) {
            return
        }

    }

    return (
        <Form onSubmit={handleSubmit}>
            <p>Product Name</p>
            <input
                className="inputField"
                type="text"
                value={name}
                onChange={({target}) => setName(target.value)}
            />
            <p>Product Description</p>
            <input
                className="inputField"
                type="text"
                value={description}
                onChange={({target}) => setDescription(target.value)}
            />
            <div className="form-group-dimensions">
                <p>Maximum Length of your Part</p>
                <input
                    className="inputField"
                    type="text"
                    value={length}
                    onChange={({target}) => setLength(target.value)}
                />
                <p>Maximum Width of your Part</p>
                <input
                    className="inputField"
                    type="text"
                    value={width}
                    onChange={({target}) => setWidth(target.value)}
                />
                <p>Maximum Height of your Part</p>
                <input
                    className="inputField"
                    type="text"
                    value={height}
                    onChange={({target}) => setHeight(target.value)}
                />
            </div>
            <p>Material of your Part</p>
            <input
                className="inputField"
                type="text"
                value={material}
                onChange={({target}) => setMaterial(target.value)}
            />
            <p>Amount required</p>
            <input
                className="inputField"
                type="text"
                value={amount}
                onChange={({target}) => setAmount(target.value)}
            />
            <button disabled={!name} type="submit">
                Add
            </button>
        </Form>
    )
}

const Form = styled.form`
  display: grid;
  background-color: white;
  height: fit-content;
  width: 100%;
  justify-content: center;
  text-align: center;


  input {
    text-align: center;
    flex-grow: 1;
    border-color: var(--primary-color);
    border-width: 2px;
    border-radius: 10px;
    padding: 8px;
    margin: 8px;
  }

  .inputField {
    background-color: whitesmoke;
  }
`
