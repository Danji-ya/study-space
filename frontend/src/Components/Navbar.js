import React from 'react'


const Navbar = () => {


    return (
        <div id="navbar">
            <div id="menu">
                <ul>
                    <li><a href="/" title="">메인</a></li>
                    <li><a href="/RestMenu" title="">휴게소 메뉴</a></li>
                    <li><a href="/ReviewCreate" title="">리뷰 작성</a></li>
                    <li><a href="mailto:erang15@ajou.ac.kr" title="">지원</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;