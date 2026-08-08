export const getLeads = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please login again.");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/leads`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch leads");
  }

  return data.data;
};
