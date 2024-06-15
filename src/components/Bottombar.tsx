import React from "react";

function Bottombar() {
    return (
        <div className="bottom-0 flex items-center justify-center text-gray-400">
            <a href="https://www.instagram.com/antpoojiangle/" target="_blank"><img src="/Instagram_Glyph_Black.png" alt="Instagram Glyph" className="w-6 h-6 mx-4" /></a>
            <a href="https://www.linkedin.com/in/1jiangand2/" target="_blank"><img src="/InLogo.png" alt="In Logo" className="w-6 h-6 mx-4" /></a>
            <a href="https://github.com/antpoo" target="_blank"><img src="/github-mark.svg" alt="GitHub Invertocat" className="w-6 h-6 mx-4" /></a>
            <p className="mx-4">&copy; 2024</p>
        </div>
    );
}

export default Bottombar;
