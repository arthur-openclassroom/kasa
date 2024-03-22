import { React, useState } from "react";
import ArrowUp from "../../assets/svg/arrow-up.svg";

const Gallery = (props) => {
    const [currentImg, setCurrentImg] = useState(0);
    const numberOfImg = props.imgList.length;
    const nextImg = () => {
        setCurrentImg(currentImg === numberOfImg - 1 ? 0 : currentImg + 1);
    };
    const prevImg = () => {
        setCurrentImg(currentImg === 0 ? numberOfImg - 1 : currentImg - 1);
    };

    return (
        <div className="gallery-component">
            <img className="gallery-img" src={props.imgList[currentImg]} />
            {numberOfImg > 1 &&
                <>
                    <img
                        src={ArrowUp}
                        className="arrow arrow-left"
                        onClick={prevImg}
                        width={50}
                    />
                    <img
                        src={ArrowUp}
                        className="arrow arrow-right"
                        onClick={nextImg}
                        width={50}
                    />
                    <span className="page-counter">
                        {`${currentImg+1}/${numberOfImg}`}
                    </span>
                </>
            }

        </div>
    );
};

export default Gallery;