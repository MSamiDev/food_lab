import { useEffect } from "react";

export default function useLocoScroll() {
    useEffect(() => {
        let scroll:any;
        // @ts-ignore
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: document.querySelector("[data-scroll-container]"),
                smooth: true,
                smoothMobile: true,
                lerp: 0.12,
                multiplier: .5
            });
        });
        return () => {
            if (scroll) {
                scroll.destroy();
            }
        }
    },[]);
}