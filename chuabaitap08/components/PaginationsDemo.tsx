"use client"
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import styles from "./activeBtn.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function PaginationsDemo() {
    const [currentButton, setCurrentButton] = useState(1);
    const renderedBtn: any = [];
    const handleChangePage = (n: number) => {
        setCurrentButton(n);
        console.log(renderedBtn);
        
    }
    const totalPaginations = 20;
    const renderPaginations = () => {
        let a = 0;
        let b = 0;
        if (currentButton < 4) {
            a = 2;
            b = 5;
        } else if (currentButton > (totalPaginations - 3)) {
            a = (totalPaginations - 3);
            b = totalPaginations - 1;
        } else {
            a = currentButton - 1;
            b = currentButton + 2;
        }
        renderedBtn.push(<button className={`${currentButton == 1 ? styles.active : ""}`} onClick={() => handleChangePage(1)} >1</button>)
        if (currentButton > 3) { renderedBtn.push("...") };
        for (let i = a; i < b; i++) {
            renderedBtn.push(<button className={`${currentButton == i ? styles.active : ""}`} onClick={() => handleChangePage(i)}>{i}</button>)
        }
        if (currentButton < 18) { renderedBtn.push("...") };
        renderedBtn.push(<button className={`${currentButton == totalPaginations ? styles.active : ""}`} onClick={() => handleChangePage(totalPaginations)}>{totalPaginations}</button>)
        return renderedBtn;
    }
    return (
        <div>
            <button onClick={() => handleChangePage(currentButton - 1)} disabled={currentButton == 1}> Pre  <FontAwesomeIcon icon={faArrowLeft} /></button>
            {renderPaginations()}
            <button onClick={() => handleChangePage(currentButton + 1)} disabled={currentButton == totalPaginations}> Next  <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    )
}
