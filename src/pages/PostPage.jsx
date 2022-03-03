import { useParams } from "react-router-dom";
import Navbar from "../components/layouts/navbar";
import Card from "./../components/shared/Card";



function PostPage(props) {
    const params = useParams();
    console.log(window.location.href);
    return (
    <>
        <Navbar />
        <Card reverse={false}>
        <h2>Post {params.id}</h2>
        <h2>Post {params.name}</h2>
        </Card>
    </>
  )
}

export default PostPage