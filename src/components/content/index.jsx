import { Loading } from "../Loading";

export function Content({ error, loading, data, errorMessage, renderContent }) {
  if (error) return <p>{errorMessage}</p>;
  if (loading) return <Loading />;
  if (data) return renderContent(data);
  return null;
}
