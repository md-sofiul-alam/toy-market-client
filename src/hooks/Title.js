import { useEffect } from "react"

const Title = title => {
    useEffect(() => {
        document.title = `Your Toy > ${title}`;
    }, [title])
}

export default Title;