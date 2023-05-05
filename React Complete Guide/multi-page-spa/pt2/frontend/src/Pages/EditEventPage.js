import { useParams } from "react-router-dom";

function EditEventPage() {
  const params = useParams();

  return (
    <>
      <h1>My Edit Event Page</h1>
      <p>You're editing the event with the id: {params.eventId}</p>
    </>
  );
}

export default EditEventPage;
