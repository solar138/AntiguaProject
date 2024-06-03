'use client';

export default function Disclaimer({children, referrer} : {children : any, referrer : string}) {
    try {
        if (document.referrer.indexOf(referrer) < 0) {
            return children;
        }
    } catch {
        return children;
    }
}