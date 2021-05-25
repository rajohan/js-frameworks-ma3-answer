import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

import { BASE_URL } from "../constants/api";

const PageDetail = () => {
    const [page, setPage] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const getPage = async () => {
            try {
                const response = await fetch(`${BASE_URL}wp/v2/pages/${id}`);
                const json = await response.json();

                setPage(json);
            } catch (error) {
                console.log(error);
                setError("Something went wrong!");
            } finally {
                setLoading(false);
            }
        }

        getPage();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            <h1>{page.title.rendered}</h1>
            <h2>{moment(page.date).format("DD MMMM YYYY")}</h2>
            <p dangerouslySetInnerHTML={{__html: page.excerpt.rendered}} />
        </div>
    )
}

export default PageDetail;