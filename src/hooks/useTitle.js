import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Your Toy > ${title}`;
    }, [title])
}

export default useTitle;