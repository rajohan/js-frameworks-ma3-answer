import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BASE_URL } from "../constants/api";

const PageList = () => {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPages = async () => {
            try {
                const response = await fetch(BASE_URL + "wp/v2/pages");
                const json = await response.json();

                setPages(json);
            } catch (error) {
                console.log(error);
                setError("Something went wrong!");
            } finally {
                setLoading(false);
            }
        }

        getPages();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <ul>
            {pages.map((page) => (
                <li key={page.id}>
                    <Link to={`/page/${page.id}`}>{page.title.rendered}</Link>
                </li>
            ))}
        </ul>
    );
}

export default PageList;