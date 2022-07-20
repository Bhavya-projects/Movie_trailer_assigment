import React from "react";
import { BsChevronLeft , BsChevronRight } from 'react-icons/bs';

function Pagination() {
    return(
        <div className="d-flex align-items-center justify-content-center m-5">
            <BsChevronLeft className="mx-3 arrow"/>
            <span className="mx-3 active-page">1</span>
            <span className="mx-3">2</span>
            <span className="mx-3">3</span>
            <span className="mx-3">4</span>
            <span className="mx-3">5</span>
            <span className="mx-3">6</span>
            <BsChevronRight className="mx-3 arrow"/>
        </div>
    )
}

export default Pagination;