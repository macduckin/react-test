'use client'
import Image from "next/image"
import { FaBackward } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';
import drag from "../../../public/images/drag.svg"
import avatar from '../../../public/images/avatar.jpg'
import { useState } from "react";
export default function ModalWindow({ close }) {
    const [step, setStep] = useState(1)
    const [text, setText] = useState('')
    const [selectedImage, setSelectedImage] = useState(null)

    const fileChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(URL.createObjectURL(file))
        console.log(selectedImage);
        setStep(2)
    }
    const textChange = (e) => {
        const newText = e.target.value
        const words = newText.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
        if (words.length <= 200) {
            setText(newText)
        }
        else {
            alert('too much')
        }
    }
    return (
        <div className="overlay" >
            {step == 1 && <div className="modal">
                <div className="modal-intro">
                    <h1>Create new post</h1>
                    <hr />
                </div>
                <div className="drag">
                    <Image src={drag} className="drag-img" />
                    <h1>Drag photos and videos here</h1>
                    <label htmlFor="fileInput" className="btn file">
                        Select from computer
                        <input type="file" id="fileInput" style={{ display: "none" }} onChange={fileChange} />
                    </label>
                </div>
            </div>}
            <button className="close" onClick={close}>X</button>

            {step == 2 && <div className="modal-file">
                <div className="modal modalist">
                    <div className="modal-intro modal-post">
                        <FaBackward />
                        <h1>Create new post</h1>
                        <h1 className="share">Share</h1>
                    </div>
                    <hr />
                    <div className="img-com">
                        <div className="img">
                            {selectedImage ? (
                                <img src={selectedImage} />
                            ) : (
                                <p>no image</p>
                            )}
                        </div>
                        <div className="comment">
                            <div className="user">
                                <Image src={avatar} className="custom" />
                                <p>terrylucas</p>

                            </div>
                            <div className="right">
                                <div className="textarea">
                                    <textarea placeholder="Write a caption" value={text} onChange={textChange}></textarea>
                                </div>
                                <div className="smile-text">
                                    <FaSmile />
                                    <p>{text.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '').length}, 200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>

    )
}