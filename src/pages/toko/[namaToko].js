import { useRouter } from "next/router";

const detailToko = () => {
    const router = useRouter();
    return <div>{router.query.namaToko}</div>
}

export default detailToko;