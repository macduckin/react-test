'use client'
import { FaHome } from '@react-icons/all-files/fa/FaHome'
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillCompass } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="logo">
                        <h1 className="insta">Instagram</h1>
                    </div>
                    <div className="header-search">
                        <input type="search" placeholder='Search' />
                    </div>
                    <div className="icons">
                        <a><FaHome fontSize={20} /></a>
                        <a><BsFillChatDotsFill fontSize={20} /></a>
                        <a><AiOutlinePlusCircle fontSize={20} /></a>
                        <a>< AiFillCompass fontSize={20} /></a>
                        <a>< AiFillLike fontSize={20} /></a>
                    </div>
                </div>
            </div>
        </header >
    )
}