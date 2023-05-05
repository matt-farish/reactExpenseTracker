import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>My Event Details Page</h1>
      <p>You are looking at details for the event id: {params.eventId}</p>
    </>
  );
}

export default EventDetailPage;
