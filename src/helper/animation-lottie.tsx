import React from "react";
import Lottie from "lottie-react";

interface AnimationLottieProps {
    animationPath: object;
    width?: string | number;
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({ animationPath, width = "95%" }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        style: {
            width: width,
        },
    };

    return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;