import { useEffect, useState } from "react";

const Blog = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }

    useEffect(() => {
        console.log('componente montado')
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('componente desmontado')
        }
    }, [windowWidth]);

    return (
        <>
            <div>Ancho de la ventana: {windowWidth} px</div>
            <div>Alto de la ventana: {windowHeight} px</div>
        </>
    )
};
export default Blog;
