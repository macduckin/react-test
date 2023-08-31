'use client'
import Image from "next/image"
import drag from "../../../public/images/drag.svg"
export default function ModalWindow({ close }) {
    return (
        <div className="overlay" >
            <div className="modal">
                <div className="modal-intro">
                    <h1>Create new post</h1>
                    <hr />
                </div>
                <div className="drag">
                    <Image src={drag} className="drag-img" />
                    <h1>Drag photos and videos here</h1>
                    <button className="btn">Select from computer</button>
                </div>
            </div>
            <button className="close" onClick={close}>X</button>
        </div>
    )
}