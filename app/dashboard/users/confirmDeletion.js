import useSWR from "swr";

export default function confirmDeletion({ id }) {
  const { data, error, isLoading } = useSWR(
    `/dashboard/users/api?id=${id}`,
    (path) =>
      fetch(path, {
        method: "DELETE",
      }).then((r) => r.json())
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>DELETED</div>;
}
